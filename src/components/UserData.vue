<script setup>
import { useFetch } from "../js/fetch.js";
</script>

<template>
  <div v-if="userData.error">
    Oops! Error encountered: {{ userData.error.message }}
  </div>
  <div v-else-if="userData.data">
    <el-card>
      <el-avatar
        shape="circle"
        :size="100"
        :fit="fit"
        :src="userData.data.results[0].picture.large"
      />
      <h1 id="fullName">
        <!-- Using string concatenation instead of string literals because vue makes it way to complicated for this example -->
        {{
          userData.data.results[0].name.title +
          " " +
          userData.data.results[0].name.first +
          " " +
          userData.data.results[0].name.last
        }}
      </h1>
      <div id="contact">
        <p>email:{{ userData.data.results[0].email }}</p>
        <p>phone: {{ userData.data.results[0].phone }}</p>
      </div>
      <div id="info">
        <p>age: {{ userData.data.results[0].dob.age }}</p>
        <p>nationality: {{ userData.data.results[0].nat }}</p>
        <p>gender: {{ userData.data.results[0].gender }}</p>
      </div>
    </el-card>
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

<style scoped>
#fullName {
  border-bottom: 1px solid black;
}
</style>
