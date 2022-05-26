const express = require('express')
const path = require('path');
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())

app.engine('.hbs',handlebars.engine({
  extname: '.hbs'
}))
app.set('view engine', '.hbs');
app.set('views',path.join(__dirname, 'resources/views'))

app.use(morgan('combined'))
//routes
app.get('/', (req, res) => {
  res.render('home');
})

app.get('/search', (req, res) => {
  console.log(req.query);
  res.render('search');
})

app.post('/search', (req, res) => {
  console.log(req.body);
  res.send(req.body);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})