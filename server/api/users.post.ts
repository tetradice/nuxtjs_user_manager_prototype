import { PrismaClient } from "@prisma/client";
import { z } from "zod";
import { zh } from "h3-zod";
import { UsersPostParameterSchema } from "~/server/schema/usersPostParameter";

export default defineEventHandler(async (event) => {
  // リクエストボディの検証とオブジェクト化
  const body = await zh.useValidatedBody(event, UsersPostParameterSchema);

  console.warn({ body });

  // DB登録
  const prisma = new PrismaClient();
  const res = await prisma.user.create({
    data: { ...body },
  });
  console.warn(res);

  return { body };
});
