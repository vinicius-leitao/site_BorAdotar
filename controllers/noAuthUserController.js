const path = require("path")
const Pet = require("../database/Pet")

class NonAuthUser{

    static homePage(req, res){
        Pet.findAll({limit: 4}).then(pets => { 
            res.append("catalog_index", JSON.stringify(pets))
            res.sendFile(path.resolve(__dirname, "../public/index/index.html"))
        })
    }

    static cadastro(req, res){
        res.sendFile(path.resolve(__dirname, "../public/cadastro/cadastro.html"))
    }

    static suporte(req, res){
        res.sendFile(path.resolve(__dirname, "../public/suporte/suporte.html"))
    }

    static catalogo(req, res){
        Pet.findAll().then(pets =>{
            res.append("catalog", JSON.stringify(pets))
            res.sendFile(path.resolve(__dirname, "../public/catalogo/catalogo.html"))
        })  
    }
}


module.exports = NonAuthUser