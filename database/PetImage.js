const sequelize = require("sequelize")
const connection = require("./database")
const Pet = require("./Pet")

const PetImage = connection.define("petImage", {
    image: {
        type: sequelize.BLOB,
        allowNull: false
    }
})

// Pet.hasMany(PetImage) //consertar pra amanhã
// PetImage.belongsTo(Pet)

// PetImage.sync({force: false})

module.exports = PetImage