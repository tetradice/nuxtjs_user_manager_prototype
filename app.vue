<template>
  <v-layout class="rounded">
    <v-app-bar :elevation="2"
      ><v-app-bar-title
        ><NuxtLink to="/">ユーザー管理</NuxtLink></v-app-bar-title
      ></v-app-bar
    >
    <v-main>
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <NuxtPage />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-layout>
</template>
