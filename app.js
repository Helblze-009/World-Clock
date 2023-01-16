const express = require('express')
const { dirname } = require('path')
const app = express()
const port = 8080
const path = require('path')


app.use('/static', express.static(path.join(__dirname, 'static')))
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

app.get('/', (req, res) => {
    // res.send('Hello World!')
    res.sendFile(path.join(__dirname, "/static/index.html"))
  })
  
app.get('/Oceania', (req, res) => {
    // res.send('Hello World!')
    res.status(200).render(path.join(__dirname, "/static/oceania.html"))
  })
  
app.get('/pacific', (req, res) => {
    // res.send('Hello World!')
    res.sendFile(path.join(__dirname, "/static/pacific.html"))
  })
  
app.get('/antartica', (req, res) => {
    // res.send('Hello World!')
    res.sendFile(path.join(__dirname, "/static/antartica.html"))
  })
  

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})