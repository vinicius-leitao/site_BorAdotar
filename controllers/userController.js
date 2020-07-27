//modulos importados
const User = require("../database/User") //database importado
const path = require("path") //diretórios

//funçoes importadas
const API = require("../script/cep") //API usada "viacep"

//ajeitar status code e colocar exçessões e confirmar dados aqui
class UserController{

    static async create(req, res){
        let {name, lastname, email, password, passwordconfirm, date, gender, cep} = req.body
        if(password !== passwordconfirm){
            res.redirect("/catalogo")
        } else {
            cep = await API.logradouro(cep)
            User.create({
                name,
                lastname,
                email,
                password,
                date,
                gender,
                cep
            }).then(() => {
                res.redirect("/user/me")
            }).catch(err => console.log(err))
        }
    }

    static userMe(req, res){
        User.findAll().then(users => {
            res.json(users)
        })
    }

    static userChat(req, res){
        res.sendFile(path.resolve(__dirname, "../static/views/chat/chat.html"))
    }
}

module.exports = UserController