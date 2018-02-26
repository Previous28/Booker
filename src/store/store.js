import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    books: [{
      id: 0,
      bookname: "《清华园日记》",
      auther: "季羡林",
      type: "文学艺术",
      state: "阅读中",
      startDate: "2018.1.20.",
      endDate: "？",
      ranking: 4.5
    }, {
      id: 1,
      bookname: "《曾国藩》",
      auther: "唐浩明",
      type: "历史文学",
      state: "已读完",
      startDate: "2017.1.4.",
      endDate: "2017.3.28.",
      ranking: 4
    }, {
      id: 2,
      bookname: "《苏东坡传》",
      auther: "林语堂",
      type: "人物传记",
      state: "已读完",
      startDate: "2016.10.20.",
      endDate: "2016.12.28.",
      ranking: 4.5
    }, {
      id: 3,
      bookname: "《漫长的告别》",
      auther: "雷蒙德•钱德勒",
      type: "其他类别",
      state: "中止",
      startDate: "2016.8.20.",
      endDate: "2016.8.23.",
      ranking: 1.5
    }, {
      id: 4,
      bookname: "《我生有涯愿无尽》",
      auther: "梁漱溟",
      type: "人物传记",
      state: "想读",
      startDate: "？",
      endDate: "？",
      ranking: 0
    }, {
      id: 5,
      bookname: "《明朝那些事儿》",
      auther: "当年明月",
      type: "历史文学",
      state: "已读完",
      startDate: "2014.1.4.",
      endDate: "2014.3.28.",
      ranking: 5
    }, {
      id: 6,
      bookname: "《射雕英雄传》",
      auther: "金庸",
      type: "其他类别",
      state: "已读完",
      startDate: "2016.10.20.",
      endDate: "2016.12.28.",
      ranking: 4.5
    }, {
      id: 7,
      bookname: "《如果这是宋史》",
      auther: "高天流云",
      type: "历史文学",
      state: "中止",
      startDate: "2016.8.20.",
      endDate: "2016.8.23.",
      ranking: 3
    },  {
      id: 8,
      bookname: "《傲慢与偏见》",
      auther: "简•奥斯丁",
      type: "名著经典",
      state: "想读",
      startDate: "?",
      endDate: "?",
      ranking: 0
    }],
    curIndex: '1'
  },
  mutations: {
    addNewBook (state, book) {
      state.books.unshift(book);
      console.log("state.book:", state.books);
    },
    updateIndex (state, index) {
      state.curIndex = index;
    },
    updateBookItem (state, newbook) {
      for (var index in state.books) {
        console.log('book:', state.books[index]);
        if (state.books[index].id === newbook.id) {
          state.books[index].bookname = newbook.bookname;
          state.books[index].auther = newbook.auther;
          state.books[index].type = newbook.type;
          state.books[index].state = newbook.state;
          state.books[index].startDate = newbook.startDate;
          state.books[index].endDate = newbook.endDate;
          state.books[index].ranking = newbook.ranking;
          break;
        }
      }
    },
    deleteBookItem (state, index) {      
      state.books.splice(state.books.findIndex(book=>book.id === index), 1);
    },
  }
})

export default store;