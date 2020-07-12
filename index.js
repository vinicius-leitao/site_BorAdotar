//modulos importados
const express = require("express")
const app = express()
const bodyparser = require("body-parser")
const path = require("path")
const multer = require("multer")

//classes importadas
const newUserController = require("./controllers/newUserController")
const newPetController = require("./controllers/newPetController")
const nonAuthUser = require("./controllers/noAuthUserController")


//tabela pet não foi criada ???
const Pet = require("./database/Pet")

//configuração body-parser - ajuda a pegar parametros na requisição
app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())

//configuração multer - salvar imagens
//const upload = multer(dest: )

//talvez seja necessário usar flash

//configurações do express para a renderização
app.use(express.static("public"))

//rotas
app.get("/", nonAuthUser.homePage)

app.get("/login", (req, res) => {
    res.sendFile()
})

app.get("/cadastro", nonAuthUser.cadastro)

app.get("/suporte", nonAuthUser.suporte)

//acertar pra não selecionar cidade, porte ou raça no form

app.get("/catalogo/:pagina?", nonAuthUser.catalogo)

app.get("/error", (req, res) => {
    res.sendFile(path.resolve(__dirname,"public/erro/erro.html"))
})

app.get("/teste", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public/teste/teste.html"))
})

//mudar a rota assim que conseguir o html do vinicius
app.post("/teste", newPetController.create)

//terminar else quando ler a documentação do flash
app.post("/cadastro", newUserController.create)

app.listen(8000, () => {
    console.log("server running")
})