"use client";

import { ControllerRenderProps, useForm, UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { APICreateVote, APISendEmailCode } from "../api";
import { useEffect, useState } from "react";
import { OrganizationEntity } from "@/app/square/types";
import { encryptToken } from "../actions";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import crypto from "crypto";
import { IVoteCategory, VOTE_CATEGORY } from "../types";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const publicKey = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAt8icam8RbPeukZi5Vzj1
+eOmH+u9ELD0nAzdLOw6UUfsHw0eTJkyH3SisU68YQ7y6OX3/nGE6Wsm/nJR+/OM
aTb7yrK3PqSOUFrjzsH5aau/PTsNg0++EHuZJhZHoMw7iZLw30UZY0MO5rKS55JV
qthADATkixmF824qo6fyZZRmdmNdDwBju3U7kSEy178rzZNeM0h6YP4zjwTIUGdD
ICAE6FUzN4wGO93uoAx/uXAo5Nf/0iq9WqVGwSvB28D5Oh6sc9DJhHKJtrOXJuNw
uTlG6yi9QGuMNL+5alRn6/7JmqHzzGVxgJsuaOaF1eAFs+ndPqSA/8auYcdQoCc1
WwIDAQAB
-----END PUBLIC KEY-----`;

interface IPropss {
  id: string;
  orgs: OrganizationEntity[];
  category: IVoteCategory;
  maximum: number;
  onSuccessed: () => void;
}

type IFormFields = {
  email?: string;
  verifyCode?: string;
  captchaCode?: string;
  link?: {
    telegram?: string;
    linkedin?: string;
  };
  candidates?: string[];
  nickname?: string;
  walletAddress?: string;
};
export function VoteForm({
  id,
  orgs,
  category,
  maximum,
  onSuccessed,
}: IPropss) {
  // 根据maximum动态定义schema
  const formSchema = z.object({
    email: z.string().email(),
    verifyCode: z.string().min(1),
    captchaCode: z.string().optional(),
    candidates: z
      .array(z.string())
      .refine((value) => value.some((item) => item), {
        message: "You have to select at least one item.",
      })
      .refine((value) => value?.length <= maximum, {
        message: `You can select up to ${maximum} items.`,
      }),
    nickname: z.string().min(1),
    walletAddress: z.string().optional(),
    link: z.object({
      telegram: z.string().optional(),
      linkedin: z.string().optional(),
    }),
  });

  // 1. Define your form.
  const form = useForm<IFormFields>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      verifyCode: "",
      candidates: [],
      nickname: "",
    },
  });

  // 2. Define a submit handler.
  const [submitLoading, setSubmitLoading] = useState(false);
  async function onSubmit(values: IFormFields) {
    try {
      setSubmitLoading(true);
      const apiData = {
        id,
        email: values.email,
        verifyCode: values.verifyCode,
        candidates: values.candidates,
        nickname: values.nickname,
        walletAddress: values.walletAddress,
        link: values.link,
      };
      const token = await encryptToken(JSON.stringify(apiData));
      await APICreateVote({
        ...apiData,
        token,
      });
      onSuccessed();
    } catch (err) {
    } finally {
      setSubmitLoading(false);
    }
  }

  const [filterProject, setFilterProject] = useState("");

  const isMultiple = category === VOTE_CATEGORY.MULTIPLE;
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="nickname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <span className="text-red-500">*</span>Nickname
              </FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <span className="text-red-500">*</span>Email
              </FormLabel>
              <FormControl>
                <Input type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="verifyCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <span className="text-red-500">*</span>Verification Code
              </FormLabel>
              <FormControl>
                <div className="flex gap-2 items-center">
                  <Input {...field} />
                  <SendEmail form={form} />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="walletAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Wallet Address</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>
                Enter your wallet address for a chance to receive a limited-time
                POAP.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="link.telegram"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Telgram</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="link.linkedin"
          render={({ field }) => (
            <FormItem>
              <FormLabel>LinkedIn</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="candidates"
          render={({ field }) => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base flex items-center gap-2">
                  <span className="whitespace-nowrap">
                    <span className="text-red-500 ">*</span>
                    Candidate projects
                  </span>
                  <Input
                    placeholder="Search Project Here"
                    onChange={(e) => setFilterProject(e.target.value)}
                  />
                </FormLabel>
                {isMultiple && (
                  <FormDescription>
                    {`Each email account is allowed one vote, with the option to
                  select between 1 and ${maximum} projects`}
                  </FormDescription>
                )}
              </div>
              {isMultiple ? (
                <Multiple
                  orgs={orgs}
                  filterProject={filterProject}
                  form={form}
                />
              ) : (
                <Single
                  field={field as ControllerRenderProps<IFormFields>}
                  orgs={orgs}
                  filterProject={filterProject}
                />
              )}

              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          variant="default"
          className="w-full bg-main"
          size="sm"
          type="submit"
          disabled={submitLoading}
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}

function Multiple({
  orgs,
  filterProject,
  form,
}: {
  orgs: IPropss["orgs"];
  filterProject: string;
  form: UseFormReturn<IFormFields>;
}) {
  return (
    <div className="grid grid-cols-2 gap-2">
      {orgs
        .filter((org) =>
          org.name.toLowerCase().includes(filterProject.toLowerCase())
        )
        .map((org) => (
          <FormField
            key={org.id}
            control={form.control}
            name="candidates"
            render={({ field }) => {
              return (
                <FormItem
                  key={org.id}
                  className="flex flex-row items-start space-x-3 space-y-0"
                >
                  <FormControl>
                    <Checkbox
                      checked={field.value?.includes(org.id)}
                      onCheckedChange={(checked) => {
                        return checked
                          ? field.onChange([...field.value, org.id])
                          : field.onChange(
                              field.value?.filter((value) => value !== org.id)
                            );
                      }}
                    />
                  </FormControl>
                  <FormLabel className="font-normal">{org.name}</FormLabel>
                </FormItem>
              );
            }}
          />
        ))}
    </div>
  );
}

function Single({
  orgs,
  filterProject,
  field,
}: {
  orgs: IPropss["orgs"];
  filterProject: string;
  field: ControllerRenderProps<IFormFields>;
}) {
  return (
    <div className="grid grid-cols-2 gap-2">
      <FormControl>
        <RadioGroup
          onValueChange={(val: string) => field.onChange([val])}
          defaultValue={(field.value as string[])[0]}
          className="flex flex-col space-y-1"
        >
          {orgs
            .filter((org) =>
              org.name.toLowerCase().includes(filterProject.toLowerCase())
            )
            .map((org) => (
              <FormItem className="flex items-center space-x-3 space-y-0">
                <FormControl>
                  <RadioGroupItem value={org.id} />
                </FormControl>
                <FormLabel className="font-normal">{org.name}</FormLabel>
              </FormItem>
            ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
}

export function SendEmail({ form }: { form: any }) {
  const [captchaCodeOpen, setCaptchaCodeOpen] = useState(false);
  const handleDialogOpenChange = (open: boolean) => {
    if (!open) {
      setCaptchaCodeOpen(false);
      form.setValue("captchaCode", "");
      form.clearErrors("captchaCode");
    } else {
      setTimeout(() => {
        loadCaptchaEnginge(6);
      }, 200);
    }
  };

  const [countdown, setCountdown] = useState(60);
  const [isCounting, setIsCounting] = useState(false);
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isCounting && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    } else if (countdown === 0) {
      setIsCounting(false);
      setCountdown(60);
    }
    return () => clearInterval(timer);
  }, [isCounting, countdown]);

  const onShowCaptchaCode = () => {
    const email = form.getValues().email;
    if (!email || isCounting) return;
    setCaptchaCodeOpen(true);
  };

  const onSendEmailCode = () => {
    if (validateCaptcha(form.getValues().captchaCode)) {
      onSendEmailCodeImpl();
    } else {
      form.setError("captchaCode", {
        message: "Captcha code is incorrect.",
      });
    }
  };

  const encryptedData = (data: any) => {
    return crypto.publicEncrypt(
      {
        key: publicKey,
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING, // 使用 RSA_PKCS1_PADDING 填充方案
      },
      Buffer.from(JSON.stringify(data), "utf8") as any
    );
  };

  const onSendEmailCodeImpl = () => {
    APISendEmailCode({
      email: encryptedData({ fuckSybil: form.getValues().email }).toString(
        "base64"
      ),
    });
    setIsCounting(true);
    handleDialogOpenChange(false);
  };

  return (
    <Dialog open={captchaCodeOpen} onOpenChange={handleDialogOpenChange}>
      <DialogTrigger asChild>
        <Button
          type="button"
          onClick={onShowCaptchaCode}
          className="bg-main w-24"
          size="sm"
          disabled={isCounting}
        >
          {isCounting ? `${countdown}s` : "Send Code"}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <div>
          <FormField
            control={form.control}
            name="captchaCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <span className="text-red-500">*</span>Captcha Code
                </FormLabel>
                <FormControl>
                  <div className="flex gap-2 items-center">
                    <Input {...field} />
                    <LoadCanvasTemplate reloadText="Reload" />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div>
          <Button onClick={onSendEmailCode}>Check</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
