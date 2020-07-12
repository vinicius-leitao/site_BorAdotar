const sequelize = require("sequelize")
const connection = require("./database")

const Pet = connection.define('pets', {
    name: {
        type: sequelize.STRING,
        allowNull: false
    }, specie: {
        type: sequelize.STRING,
        allowNull: true
    }, port: {
        type: sequelize.STRING,
        allowNull: true
    }, age: {
        type: sequelize.INTEGER,
        allowNull: true
    }, image: {
        type: sequelize.STRING,
        allowNull: true
    }, description: {
        type: sequelize.TEXT, 
        allowNull: true
    }
})

module.exports = Pet