<template>
  <div class="tabs">
    <span :class="[{tags:true}, {'type1': bookType === '文学艺术'},{'type2': bookType === '人物传记'},{'type3': bookType === '历史文学'},{'type4': bookType === '名著经典'},{'type5': bookType === '其他类别'}]" >
      {{bookType}}
    </span>
    <span :class="[{tags:true}, {'type1': readingState === '已读完'},{'type2': readingState === '阅读中'},{'type3': readingState === '想读'},{'type4': readingState === '中止'}]" >
      {{readingState}}
    </span>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
    }
  },
  props: {
    readingState: {
      type: String,
      required: true
    },
    bookType: {
      type: String,
      required: true,
    }
  }
}
</script>

<style scoped>
.tabs {
  text-align: start;
  padding: 8px;
  padding-left: 12px;
}
.tags {
  padding: 0 10px;
  height: 28px;
  line-height: 26px;
  font-size: 12px;
  border-radius: 4px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: inline-block;
  border: 1px solid rgba(64,158,255,.2);
}
.type1 {
  background-color: rgba(64,158,255,.1);
  color: #409EFF;
  border: 1px solid rgba(64,158,255,.2);
}
.type2 {
  background-color: rgba(103,194,58,.1);
  border-color: rgba(103,194,58,.2);
  color: #67c23a;
}
.type3 {
  background-color: rgba(230,162,60,.1);
  border-color: rgba(230,162,60,.2);
  color: #e6a23c;
}
.type4 {
  background-color: rgba(245,108,108,.1);
  border-color: rgba(245,108,108,.2);
  color: #f56c6c;
}
.type5 {
  background-color: rgba(144,147,153,.1);
  border-color: rgba(144,147,153,.2)
}
</style>