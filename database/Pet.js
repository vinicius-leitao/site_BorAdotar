const sequelize = require("sequelize")
const connection = require("./database")
const User = require("./User")

const Pet = connection.define("pets", {
    name: {
        type: sequelize.STRING,
        allowNull: true
    }, specie: {
        type: sequelize.STRING,
        allowNull: false
    }, sex: {
        type: sequelize.STRING,
        allowNull: false
    }, age: {
        type: sequelize.STRING,
        allowNull: false
    }, port: {
        type: sequelize.STRING,
        allowNull: false
    }, description: {
        type: sequelize.TEXT,
        allowNull: true
    }, url: {
        type: sequelize.TEXT,
        allowNull: false
    }
})

User.hasMany(Pet)
Pet.belongsTo(User)

// Pet.sync({force: true})

module.exports = Pet