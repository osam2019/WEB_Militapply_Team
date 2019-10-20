<template>
  <hooper :progress="true" :autoPlay="true" :playSpeed="3000">
    <slide>
      <img src='../assets/dash1.jpg' width='75%' height="90%"/>
    </slide>
    <slide>
      <img src='../assets/logo.png'/>
    </slide>
    <hooper-pagination slot="hooper-addons"/>
  </hooper>
</template>

<script>
import { 
  Hooper, 
  Slide,
  Pagination as HooperPagination
  } from 'hooper';
import 'hooper/dist/hooper.css';

export default {
  name: "DashBoard",
  components: {
    Hooper,
    Slide,
    HooperPagination
  }
};
</script>