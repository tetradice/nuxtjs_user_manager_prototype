import { PrismaClient } from "@prisma/client";
import { zh } from "h3-zod";
import { UsersDeleteParameterSchema } from "~/server/schema/usersDeleteParameter";

export default defineEventHandler(async (event) => {
  // リクエストボディの検証とオブジェクト化
  const body = await zh.useValidatedBody(event, UsersDeleteParameterSchema);

  // DB削除
  const prisma = new PrismaClient();
  await prisma.user.delete({
    where: { id: body.id },
  });

  return {};
});
