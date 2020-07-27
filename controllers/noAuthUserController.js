const path = require("path")
const Pet = require("../database/Pet")

class NonAuthUser{

    static homePage(req, res){ //página principal(index)
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
        let page = req.params.page
        let offset
        if(isNaN(page) || page == 1 || page == undefined){ //se o valor não for um numero ou for igua a 1
            offset = 0 //o offset indica o primeiro objeto que será exibido
        } else {
            offset = (parseInt(page) -1 ) * 20 //caso a página não seja a primeira o offset vai ser o valor da página - 1 x 20
        }
        Pet.findAndCountAll({
            limit: 20, //limita o número de pets exibidos
            offset: offset,
            order: [ 
                ['id', 'ASC'] //usa o id para listar os dados em ordem crescente (ascend)
            ] //ainda falta o sistema de render pelos IDs
        }).then(pets => {
            let nextPage
            if(offset + 20 >= pets.count){ //se offset + 20 (número de pets por página) for maior que o número achado na tabela a próxima página não existe
                nextPage = false
            } else {
                nextPage = true
            }
            res
                .append("nextPage", nextPage) //passando o nextPage como parametro no header
                .append("catalog", JSON.stringify(pets)) //lista de pets
                .sendFile(path.resolve(__dirname, "../static/views/catalogo/catalogo.html")) //renderização da página
        })  
    }

    static search(req, res){
        let {txtEspecie, cidades, txtPorte, txtNome} = req.body
        Pet.findAll({
            where: {

            }
        }).then(() => {}
        ).catch(err => {
            console.log(err)
        })
    }

    static error(req, res){
        res.sendFile(path.resolve(__dirname, "../static/views/erro/erro.html"))
    }
}


module.exports = NonAuthUser