/**
 * /api/users POST用パラメータ定義
 */
import { z } from "zod";

export const UsersPostParameterSchema = z.object({
  email: z.string(),
  name: z.string().optional(),
});

export type UsersPostParameter = z.infer<typeof UsersPostParameterSchema>;
