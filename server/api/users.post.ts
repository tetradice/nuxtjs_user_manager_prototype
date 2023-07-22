import { PrismaClient } from "@prisma/client";
import { zh } from "h3-zod";
import { UsersPostParameterSchema } from "~/server/schema/usersPostParameter";

export default defineEventHandler(async (event) => {
  // リクエストボディの検証とオブジェクト化
  const body = await zh.useValidatedBody(event, UsersPostParameterSchema);

  // DB登録
  const prisma = new PrismaClient();
  const res = await prisma.user.create({
    data: { ...body },
  });

  return { body };
});
