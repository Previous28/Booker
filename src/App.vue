<template>
  <div id="app">
    <el-container>
      <el-header>
          <Navbar></Navbar>
      </el-header>
      <el-main>
          <router-view/>
      </el-main>
      <el-footer>Written by 办公室李主任</el-footer>
    </el-container>
  </div>
</template>

<script>
import Navbar from './components/navbar.vue'
export default {
  name: 'App',
  components: { Navbar }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.el-header {
  padding: 0;
}
.el-main{
  padding: 0px;
}
.el-footer {
  color: seashell;
  padding: 15px;
}
</style>
