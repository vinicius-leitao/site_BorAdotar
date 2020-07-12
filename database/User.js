const sequelize = require("sequelize")
const connection = require("./database")

const User = connection.define('users', {
    name: {
        type: sequelize.STRING, 
        allowNull: false
    }, email: {
        type: sequelize.STRING,
        allowNull: true
    }
})


module.exports = User