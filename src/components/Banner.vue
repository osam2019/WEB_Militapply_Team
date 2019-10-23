<template>
  <hooper
    :style="{ height: height + 'px' }"
    :progress="true"
    :auto-play="true"
    :play-speed="3000"
  >
    <slide v-for="c in contents" :key="c.alt" style="cursor: pointer">
      <router-link :to="c.url"><img :src="c.src" :alt="c.alt"></router-link>
    </slide>

    <hooper-pagination slot="hooper-addons" />
  </hooper>
</template>

<script>
import { Hooper, Slide, Pagination as HooperPagination } from "hooper";
import "hooper/dist/hooper.css";

export default {
  name: "DashBoard",
  components: {
    Hooper,
    Slide,
    HooperPagination
  },
  props: {
    height: Number,
    contents: Array
  },
  methods: {
  }
};
</script>

<style scoped></style>
