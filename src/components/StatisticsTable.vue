<template>
  <section class="stats-table-container" style="padding: 10px; border: 1px solid #aaa">
    <h4 style="text-align: left; margin-bottom: 15px">
      {{title}}
    </h4>
    <el-table :data="tableData" style="width: 100%" :show-header="false">
      <el-table-column prop="order" width="100"> </el-table-column>
      <el-table-column prop="name" width="180"> </el-table-column>
      <el-table-column prop="value">
        <template slot-scope="scope">
          <i v-if="icon" :class="icon"></i>
          <span>{{tableData[scope.$index].value}}</span>
        </template>
      </el-table-column>
    </el-table>
  </section>
</template>

<script>
export default {
  name: "StatisticsTable",
  props: {
    icon: {
      type: [String, Boolean],
      default: false
    },
    tableData: Array,
    title: {
      type: String,
      required: true
    }
  }
};
</script>
