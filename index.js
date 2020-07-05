//modulos importados
const express = require("express")
const app = express()
const bodyparser = require("body-parser")
const path = require("path")

//importação das rotas
const userController = require("./user/userController")
const Catalogo = require("./database/Catalogo")

//configuração body-parser - ajuda a pegar parametros na requisição
app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())

//talvez seja necessário usar flash

//configurações de rotas
app.use(express.static("public"))
app.use("/", userController)


//rotas
app.get("/", (req, res) => {
        res.sendFile(path.resolve(__dirname, "public/index/index.html"))
})

app.get("/login", (req, res) => {
    res.sendFile()
})

app.get("/cadastro", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public/cadastro/cadastro.html"))
})

app.get("/suporte", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public/suporte/suporte.html"))
})

app.get("/catalogo", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public/catalogo/catalogo.html"), {catalogo: Catalogo})
})

app.get("/error", (req, res) => {
    res.sendFile(path.resolve(__dirname,"public/erro/erro.html"))
})

app.get("/teste", (req, res) => {
    Catalogo.findAll({raw: true}).then(element => {
        res.send(element)
    })
})


//só to fazendo uns testes com a exibição na index
app.post("/teste", (req, res) => {
    let nome = req.body.nome
    let descricao = req.body.descricao
    Catalogo.create({
        nome: nome,
        descricao: descricao
    }).then(() => {
        res.redirect("/")
    }).catch(err => 
        console.log(err)
    )
})

app.listen(8000, () => {
    console.log("server running")
})