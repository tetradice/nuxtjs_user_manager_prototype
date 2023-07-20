import { PrismaClient } from "@prisma/client";

export default defineEventHandler(async (event) => {
  // DBのデータを取得
  const prisma = new PrismaClient();
  const users = await prisma.user.findMany();

  // 結果を返却
  return {
    users: users.map((u) => ({ ...u })),
  };
});
