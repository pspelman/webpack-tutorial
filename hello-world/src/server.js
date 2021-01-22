const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')


app.get('/', (req, res) => {
  const pathToIndexHtml = path.resolve(__dirname, '../dist/hello-world.html')
  const contentFromHtmlFile = fs.readFileSync(pathToIndexHtml, 'utf-8')
  res.send(contentFromHtmlFile)
  // res.send("Response to whatever") // http response object
})

app.use('/', express.static(path.resolve(__dirname, '../dist')))

const port = 9001
app.listen(port, () => {
  console.log(`[HELLO-WORLD APP] --> listening at port ${port}`, )

})
