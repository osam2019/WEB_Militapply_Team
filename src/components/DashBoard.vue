<template>
  <section class="dashboard-container">
    <el-row gutter="20">
      <el-col :span="8">
        <div class="grid-content bg-purple-dark">
          <Banner :height="350" />
        </div>
      </el-col>
      <el-col :span="16">
        <Tabs :posts="posts" />
      </el-col>
    </el-row>
  </section>
</template>

<script>
import Banner from "./Banner";
import Tabs from "./Tabs";

export default {
  name: "DashBoard",
  components: {
    Banner,
    Tabs
  },
  data() {
    return {
      posts: require("../../data/post")
    };
  }
};
</script>

<style scoped>
.dashboard-container {
  width: 1000px;
  margin: 0 auto;
}
</style>
