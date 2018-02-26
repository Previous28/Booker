<template>
  <div id="typeCountContanier">
    <el-table
      :data="whichType"
      :row-class-name="tableRowClassName"
      style="width: 100%">
      <el-table-column
        prop="bookname"
        label="书名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="auther"
        label="作者"
        width="180">
      </el-table-column>
      <el-table-column
        prop="state"
        label="状态">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props: {
    whichType: {
      type: Array,
      required: true
    }
  },
  methods: {
    tableRowClassName({row, rowIndex}) {
      if (row.state === '已读完') {
        return 'type1'
      } else if (row.state === '阅读中') {
        return 'type2'
      } else if (row.state === '想读') {
        return 'type3'
      } else if (row.state === '中止') {
        return 'type4'
      } 
      return ''
    }
  },
}
</script>

<style>
.el-table .type1 {
  background: rgba(64,158,255,.1);
}
.el-table .type2 {
  background: #f0f9eb;
}
.el-table .type3 {
  background: oldlace;
}
.el-table .type4 {
  background: rgba(245,108,108,.1);
}
</style>