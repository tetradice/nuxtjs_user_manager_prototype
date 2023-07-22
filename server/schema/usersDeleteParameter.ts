/**
 * /api/users DELETE用パラメータ定義
 */
import { z } from "zod";

export const UsersDeleteParameterSchema = z.object({
  id: z.number().int(),
});

export type UsersDeleteParameter = z.infer<typeof UsersDeleteParameterSchema>;
