<template>
  <div class="main-wrapper">
    <Header :title="'Beranda'"></Header>
    <div style="padding: 15px">
      <div class="loader" v-if="pageStatus == 'data-load'"></div>
      <Content
        v-else
        v-for="(context, index) in post"
        :key="index"
        :title="context.title"
        :desc="context.body"
      ></Content>
    </div>
    <Footer :current="'home'"></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Content from "@/components/Content.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Header,
    Content,
    Footer,
  },
  data() {
    return {
      pageStatus: "data-load",
      post: [],
    };
  },
  mounted() {
    this.$http
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        this.pageStatus = "standby";
        this.post = response.data;
      });
  },
};
</script>
