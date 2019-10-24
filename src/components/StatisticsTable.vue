<template>
  <section class="stats-table-container" style="padding: 10px; border: 1px solid #aaa">
    <h4 style="text-align: left; margin-bottom: 15px">
      {{title}}
    </h4>
    <el-table :data="tableData" style="width: 100%" :show-header="false">
      <el-table-column type="index" align="center" width="50"> </el-table-column>
      <el-table-column prop="name" align="left"> </el-table-column>
      <el-table-column width="100">
        <template slot-scope="scope">
          <i v-if="icon" :class="icon" style="margin-right: 5px;"></i>
          <span>{{value === null ? tableData[scope.$index].value : value(scope.row)}}</span>
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
    value: {
      type: Function,
      default: null
    },
    tableData: Array,
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
</style>
