var fs = require('fs');
var filepath = __dirname + "/../data/books.json"
var data = JSON.parse(fs.readFileSync(filepath))

function getBookList() {
  return data.books
}

function addItem(book) {
  data.books.unshift(book)
  fs.writeFileSync(filepath, JSON.stringify(data))
}

function updateItem(book) {
  for (let index in data.books) {
    if (data.books[index].id === book.id) {
      Object.assign(data.books[index], book)
      break
    }
  }
  fs.writeFileSync(filepath, JSON.stringify(data))
}

function deleteItem(id) {  
  data.books.splice(data.books.findIndex(book=>book.id == id), 1)
  fs.writeFileSync(filepath, JSON.stringify(data))
}

const booker = {
  getBookList: getBookList,
  addItem: addItem,
  updateItem: updateItem,
  deleteItem: deleteItem
}

module.exports = booker