"use client";

import React, { useTransition } from "react";
import * as zod from "zod";
import { useForm } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { emailMeSchema } from "@/data_manipulation/model_schemas/zod_schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { SiMinutemailer } from "react-icons/si";
import { sendEmailToDBAction } from "@/data_manipulation/server_actions/email_actions";
import { toast } from "sonner";

export const EmailMe = () => {
  const [isPending, startTransition] = useTransition();

  const form = useForm<zod.infer<typeof emailMeSchema>>({
    resolver: zodResolver(emailMeSchema),
    defaultValues: {
      email: "",
      mail: "",
      name: "",
    },
  });

  const onSubmitEmail = async (values: zod.infer<typeof emailMeSchema>) => {
    try {
      startTransition(() => {
        console.log(values);
        sendEmailToDBAction(values).then((data) => {
          if (data) {
            if (data.success) {
              toast.success(data.success);
              form.reset();
              return;
            }
            if (data.error) {
              toast.error(data.error);
              form.reset();
              return;
            }
          }
        });
      });
    } catch (error) {
      toast.error("Something Went Wrong: x001 Server?__");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmitEmail)}>
        {/* Inputs */}
        <div className="flex-col flex gap-5">
          {/* User Email input */}
          <FormField
            control={form.control}
            name="email"
            disabled={isPending}
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input
                    className="shadow-md drop-shadow-lg dark:shadow-emerald-900 dark:border-none"
                    placeholder="Your email"
                    type="email"
                    {...field}
                    disabled={isPending}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* User Name */}
          <FormField
            control={form.control}
            name="name"
            disabled={isPending}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    className="shadow-md drop-shadow-lg dark:shadow-emerald-900 dark:border-none"
                    placeholder="Joseph Ngigi"
                    {...field}
                    disabled={isPending}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Message */}
          <FormField
            control={form.control}
            name="mail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    disabled={isPending}
                    {...field}
                    className="shadow-md drop-shadow-lg dark:shadow-emerald-900 dark:border-none h-[120px] resize-none"
                    placeholder="Send me a Message 👉"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Send Button */}
        <div className=" mt-5 flex-c-center ">
          <button
            type="submit"
            className="flex flex-row gap-3 items-center px-14 justify-center rounded-full bg-emerald-500/20 text-emerald-500 py-2 font-[500] text-sm"
          >
            Send
            <SiMinutemailer />
          </button>
        </div>
      </form>
    </Form>
  );
};
