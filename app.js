const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const path = require('path')


const Sequelize = 


const app = express()

app.get('/', (req, res) => res.send('INDEX'))

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`http://localhost:${PORT}`))