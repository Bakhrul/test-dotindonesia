<template>
  <div class="main-wrapper">
    <Header :title="'Login'"></Header>
    <div style="padding: 15px">
      <div class="login-box">
        <div style="padding: 15px">
          <input type="text" class="form-control" placeholder="Username" />
          <input type="password" class="form-control" placeholder="Password" />
        </div>
        <button class="btn btn-login" type="button" @click="login">
          Login
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";

export default {
  name: "Home",
  components: {
    Header,
  },
  mounted() {},
  methods: {
    login() {
      localStorage.setItem("token", "randomtoken");
      this.$router.push({ path: "/", replace: true });
    },
  },
};
</script>
