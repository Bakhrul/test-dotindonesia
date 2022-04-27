<template>
  <section class="navigation-bottom-mobile">
    <div class="navigation-bottom-group">
      <router-link
        to="/"
        class="nav-link"
        :class="current == 'home' ? 'active' : ''"
      >
        <i class="fa fa-home"></i>
      </router-link>
      <router-link
        to="/calculator"
        class="nav-link"
        :class="current == 'calculator' ? 'active' : ''"
      >
        <i class="fa fa-calculator"></i>
      </router-link>
      <a href="javascript:void(0)" class="nav-link" @click="logout">
        <i class="fa fa-arrow-right"></i>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: "FooterComponent",
  props: ["current"],
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ path: "/login", replace: true });
    },
  },
};
</script>
