const path = require("path")
const Pet = require("../database/Pet")

class NonAuthUser{

    static homePage(req, res){
        Pet.findAll({limit: 4}).then(pets => { //exibe 4 itens na index como um mini catalogo/preview
            res
                .append("catalog_index", JSON.stringify(pets)) //passando a seleção da tabela como parametro do header
                .sendFile(path.resolve(__dirname, "../public/index/index.html"))
        })
    }

    static cadastro(req, res){
        res.sendFile(path.resolve(__dirname, "../public/cadastro/cadastro.html"))
    }

    static suporte(req, res){
        res.sendFile(path.resolve(__dirname, "../public/suporte/suporte.html"))
    }

    static catalogo(req, res){
        let page = req.params.page
        let offset
        if(isNaN(page) || page == 1 || page == undefined){ //se o valor não for um numero ou for igua a 1
            offset = 0 //o offset indica o primeiro objeto que será exibido
        } else {
            offset = (parseInt(page) -1 ) * 20 //caso a página não seja a primeira o offset vai ser o valor da página - 1 x 20
        }
        Pet.findAndCountAll({
            limit: 20, //limita o número de dos exibidos
            offset: offset,
            order: [ 
                ['id', 'ASC'] //usa o id para listar os dados em ordem crescente (ascend)
            ] 
        }).then(pets => {
            let nextPage
            if(offset + 20 >= pets.count){
                nextPage = false
            } else {
                nextPage = true
            }
            res
                .append("nextPage", nextPage)
                .append("catalog", JSON.stringify(pets))
                .sendFile(path.resolve(__dirname, "../public/catalogo/catalogo.html"))
        })  
    }
}


module.exports = NonAuthUser