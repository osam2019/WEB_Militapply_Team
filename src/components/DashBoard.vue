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
      posts: require("../../data/post"),
      bannerContents: [
        {
          src: "https://picsum.photos/id/488/300/350",
          alt: "banner1"
        },
        {
          src: "https://picsum.photos/id/321/300/350",
          alt: "banner2"
        }
      ],
      watchingData: require("../../data/watching")
    };
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
