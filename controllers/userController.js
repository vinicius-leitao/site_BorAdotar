//modulos importados
const User = require("../database/User") //database importado
const path = require("path") //diretórios
const bcrypt = require("bcryptjs")
//funçoes importadas
const API = require("../script/cep") //API usada "viacep"

//ajeitar status code e colocar exçessões e confirmar dados aqui
class UserController {


    //limitar a senha ao mínimo de 8 caracteres 
    static create(req, res) {
        let { name, lastname, email, password, passwordconfirm, date, gender } = req.body
        if (password !== passwordconfirm) {
            //usar aqui um recurso do flash
            //user aqui outro flash
        } else {
            User.findOne({
                where: {
                    email
                }
            }).then(user => {
                if (user == undefined) {
                    let salt = bcrypt.genSaltSync(10)
                    let hash = bcrypt.hashSync(password, salt)
                    User.create({
                        name,
                        lastname,
                        email,
                        password: hash,
                        date,
                        gender
                    }).then(() => {
                        res.redirect("/user/me")
                    }).catch(err => console.log(err))
                } else {
                    //flash aqui
                }
            })
        }
    }

    static Userlogin(req, res) {
        let { login: email, password } = req.body
        User.findOne({
            where: {
                email
            }
        }).then(user => {
            if (user != undefined) {
                let correct = bcrypt.compareSync(password, user.password)
                if(correct){
                    res.redirect("/user/me")
                } else {
                    res.redirect("/login")
                    //flash - senha está incorreta
                }
            } else {
                res.redirect("/login")
                //usar flash ()
            }
        }).catch(err => console.log(err))
    }

    static userMe(req, res) {
        User.findAll().then(users => {
            res.json(users)
        })
    }

    static userChat(req, res) {
        res.sendFile(path.resolve(__dirname, "../static/views/chat/chat.html"))
    }

}

module.exports = UserController