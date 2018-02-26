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
  for (var index in data.books) {
    if (data.books[index].id === book.id) {
      data.books[index].bookname = book.bookname;
      data.books[index].auther = book.auther;
      data.books[index].type = book.type;
      data.books[index].state = book.state;
      data.books[index].startDate = book.startDate;
      data.books[index].endDate = book.endDate;
      data.books[index].ranking = book.ranking;
      break
    }
  }
  fs.writeFileSync(filepath, JSON.stringify(data))
}

function deleteItem(id) {
  data.books.splice(data.books.findIndex(book=>book.id === id), 1)
  fs.writeFileSync(filepath, JSON.stringify(data))
}

const booker = {
  getBookList: getBookList,
  addItem: addItem,
  updateItem: updateItem,
  deleteItem: deleteItem
}

module.exports = booker