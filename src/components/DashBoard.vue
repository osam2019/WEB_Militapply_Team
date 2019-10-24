<template>
  <main class="dashboard-container">
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="grid-content bg-purple-dark">
          <Banner :height="350" :contents="bannerContents"/>
        </div>
      </el-col>
      <el-col :span="16">
        <PostTabs :posts="posts" :max="6" :pagination="false"/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        <StatisticsTable title="현재 사람들이 보고 있는 특기" icon="icofont-eye-alt" :table-data="watchingData" />
      </el-col>
      <el-col :span="12">
        <Schedule />
      </el-col>
    </el-row>
  </main>
</template>

<script>
import Banner from "./Banner";
import PostTabs from "./PostTabs";
import StatisticsTable from "./StatisticsTable";
import Schedule from "./Schedule";

export default {
  name: "DashBoard",
  components: {
    Banner,
    PostTabs,
    StatisticsTable,
    Schedule
  },
  data() {
    return {
      posts: [],
      bannerContents: [
        {
          src: "/img/dashboard1.jpg",
          alt: "banner1",
          url: "/info/2"
        },
        {
          src: "/img/dashboard2.gif",
          alt: "banner2",
          url: "/info/1"
        }
      ],
      watchingData: require("../../data/watching")
    };
  },
  mounted() {
    this.$http.get(`/posts?_sort=time&_order=desc`).then(response => {
      this.posts = response.data;
    });
  }
};
</script>

<style scoped>
.dashboard-container {
  width: 1000px;
  margin: 0 auto;
}

.el-row {
  margin-bottom: 20px;
}
</style>
