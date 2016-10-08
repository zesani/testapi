var express = require('express')
var app = express()
var users = require('./users.js')
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

app.use(jsonParser)

app.post('/users', function (req, res) {
  users.push(req.body)
  res.send(req.body)
})

app.put('/users/:id', function (req, res) {
  console.log(req.params.id)
  var index = users.findIndex(user => user.id === parseInt(req.params.id, 0))
  users[index] = req.body
  res.send(users[index])
})

app.delete('/users/:id', function (req, res) {
  res.send('this is a delete')
  var index = users.findIndex(user => user.id === parseInt(req.params.id, 0))
  users.splice(index, 1)
})

app.get('/users', function (req, res) {
  res.send(users)
})

app.get('/users/:id', function (req, res) {
	var user = users.find(item => item.id === parseInt(req.params.id, 0))
	res.send(user)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
