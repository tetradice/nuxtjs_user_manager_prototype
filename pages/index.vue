<script setup lang="ts"></script>
<template>
  <div>
    table!!!!
    <v-table>
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Calories</th>
        </tr>
      </thead>
      <!-- <tbody>
        <tr v-for="item in desserts" :key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ item.calories }}</td>
        </tr>
      </tbody> -->
      <tbody>
        <tr>
          <td>name</td>
          <td>value</td>
        </tr>
      </tbody>
    </v-table>
    Hello, Nuxt.js
    <NuxtWelcome />
  </div>
</template>
