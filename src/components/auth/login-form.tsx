"use client";

import * as z from "zod";

import { useForm } from "react-hook-form";
import { useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

import { LoginSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { CardWrapper } from "./card-wrapper";
import { Button } from "@/components/ui/button";
import { FormError } from "../errors/form-error";
import { FormSuccess } from "../errors/form-success";
import { login } from "../../../actions/login";
import BackButton from "./back-button";
import { Link } from "lucide-react";

export const LoginForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPeding, startTransition] = useTransition();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      login(values).then((data) => {
        setError(data?.error);
        // setSuccess(data?.success);
      });
    });
  };

  return (
    <CardWrapper showSocial>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-5">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-normal text-[#5C5C5C] ml-4">
                    Email:
                  </FormLabel>
                  <FormControl className="bg-[#F5F5F5]">
                    <Input
                      {...field}
                      disabled={isPeding}
                      placeholder="Escreva seu endereço de email"
                      type="email"
                      className="rounded-full font-light"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-normal text-[#5C5C5C] ml-4">
                    Senha:
                  </FormLabel>
                  <FormControl className="bg-[#F5F5F5]">
                    <Input
                      {...field}
                      disabled={isPeding}
                      placeholder="Escreva sua senha"
                      type="password"
                      className="rounded-full font-light"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <BackButton />
          <div className="flex flex-col gap-3 items-center pt-8">
            <Button
              disabled={isPeding}
              type="submit"
              className="w-1/2 text-base font-normal rounded-full bg-gradient-to-r from-[#1C2337] to-[#216D8F] hover:text-[#1C2337]"
            >
              Entrar
            </Button>
            <Button className="w-1/2 rounded-full font-normal bg-[#F5F5F5] text-base text-[#5C5C5C] hover:text-white">
              Registrar
            </Button>
          </div>
        </form>
      </Form>
    </CardWrapper>
  );
};
