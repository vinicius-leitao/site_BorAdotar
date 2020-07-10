const sequelize = require("sequelize")
const database = require("./database")
const connection = require("./database")
//terminar de fazer
const User = connection.define('user', {
    nome: {
        type: sequelize.STRING,
        allowNull: false
    }, email: {
        type: sequelize.TEXT,
        allowNull: false
    }, senha: {
        type: sequelize.TEXT, 
        allowNull: false
    }, dataDeNascimento: {
        type: sequelize.DATE, 
        allowNull: false
    }, genero: {
        type: sequelize.TEXT, 
        allowNull: false
    }, cep: {
        type: sequelize.JSON,
        allowNull: false
    }, numero: {
        type: sequelize.NUMBER, 
        allowNull: false
    }, complemento: {
        type: sequelize.TEXT, 
        allowNull: true
    }
})

module.exports = User