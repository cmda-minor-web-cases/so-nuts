const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const ejs = require('ejs')
require('dotenv').config()

app.set('view engine', 'ejs')

app.set('views', './views/pages')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/intake', (req, res) => {
  res.render('intake')
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})