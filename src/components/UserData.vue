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
      url: "https://randomuser.me/api/",
    };
  },
  mounted() {
    this.userData = useFetch(this.url);
  },
};
</script>
