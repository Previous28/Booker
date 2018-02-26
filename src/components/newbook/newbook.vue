<template>
  <div id="newbook_contanier">
    <div>
      <img src="../../assets/images/aside.jpg" id="aside_img">
    </div>
    <div id="newbook_form">
      <el-form ref="form" :model="form" label-width="100px" size="medium">
        <el-form-item label="书籍名称" required>
          <el-input v-model="form.bookname" autofocus></el-input>
        </el-form-item>
        <el-form-item label="作者" required>
          <el-input v-model="form.auther"></el-input>
        </el-form-item>
        <el-form-item label="书籍类型" required>
          <el-select v-model="form.type" placeholder="请选择分类">
            <el-option label="人物传记" value="人物传记"></el-option>
            <el-option label="文学艺术" value="文学艺术"></el-option>
            <el-option label="历史文学" value="历史文学"></el-option>
            <el-option label="名著经典" value="名著经典"></el-option>
            <el-option label="其他类别" value="其他类别"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="阅读状态" required>
          <el-select v-model="form.state" placeholder="请选择">
            <el-option label="阅读中" value="阅读中"></el-option>
            <el-option label="已读完" value="已读完"></el-option>
            <el-option label="想读" value="想读"></el-option>
            <el-option label="中止" value="中止"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="开始日期">
          <el-col :span="11">
            <el-date-picker 
              type="date" 
              placeholder="选择日期" 
              v-model="form.startDate"
              value-format="yyyy-MM-dd">
            </el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="结束日期">
          <el-col :span="11">
              <el-date-picker 
                type="date" 
                placeholder="选择日期" 
                v-model="form.endDate"
                value-format="yyyy-MM-dd">
              </el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="评价">
          <el-rate v-model="form.ranking" :allow-half="true"></el-rate>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">添加</el-button>
          <el-button @click="cancelAdd">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-dialog
      title="提示"
      :visible.sync="confirmDialogVisible"
      width="30%"
      center
      :close-on-click-modal="false"
      :show-close="false">
      <span>添加成功！</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="confirmDialogVisible = false">继续添加</el-button>
        <el-button type="primary" @click="gotoBookStep">我的书迹</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import store from '@/store/store'
import router from '@/router'

var index = Math.random()

export default {
  data() {
    return {
      form: {
        bookname: '',
        auther: '',
        type: '',
        state: '',
        startDate: '?',
        endDate: '?',
        ranking: 0,
        id: ''
      },
      confirmDialogVisible: false,
    }
  },
  methods: {
    onSubmit: function() {
      this.form.id = index++
      this.form.bookname = "《" + this.form.bookname + "》"
      store.commit('addNewBook', this.form)
      this.confirmDialogVisible = true
      this.form = {
        bookname: '',
        auther: '',
        type: '',
        state: '',
        startDate: '?',
        endDate: '?',
        ranking: 0,
        id: ''
      }
    },
    gotoBookStep: function() {
      store.commit('updateIndex', '1')
      router.push({ path: 'bookstep'})
    },
    cancelAdd: function() {
      this.form = {
        bookname: '',
        auther: '',
        type: '',
        state: '',
        startDate: '?',
        endDate: '?',
        ranking: 0,
        id: ''
      }
    }
  }
}
</script>

<style scoped>
#newbook_contanier {
  width: 45%;
  margin: 40px auto;
  background: rgba(250, 250, 250, 0.9);
  padding: 40px;
}
#aside_img {
  float: left;
  height: 450px;
}
#newbook_form {
  text-align: initial;
  display: inline-block;
}
#newbook_form .el-form-item {
  width: 350px;
}
.el-form-item__label {
  font-size: 18px;
}
</style>