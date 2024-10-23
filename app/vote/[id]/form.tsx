"use client";

import { useForm } from "react-hook-form";
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
import { APICreateVote, APISendEmailCode } from "./api";
import { useEffect, useState } from "react";
import { OrganizationEntity } from "@/app/square/types";
import { encryptToken } from "./actions";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const formSchema = z.object({
  email: z.string().email(),
  verifyCode: z.string().min(1),
  captchaCode: z.string().refine((value) => value.length === 6, {
    message: "Captcha code must be exactly 6 characters long.",
  }),
  candidates: z
    .array(z.string())
    .refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    })
    .refine((value) => value?.length <= 10, {
      message: "You can select up to 10 items.",
    }),
  nickname: z.string().min(1),
  walletAddress: z.string().optional(),
  link: z.object({
    telegram: z.string().optional(),
    linkedin: z.string().optional(),
  }),
});

export function VoteForm({
  id,
  orgs,
  onSuccessed,
}: {
  id: string;
  orgs: OrganizationEntity[];
  onSuccessed: () => void;
}) {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
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
  async function onSubmit(values: z.infer<typeof formSchema>) {
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
          render={() => (
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
                <FormDescription>
                  Each email account is allowed one vote, with the option to
                  select between 1 and 10 projects
                </FormDescription>
              </div>
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
                                        field.value?.filter(
                                          (value) => value !== org.id
                                        )
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              {org.name}
                            </FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
              </div>

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

export function SendEmail({ form }: { form: any }) {
  const [captchaCodeOpen, setCaptchaCodeOpen] = useState(false);
  const handleDialogOpenChange = (open: boolean) => {
    if (!open) {
      setCaptchaCodeOpen(false);
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
    if (!email) return;
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

  const onSendEmailCodeImpl = () => {
    APISendEmailCode({ email: form.getValues().email });
    setIsCounting(true);
    setCaptchaCodeOpen(false);
  };

  return (
    <Dialog open={captchaCodeOpen} onOpenChange={handleDialogOpenChange}>
      <DialogTrigger asChild>
        <Button
          type="button"
          onClick={onShowCaptchaCode}
          className="bg-main w-24"
          size="sm"
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
                    <LoadCanvasTemplate />
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
