const sequelize = require("sequelize")
const connection = require("./database")

const Catalogo = connection.define('catalogo', {
    name: {
        type: sequelize.STRING, 
        allowNull: false
    }, description: {
        type: sequelize.TEXT, 
        allowNull: false
    }, personality: {
        type: sequelize.STRING, 
        allowNull: true
    }, age: {
        type: sequelize.INTEGER, 
        allowNull: true
    }
})

module.exports = Catalogo