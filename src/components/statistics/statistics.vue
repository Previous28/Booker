<template>
  <div id="stat_contanier">
    <el-tabs tab-position="left">
      <el-tab-pane label="类别总览">
        <div class="overall" id="typeStatistics"></div>
      </el-tab-pane>
      <el-tab-pane label="状态总览">
        <div class="overall" id="stateStatistics"></div>
      </el-tab-pane>
      <el-tab-pane label="文学艺术">
        <TypeCount :whichType="typeOnes"></TypeCount>
      </el-tab-pane>
      <el-tab-pane label="人物传记">
        <TypeCount :whichType="typeTwos"></TypeCount>
      </el-tab-pane>
      <el-tab-pane label="历史文学">
        <TypeCount :whichType="typeThrees"></TypeCount>
      </el-tab-pane>
      <el-tab-pane label="名著经典">
        <TypeCount :whichType="typeFours"></TypeCount>
      </el-tab-pane>
      <el-tab-pane label="其他类别">
        <TypeCount :whichType="typeFives"></TypeCount>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import TypeCount from './typecount'
import store from '../../store/store'
var echarts = require('echarts/lib/echarts')
// 引入饼状图组件
require('echarts/lib/chart/pie')
// 引入提示框和title组件
require('echarts/lib/component/title')

export default {
  computed: {
    books: function () {
      return store.state.books
    },
    typeOnes: function () {
      return this.books.filter(book=>book.type === '文学艺术')
    },
    typeTwos: function () {
      return this.books.filter(book=>book.type === '人物传记')
    },
    typeThrees: function () {
      return this.books.filter(book=>book.type === '历史文学')
    },
    typeFours: function () {
      return this.books.filter(book=>book.type === '名著经典')
    },
    typeFives: function () {
      return this.books.filter(book=>book.type === '其他类别')
    }
  },
  mounted() {
    this.drawPieChart()
  },
  methods: {
    drawPieChart() {
      // 基于准备好的dom，初始化echarts实例
      var firstChart = echarts.init(document.getElementById('typeStatistics'), 'light')
      // 绘制图表
      firstChart.setOption({
        title: { text: '书籍类别总体情况' },
        series: {
          type: 'pie',
          radius : '60%',//饼图的半径大小 
          label:{            //饼图图形上的文本标签
            normal:{
              show:true,
              textStyle : {
                fontWeight : 300 ,
                color: '#000',
                fontSize : 16    //文字的字体大小
              },
              formatter:'{b}\n {d}%'
            }
          }, 
          data: [
            {name: '文学艺术', 
            value: this.books.filter(book=>book.type === '文学艺术').length},
            {name: '人物传记', 
            value: this.books.filter(book=>book.type === '人物传记').length},
            {name: '历史文学', 
            value: this.books.filter(book=>book.type === '历史文学').length},
            {name: '名著经典', 
            value: this.books.filter(book=>book.type === '名著经典').length},
            {name: '其他类别', 
            value: this.books.filter(book=>book.type === '其他类别').length}
          ]
        }
      });
      var secondChart = echarts.init(document.getElementById('stateStatistics'),'light')
      secondChart.setOption({
        title: { text: '阅读状态总体情况' },
        series: {
          type: 'pie',
          radius : '60%',
          label:{            //饼图图形上的文本标签
            normal:{
              show:true,
              textStyle : {
                fontWeight : 300 ,
                fontSize : 16,    //文字的字体大小
                color: '#000'
              },
              formatter:'{b}\n {d}%'
            }
          }, 
          data: [
            {name: '已读完', 
            value: this.books.filter(book=>book.state === '已读完').length},
            {name: '阅读中', 
            value: this.books.filter(book=>book.state === '阅读中').length},
            {name: '想读', 
            value: this.books.filter(book=>book.state === '想读').length},
            {name: '中止', 
            value: this.books.filter(book=>book.state === '中止').length},
          ]
        }
      });
    }
  },
  components: {TypeCount}
}
</script>

<style scoped>
#stat_contanier {
  width: 60%;
  margin: 40px auto;
  background: rgba(250, 250, 250, 0.9);
  padding: 20px 20px 20px 3px;
}
.overall {
  width: 480px;
  height: 450px;
  margin-left: 140px;
}
</style>