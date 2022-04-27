<template>
  <div class="main-wrapper">
    <Header :title="'Calculator'"></Header>
    <div style="padding: 15px">
      <div class="calculator-box">
        <div class="body">
          <div class="group" v-for="(context, index) in menu" :key="index">
            <div class="title">{{ context.text }}</div>
            <div class="option">
              <div><i class="fa fa-minus icon" @click="context.qty--"></i></div>
              <div class="qty">{{ context.qty }}</div>
              <div><i class="fa fa-plus icon" @click="context.qty++"></i></div>
            </div>
          </div>
        </div>
        <div class="result">
          <div class="title">Total</div>
          <div class="text">{{ total }}</div>
        </div>
      </div>
    </div>
    <Footer :current="'calculator'"></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Calculator",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      menu: [
        {
          text: "Beras(kg)",
          qty: 1,
        },
        {
          text: "Kopi(sachet)",
          qty: 10,
        },
      ],
    };
  },
  computed: {
    total() {
      let response = 0;
      for (let i = 0; i < this.menu.length; i++) {
        response += this.menu[i].qty;
      }
      return response;
    },
  },
};
</script>
