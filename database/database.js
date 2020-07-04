const Sequelize = require("sequelize")
const connection = new Sequelize('borAdotar', 'root', 'grocR)1234', {
    host: 'localhost', 
    dialect: 'mysql', 
    timezone: "-3:00"
})

module.exports = connection