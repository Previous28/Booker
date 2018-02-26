<template>
  <div class="cardview">
    <el-card :body-style="{ padding: '0px'}">
      <img :src="imageSrc" class="image">
      
      <div style="padding: 14px 14px 10px 14px;">
        <div><span>{{bookInfo.bookname}}</span></div>
        <div><span>{{bookInfo.auther}}</span></div>
        <div>
          <el-rate
            v-model="bookInfo.ranking"
            disabled
            text-color="#ff9900"
            show-score
          />
        </div>
        <div class="bottom clearfix">
          <time class="time">{{bookInfo.startDate.toString()}} - {{bookInfo.endDate.toString()}}</time>
          <el-button 
            id="edit_button"
            class="button el-icon-edit-outline"
            @click="editBookInfo"
          ></el-button>
        </div>
      </div>
      <hr class="hr">
      <Booktabs 
        :readingState="bookInfo.state"
        :bookType="bookInfo.type" />
    </el-card>

    <el-dialog 
      title="编辑书迹" 
      :visible.sync="dialogFormVisible"
      width="28%"
      center
      :close-on-click-modal="false"
      :show-close="false">
      <el-form ref="form" :model="tempEdit" label-width="100px" size="medium">
        <el-form-item label="书籍名称" required>
          <el-input v-model="tempEdit.bookname"></el-input>
        </el-form-item>
        <el-form-item label="作者" required>
          <el-input v-model="tempEdit.auther"></el-input>
        </el-form-item>
        <el-form-item label="书籍类型" required>
          <el-select v-model="tempEdit.type" placeholder="请选择分类">
            <el-option label="人物传记" value="人物传记"></el-option>
            <el-option label="文学艺术" value="文学艺术"></el-option>
            <el-option label="历史文学" value="历史文学"></el-option>
            <el-option label="名著经典" value="名著经典"></el-option>
            <el-option label="其他类别" value="其他类别"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="阅读状态" required>
          <el-select v-model="tempEdit.state" placeholder="请选择">
            <el-option label="阅读中" value="阅读中"></el-option>
            <el-option label="已读完" value="已读完"></el-option>
            <el-option label="想读" value="想读"></el-option>
            <el-option label="中止" value="中止"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="开始日期">
          <el-date-picker 
            type="date" 
            placeholder="选择日期" 
            v-model="tempEdit.startDate"
            value-format="yyyy-MM-dd">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="结束日期">
          <el-date-picker 
            type="date" 
            placeholder="选择日期" 
            v-model="tempEdit.endDate"
            value-format="yyyy-MM-dd">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="评价">
          <el-rate v-model="tempEdit.ranking" :allow-half="true"></el-rate>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancelEdit" plain>取 消</el-button>
        <el-button type="primary" @click="confirmEdit" plain>确 定</el-button>
        <el-button type="danger" @click="deleteItem" plain>删除</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Booktabs from './booktabs.vue'
import store from '@/store/store'

export default {
  data() {
    return {
      imageSrc: this.getImageSrc(),
      dialogFormVisible: false,
      tempEdit: {
        id: this.bookInfo.id,
        bookname: this.bookInfo.bookname,
        auther: this.bookInfo.auther,
        type: this.bookInfo.type,
        state: this.bookInfo.state,
        startDate: this.bookInfo.startDate,
        endDate: this.bookInfo.endDate,
        ranking: Number(this.bookInfo.ranking)
      }
    }
  },
  props: {
    bookInfo: {
      type: Object,
      required: true
    },
    curid: {
      type: Number,
      require: true
    }
  },
  components: {
    Booktabs
  },
  methods: {
    getImageSrc: function() {
      if ((this.curid % 5) === 0) {
        return require('../../assets/images/item0.jpg')
      } else if ((this.curid % 5) === 1) {
        return require('../../assets/images/item1.jpg')
      } else if ((this.curid % 5) === 2) {
        return require('../../assets/images/item2.jpg')
      } else if ((this.curid % 5) === 3) {
        return require('../../assets/images/item3.jpg')
      } else if ((this.curid % 5) === 4) {
        return require('../../assets/images/item4.jpg')
      }
    },
    editBookInfo: function() {
      this.dialogFormVisible = true
    },
    cancelEdit: function() {
      this.dialogFormVisible = false
    },
    confirmEdit: function() {
      store.dispatch('updateItem', this.tempEdit)
          .then((err) => {
            if (!err) {
              this.$message({
                message: '修改成功！',
                type: 'success'
              });
            } else {
              this.$message.error('修改失败！')
            }
            this.dialogFormVisible = false
          })
    },
    deleteItem: function() {
      store.dispatch('deleteItem', this.tempEdit.id)
          .then((err) => {
              if (!err) {
                this.$message({
                  message: '删除成功！',
                  type: 'success'
                });
              } else {
                this.$message.error('删除失败！')
              }
              this.dialogFormVisible = false
            })
    }
  }
}
</script>

<style scoped>
.time {
  font-size: 15px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 14px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  height: 218px;
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
.cardview {
  margin: 20px 0;
}
.el-rate {
  display: inline;
}
.hr {
  margin: 0;
}
#edit_button {
  font-size: 20px;
}
.cardview .el-form-item {
  width: 350px;
}
.cardview .el-select {
  width: 250px;
}
.cardview .el-date-editor.el-input, .el-date-editor.el-input__inner {
  width: 250px;
}
</style>