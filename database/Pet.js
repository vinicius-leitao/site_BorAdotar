const sequelize = require("sequelize")
const connection = require("./database")
const User = require("./User")

const Pet = connection.define('pets', {
    name: {
        type: sequelize.STRING,
        allowNull: true
    }, specie: {
        type: sequelize.STRING,
        allowNull: false
    }, port: {
        type: sequelize.STRING,
        allowNull: false
    }, age: {
        type: sequelize.STRING,
        allowNull: false
    }, description: {
        type: sequelize.TEXT, 
        allowNull: true
    }
})

User.hasMany(Pet)
Pet.belongsTo(User)

// Pet.sync({force: false})

//adicionar o image no outro db

module.exports = Pet