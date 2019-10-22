<template>
  <section class="banner-container">
    <hooper
            :style="{ height: this.height + 'px' }"
            :progress="true"
            :autoPlay="true"
            :playSpeed="3000"
    >
      <slide>
        <img src="http://lorempixel.com/300/350" alt="banner1" />
      </slide>
      <slide>
        <img src="http://lorempixel.com/g/300/350" alt="banner2" />
      </slide>
      <hooper-pagination slot="hooper-addons" />
    </hooper>
  </section>
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

<style scoped>
  .banner-container {
    display: inline-block;
  }
</style>
