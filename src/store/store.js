import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'
// 使用axios作为http服务模块
import axios from 'axios'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    books: [],
    // 记录当前页面
    curIndex: '1'
  },
  mutations: {
    initBooks (state, books) {
      state.books = books
    },
    addNewBook (state, book) {
      state.books.unshift(book)
      console.log("state.book:", state.books)
    },
    updateIndex (state, index) {
      state.curIndex = index
    },
    updateBookItem (state, newbook) {
      for (let index in state.books) {
        console.log('book:', state.books[index])
        if (state.books[index].id === newbook.id) {
          Object.assign(state.books[index], newbook)
          break
        }
      }
    },
    deleteBookItem (state, id) {      
      state.books.splice(state.books.findIndex(book=>book.id === id), 1)
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
    },
    addItem ({ commit }, book) {
      return axios.post('http://127.0.0.1:8081/api/add', book)
              .then(function (response) {
                if (!response || response.status !== 200 || response.data.err) {
                  return true
                } else {
                  commit('addNewBook', book)
                  return false
                }});
    },
    updateItem ({ commit }, book) {
      return axios.post('http://127.0.0.1:8081/api/update', book)
              .then(function (response) {
                if (!response || response.status !== 200 || response.data.err) {
                  return true
                } else {
                  commit('updateBookItem', book)
                  return false
                }});
    },
    deleteItem ({ commit }, index) {
      return axios.get('http://127.0.0.1:8081/api/delete?id=' + index)
              .then(function (response) {
                if (!response || response.status !== 200 || response.data.err) {
                  return true
                } else {
                  commit('deleteBookItem', index)
                  return false
                }});
    },
  }
})

export default store