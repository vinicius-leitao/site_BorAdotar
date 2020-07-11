//modulos importados
const User = require("../database/User")


//ajeitar status code e colocar exceções e confirmar dados aqui
class NewUser{

    static create(req, res){   
        let name = req.body.name
        let lastname = req.body.lastname
        let passoword = req.body.passoword
        let confirmpassoword = req.body.confirmpassoword
        if(passoword == confirmpassoword){
            name = name + " " + lastname
            User.create({
                name:  name
                //email: email, 
                // passoword: passoword, 
                // birth: data,
                // gender: sex,
                // cep: cep 
            }).then(() => {
                res.redirect("/user/me")
            }).catch()
        } else {
            res.sendStatus = 404 
        }
    }
}

module.exports = NewUser
