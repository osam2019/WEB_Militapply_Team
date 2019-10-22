<template>
  <section style="padding: 10px; border: 1px solid #aaa">
    <h4 style="text-align: left; margin-bottom: 15px">
      현재 사람들이 보고있는 특기
    </h4>
    <el-table :data="tableData" style="width: 100%" :show-header="false">
      <el-table-column prop="order" width="100"> </el-table-column>
      <el-table-column prop="name" width="180"> </el-table-column>
      <el-table-column prop="value">
        <template slot-scope="scope">
          <i class="icofont-eye-alt"></i>
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
    tableData: Array
  }
};
</script>
