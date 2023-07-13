<script setup>
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const allBooks = await prisma.books.findMany();
</script>
<template>
  <div>
    Hello, Nuxt.js
    <NuxtWelcome />
  </div>
</template>
