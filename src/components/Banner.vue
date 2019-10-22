<template>
  <hooper
    :style="{ height: height + 'px' }"
    :progress="true"
    :auto-play="true"
    :play-speed="3000"
  >
    <slide>
      <img src="https://picsum.photos/id/884/300/350" alt="banner1" />
    </slide>
    <slide>
      <img src="https://picsum.photos/id/821/300/350" alt="banner2" />
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
    height: Number
  }
};
</script>

<style scoped></style>
