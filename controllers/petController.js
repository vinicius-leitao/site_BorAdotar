//importação de modulos
const path = require("path") //caminhos
const jwt = require('jsonwebtoken') //autenticação

//importação da tabela
const Pet = require("../database/Pet") //importação da tabela
const User = require("../database/User")

//importação de funções
const spliter = require("../routes/middleware/scripts/tokenSplt")

class PetController { //cadastro de um novo pet

    static petForm(req, res) {
        res.sendFile(path.resolve(__dirname, "../static/views/cadastro-pet/cadastroPet.html"))
    }

    static pet(req, res) {
        let id = parseInt(req.query.id)
        if(id == undefined || id == null || isNaN(id)){
            res.redirect("/user/me")
        } else {
            Pet.findOne({
                where: {
                    id
                }
            }).then(pet => {
                res
                    .append("pet", JSON.stringify(pet))
                    .sendFile(path.resolve(__dirname, "../static/views/pet/pet.html"))
            })
        }
    }

    static create(req, res) {
        let token = jwt.decode(spliter(req.headers.cookie))
        let {nome: name, especie: specie, porte: port, idade: age, sexo: sex, historiaPet: description} = req.body
        Pet.create({
            name,
            specie,
            port,
            age,
            sex,
            description,
            userId: token.id
        }).then(() =>
            res.redirect("/user/me")
        ).catch(err => {
            console.log(err)
        })
    }
}

module.exports = PetController