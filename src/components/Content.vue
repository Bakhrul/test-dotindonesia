<template>
  <div class="content-box">
    <div class="title">{{ title }}</div>
    <div class="desc">{{ desc }}</div>
  </div>
</template>

<script>
export default {
  name: "ContentComponent",
  props: ["title", "desc"],
};
</script>
