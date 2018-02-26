import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    books: [],
    curIndex: '1'
  },
  mutations: {
    initBooks (state, books) {
      state.books = books
    },
    addNewBook (state, book) {
      state.books.unshift(book)
      console.log("state.book:", state.books)
      axios.post('http://127.0.0.1:8081/api/add', book)
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      });
    },
    updateIndex (state, index) {
      state.curIndex = index
    },
    updateBookItem (state, newbook) {
      for (var index in state.books) {
        console.log('book:', state.books[index])
        if (state.books[index].id === newbook.id) {
          state.books[index].bookname = newbook.bookname
          state.books[index].auther = newbook.auther
          state.books[index].type = newbook.type
          state.books[index].state = newbook.state
          state.books[index].startDate = newbook.startDate
          state.books[index].endDate = newbook.endDate
          state.books[index].ranking = newbook.ranking
          break
        }
      }
      axios.post('http://127.0.0.1:8081/api/update', newbook)
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      });
    },
    deleteBookItem (state, index) {      
      state.books.splice(state.books.findIndex(book=>book.id === index), 1)
      axios.get('http://127.0.0.1:8081/api/delete?id=' + index)
          .then(function (response) {            
            console.log(response.data)
          })
          .catch(function (error) {
            console.log(error)
          })
    },
  },
  actions: {
    fetchData ({ commit }) {
      axios.get('http://127.0.0.1:8081/api/books')
          .then(function (response) {            
            commit('initBooks', response.data)
            console.log(response.data)
          })
          .catch(function (error) {
            console.log(error)
          })
    }
  }
})

export default store