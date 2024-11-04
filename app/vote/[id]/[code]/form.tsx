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
import { APICreateVote } from "./api";
import { useState } from "react";
import { OrganizationEntity } from "@/app/square/types";
import { encryptToken } from "../actions";
import { IVoteCategory, VOTE_CATEGORY } from "../types";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface IPropss {
  id: string;
  orgs: OrganizationEntity[];
  category: IVoteCategory;
  maximum: number;
  code: string;
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
  code,
  onSuccessed,
}: IPropss) {
  // 根据maximum动态定义schema
  const formSchema = z.object({
    email: z.string().email(),
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
        code,
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
