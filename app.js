const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const path = require('path')
const env = process.env.NODE_ENV || 'development';
const config = require('./config/config.json')[env]


const Sequelize = require('sequelize')

const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect
  });


const app = express()

async function connectDB() {
    try {
        await sequelize.authenticate()
        console.log('Connection has been established successfully');
    } catch(err) {
        console.error('Unable to connect to the databse: ', err);
    }
}

connectDB()



app.get('/', (req, res) => res.send('INDEX'))

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`http://localhost:${PORT}`))