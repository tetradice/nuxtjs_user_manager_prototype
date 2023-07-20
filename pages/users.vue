<script setup lang="ts">
import { UsersPostParameter } from "~/server/schema/usersPostParameter";

const {
  data: usersData,
  refresh: refreshUsers,
  pending: pendingUsers,
} = useFetch("/api/users");

const {
  data: helloData,
} = useFetch("/api/hello");

const valid = ref(false);
const name = ref("");
const email = ref("");
const nameRules = [
  (value: string) => {
    if (value) return true;

    return "Name is required.";
  },
  (value: string) => {
    if (value?.length <= 10) return true;

    return "Name must be less than 10 characters.";
  },
];
const emailRules = [
  (value: string) => {
    if (value) return true;

    return "E-mail is requred.";
  },
  (value: string) => {
    if (/.+@.+\..+/.test(value)) return true;

    return "E-mail must be valid.";
  },
];

/** ユーザー登録処理 */
const insertUser = async () => {
  // APIをコールして登録処理を実行
  const body: UsersPostParameter = {
    email: email.value,
    name: name.value,
  };
  await $fetch("/api/users", { method: "post", body });

  // 登録処理が完了したら、ユーザー一覧を再読み込み
  await refreshUsers();
};

/** 入力クリア */
const clear = () => {
  name.value = "";
  email.value = "";
};
</script>
<template>
  <div>
    <v-form v-model="valid">
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="name"
            :rules="nameRules"
            label="First name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>

        <v-btn class="me-4" @click="insertUser"> 登録 </v-btn>
        <v-btn @click="clear"> クリア </v-btn>
      </v-row>
    </v-form>
    <v-progress-circular
      indeterminate
      v-if="pendingUsers"
    ></v-progress-circular>
    <v-table>
      <thead>
        <tr>
          <th class="text-left">ID</th>
          <th class="text-left">メールアドレス</th>
          <th class="text-left">ユーザー名</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in usersData?.users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.name }}</td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>
