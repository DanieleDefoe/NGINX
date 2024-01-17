const express = require('express')

const app = express()

const { PORT = 7777 } = process.env

app.get('/', (req, res) => {
  res.send('I AM AN ENDPOINT')
})

app.listen(PORT, () => {
  console.log(`SERVER STARTED ON PORT = ${PORT}`)
})
