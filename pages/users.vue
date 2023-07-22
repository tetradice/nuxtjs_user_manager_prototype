<script setup lang="ts">
// ※Vue 3から導入されたComposition APIで記載
import { UsersPostParameter } from "~/server/schema/usersPostParameter";
import { UsersDeleteParameter } from "~/server/schema/usersDeleteParameter";

// APIへのデータ取得クエリ定義（ページ表示と同時に自動取得）
const {
  data: usersData,
  refresh: refreshUsers,
  pending: pendingGetUsers,
} = useFetch("/api/users");

// 入力フィールドの値とバインドする変数
const name = ref("");
const email = ref("");

// 状態管理用の変数
const pendingUpdateUsers = ref(false);
const formValid = ref(false);

// バリデーションルール
const nameRules = [
  (value: string) => {
    if (value) return true;

    return "名前は必須です。";
  },
  (value: string) => {
    if (value?.length <= 10) return true;

    return "名前は10文字以内で入力してください。";
  },
];
const emailRules = [
  (value: string) => {
    if (value) return true;

    return "メールアドレスは必須です。";
  },
  (value: string) => {
    if (/.+@.+\..+/.test(value)) return true;

    return "メールアドレスの形式で入力してください。";
  },
];

/** ユーザー登録処理 */
const insertUser = async () => {
  // APIをコールして登録処理を実行
  pendingUpdateUsers.value = true;
  const body: UsersPostParameter = {
    email: email.value,
    name: name.value,
  };
  await $fetch("/api/users", { method: "post", body });
  pendingUpdateUsers.value = true;

  // 登録処理が完了したら、入力内容をクリアしてユーザー一覧を再読み込み
  clear();
  await refreshUsers();
};

/** ユーザー削除処理 */
const deleteUser = async (id: number) => {
  // APIをコールして登録処理を実行
  pendingUpdateUsers.value = true;
  const body: UsersDeleteParameter = {
    id,
  };
  await $fetch("/api/users", { method: "delete", body });
  pendingUpdateUsers.value = false;

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
    <v-form v-model="formValid">
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="name"
            :rules="nameRules"
            label="名前"
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
        <v-progress-circular
          indeterminate
          v-if="pendingUpdateUsers"
        ></v-progress-circular>
      </v-row>
    </v-form>

    <v-progress-circular
      indeterminate
      v-if="pendingGetUsers"
    ></v-progress-circular>
    <v-table v-else style="max-width: 60rem">
      <thead>
        <tr>
          <th class="text-left">ID</th>
          <th class="text-left">名前</th>
          <th class="text-left">メールアドレス</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in usersData?.users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>
            <v-btn color="red lighten-2" @click="deleteUser(user.id)">
              <v-icon icon="mdi-delete"></v-icon> 削除</v-btn
            >
          </td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>
