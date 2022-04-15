<script setup>
import { useFetch } from "../js/fetch.js";
</script>

<template>
  <div v-if="result.error">
    Oops! Error encountered: {{ result.error.message }}
  </div>
  <div v-else-if="result.data">{{ result }}</div>
  <div v-else>Loading...</div>
</template>

<script>
export default {
  data() {
    return {
      result: useFetch("https://randomuser.me/api/"),
    };
  },
};
</script>
