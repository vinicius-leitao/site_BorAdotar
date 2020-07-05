const sequelize = require("sequelize")
const connection = require("./database")

const Catalogo = connection.define('catalogo', {
    nome: {
        type: sequelize.STRING, 
        allowNull: false
    }, descricao: {
        type: sequelize.TEXT, 
        allowNull: false
    }, personalidade: {
        type: sequelize.STRING, 
        allowNull: true
    }, idade: {
        type: sequelize.INTEGER, 
        allowNull: true
    }, foto: {
        type: sequelize.BLOB, 
        allowNull: true
    }
})


module.exports = Catalogo