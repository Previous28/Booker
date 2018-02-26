<template>
  <div id="bookstep_contanier">
    <el-row :gutter="20" style="margin-left:0px;margin-right:0px">
      <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6"
        v-for="(book, index) in books" 
        :key="book.id">
        <BookItem :bookInfo="book" :curid="index"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import BookItem from './bookitem.vue'
import store from '../../store/store'

export default {
  data: function() {
    return {

    }
  },
  computed: {
    books: function () {
      return store.state.books
    }
  },
  components: { BookItem }
}
</script>

<style scoped>
.el-row {
  padding: 0 50px;
}
#bookstep_contanier {
  background: rgba(250, 250, 250, 0.7);
}
</style>