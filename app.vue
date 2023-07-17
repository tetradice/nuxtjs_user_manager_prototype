<script setup lang="ts">
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const allBooks = await prisma.user.findMany();
</script>
<template>
  <div>
    Hello, Nuxt.js
    <NuxtWelcome />
  </div>
</template>
