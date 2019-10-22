<template>
  <section class="dashboard-container">
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="grid-content bg-purple-dark">
          <Banner :height="350" />
        </div>
      </el-col>
      <el-col :span="16">
        <Tabs :posts="posts" />
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        <StatisticsTable :table-data="watchingData"/>
      </el-col>
      <el-col :span="12">
        <Schedule/>
      </el-col>
    </el-row>
  </section>
</template>

<script>
import Banner from "./Banner";
import Tabs from "./PostTabs";
import StatisticsTable from "./StatisticsTable";
import Schedule from "./Schedule";

export default {
  name: "DashBoard",
  components: {
    Banner,
    Tabs,
    StatisticsTable,
    Schedule
  },
  data() {
    return {
      posts: require("../../data/post"),
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
