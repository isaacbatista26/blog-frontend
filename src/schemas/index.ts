import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Por favor, insira um email válido",
  }),
  password: z.string().min(1, {
    message: "Por favor, insira sua senha",
  }),
});
