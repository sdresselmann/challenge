<script setup>
import { useFetch } from "../js/fetch.js";
</script>

<template>
  <div v-if="userData.error">
    Oops! Error encountered: {{ userData.error.message }}
  </div>
  <div v-else-if="userData.data">{{ userData.data.results }}</div>
</template>

<script>
export default {
  data() {
    return {
      userData: [],
    };
  },
  mounted() {
    this.userData = useFetch("https://randomuser.me/api/");
  },
};
</script>
