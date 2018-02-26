var express = require('express')
var router = express.Router()
var booker = require('../model/booker')

router.get('/api/books', function(req, res) {
  res.json(booker.getBookList())
})

router.get('/api/delete', function(req, res) {
  try {
    booker.deleteItem(req.query.id)
    res.json({ err: false })
  } catch (e) {
    res.json({ err: true })
  }
})

router.post('/api/add', function(req, res) {
  try {
    console.log('add:', req.body)
    booker.addItem(req.body)
    res.json({ err: false })
  } catch (e) {
    res.json({ err: true })
  }
})

router.post('/api/update', function(req, res) {
  try {
    console.log('update:', req.body)
    booker.updateItem(req.body)
    res.json({ err: false })
  } catch (e) {
    res.json({ err: true })
  }
})

module.exports = router