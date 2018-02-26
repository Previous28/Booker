var express = require('express')
var app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.json())
var booker = require('./router')

//解决跨域  
app.all('*', function(req, res, next) {  
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS")
  res.header("X-Powered-By",' 3.2.1')  
  res.header("Content-Type", "application/json;charset=utf-8")
  next()
})
app.use('/', booker)


console.log('> Booker Server is running at http://127.0.0.1:8081/')
app.listen(8081)