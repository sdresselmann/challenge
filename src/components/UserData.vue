<script setup>
import { useFetch } from "../js/fetch.js";
</script>

<template>
  <div v-if="userData.error">
    Oops! Error encountered: {{ userData.error.message }}
  </div>
  <div v-else-if="userData.data">
    <el-avatar
      shape="circle"
      :size="100"
      :fit="fit"
      :src="userData.data.results[0].picture.large"
    />
    <h1>
      <!-- Using string concatenation instead of string literals because vue makes it way to complicated for this example -->
      {{
        userData.data.results[0].name.title +
        " " +
        userData.data.results[0].name.first +
        " " +
        userData.data.results[0].name.last
      }}
    </h1>
    <h2>Age: {{ userData.data.results[0].dob.age }}</h2>
    <h2>Nationality: {{ userData.data.results[0].nat }}</h2>
    <h2>Gender: {{ userData.data.results[0].gender }}</h2>
  </div>
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
