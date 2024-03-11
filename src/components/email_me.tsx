"use client";

import React, { useTransition } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";

import * as zod from "zod";
import { useForm } from "react-hook-form";
import { emailMeSchema } from "@/model/zod_schemas";
import { zodResolver } from "@hookform/resolvers/zod";

export const EmailMe = () => {
  const [isPending, startTransition] = useTransition();

  const form = useForm<zod.infer<typeof emailMeSchema>>({
    resolver: zodResolver(emailMeSchema),
    defaultValues: {
      email: "",
      mail: "",
    },
  });

  return (

      <Form {...form}>
        <form action="">
          {/* Inputs */}
          <div className="flex-col flex gap-1">
            <FormField
              control={form.control}
              name="email"
              disabled={isPending}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your email"
                      {...field}
                      disabled={isPending}
                    />
                    ;
                  </FormControl>
                </FormItem>
              )}
            />
            <Textarea placeholder="Send me an Email 👉" />
          </div>

          {/* Send Button */}
          <button className="flex flex-row items-center justify-center rounded-full bg-emerald-500/20 text-emerald-500 py-2 px-2 sm:px-8 font-[500] text-sm">
            Send
          </button>
        </form>
      </Form>
  );
};
