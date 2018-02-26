<template>
  <div>
    <el-menu
      id="navbar"
      :default-active="activeIndex"
      mode="horizontal"
      @select="handleSelect"
      background-color="#909399"
      text-color="#fff"
      :router="isUseRouter"
      active-text-color="#E8E386">
      <i class="el-icon-tickets" id="icon">Booker</i>
      <el-menu-item index="1">我的书迹</el-menu-item>
      <el-menu-item index="2">新书记录</el-menu-item>
      <el-menu-item index="3">总览</el-menu-item>
    </el-menu>
  </div>
</template>
  
<script>
import router from '@/router'
import store from '@/store/store'
router.push({ path: 'bookstep'})

export default {
  data() {
    return {
      isUseRouter: true
    }
  },
  methods: {
    handleSelect(index) {
      store.commit('updateIndex', index)
    }
  },
  computed: {
    activeIndex () {
      return store.state.curIndex
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
.el-menu .el-menu-item  {
  font-size: 16px;
}
#navbar #icon {
 float: right;
 color: #fff;
 padding: 20px;
}
</style>