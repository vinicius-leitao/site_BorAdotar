//importação de módulos
const path = require("path")
const jwt = require("jsonwebtoken")

//importação da tabela do BD
const Pet = require("../database/Pet")

//importação das funções
const spliter = require("../routes/middleware/scripts/tokenSplt")


class PublicController{
    
    static homePage(req, res){ //página principal
        if(req.header)
        Pet.findAll({limit: 10}).then(pets => { //exibe 4 itens na index como um mini catalogo/preview
            res
                .append("catalog_index", JSON.stringify(pets)) //passando a seleção da tabela como parametro do header
                .sendFile(path.resolve(__dirname, "../static/views/index/index.html"))
        })
    }

    static cadastro(req, res){ //rota get -> rota post está no arquivo newUserController
        res.sendFile(path.resolve(__dirname, "../static/views/cadastro/cadastro.html"))
    }

    static suporte(req, res){ 
        res.sendFile(path.resolve(__dirname, "../static/views/suporte/suporte.html"))
    }

    static catalogo(req, res){ //renderização e lógica de paginação da página de catálogo
        let cookie
        if(req.headers.cookie == undefined || req.headers.cookie == null){ 
        } else {
            cookie = jwt.decode(spliter(req.headers.cookie))
        }
        let search = {}
        let specie = req.query.especie
        if(specie){
            search.specie = specie
        }
        
        Pet.findAll({
            where: search
        }).then(pets => {
            res
            //problema do nav autenticado
                .append("cookie", JSON.stringify(cookie))
                .append("catalog", JSON.stringify(pets)) //lista de pets
                .sendFile(path.resolve(__dirname, "../static/views/catalogo/catalogo.html")) //renderização da página
        }).catch(err => {
            console.log(err)
        })
    } 

    static login(req, res){
        res.sendFile(path.resolve(__dirname, "../static/views/login/login.html"))

    }

    static error(req, res){
        res.sendFile(path.resolve(__dirname, "../static/views/erro/erro.html"))
    }
}

module.exports = PublicController