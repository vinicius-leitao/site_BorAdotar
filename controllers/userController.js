//modulos importados
require("dotenv").config()

const path = require("path") //diretórios
const jwt = require('jsonwebtoken') //autenticação
const bcrypt = require("bcryptjs") //encriptação de senha

//tabelas importadas
const User = require("../database/User") //tabela de usuários
const Pet = require("../database/Pet")

//funções importadas
const spliter = require("../routes/middleware/scripts/tokenSplt")

//ajeitar status code e colocar exçessões e confirmar dados aqui
class UserController {

    //limitar a senha ao mínimo de 8 caracteres 
    static create(req, res) {
        let { name, lastname, email, password, passwordconfirm, date, gender } = req.body
        let salt = bcrypt.genSaltSync(10)
        let hash = bcrypt.hashSync(password, salt)
        User.create({
            name,
            lastname,
            email,
            password: hash,
            date,
            gender
        }).then(user => {
            jwt.sign({id: user.id, email: user.email, name: user.name, lastname: user.lastname, logado: true}, process.env.JWT_AUTHENTICATION, {expiresIn: '48h'}, (err, token) => {
                if(err){
                    res
                        .status(400)
                        .json({err: "falha"})
                } else {
                    res
                        .status(200)
                        .cookie("token", token)
                        .redirect("/user/me")
                }
            })  
        }).catch(err => console.log(err))
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
                if (correct) {
                    jwt.sign({id: user.id, email: user.email, name: user.name, lastname: user.lastname, logado: true}, process.env.JWT_AUTHENTICATION, {expiresIn: '48h'}, (err, token) => { //informações que serão achadas na criptografia, senha de encriptação, expiração do token e callback
                        if (err) {
                            res
                                .status(400)
                                .json({err: "falha"})
                        } else {
                            res
                                .status(200)
                                .cookie("token", token)
                                .redirect("/user/me")
                        }
                    })
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
        let token = jwt.decode(spliter(req.headers.cookie))
        Pet.findAll({
            where: {
                userId: token.id
            }
        }).then(pets => {
        res
            .status(200)
            .append("pets", JSON.stringify(pets))
            .append("user", req.headers.user)
            .clearCookie("io")
            .sendFile(path.resolve(__dirname, "../static/views/user/user.html"))
        })
    }

    static userChat(req, res) {
        res.sendFile(path.resolve(__dirname, "../static/views/chat/chat.html"))
    }
    
    static logout(req, res) {
        res
            .clearCookie("token")
            .clearCookie("io")
            .redirect("/")
    }

}

module.exports = UserController