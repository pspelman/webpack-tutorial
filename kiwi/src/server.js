const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')

app.use('/', express.static(path.resolve(__dirname, '../dist')))

app.get('/', (req, res) => {
  const pathToIndexHtml = path.resolve(__dirname, '../dist/kiwi.html')
  const contentFromHtmlFile = fs.readFileSync(pathToIndexHtml, 'utf-8')
  res.send(contentFromHtmlFile)
  // res.send("Response to whatever") // http response object
})

const port = 9002
app.listen(port, () => {
  console.log(`listening at port ${port}`, )

})
