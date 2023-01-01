<template>
  <div>
    <!-- Sample make send request to the server -->
    <a href="/users">Navigate to Users page and send request to the server</a>
    <br>
    <br>
    <!-- Sample using CSR -->
    <nuxt-link to="/users">Navigate to Users page using CSR</nuxt-link>
    <br>
    <br>
    <!-- Sample using Programatically-->
    <input type="text" v-model="userId" />
    <br>
    <button @click="onLoadUser">Load User</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: "",
    };
  },
  methods: {
    onLoadUser() {
      // Sample using Programatically
      this.$router.push("/users/" + this.userId);
    },
  },
};
</script>
