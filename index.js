//modulos importados
const express = require("express")
const app = express()
const bodyparser = require("body-parser")

//importação das rotas
const userController = require("./user/userController")

//configuração body-parser - ajuda a pegar parametros na requisição
app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())


//configurações de rotas
app.use("/", userController)


//rotas
app.get("/", (req, res) => {
    res.sendFile()
})

app.get("/login", (req, res) => {
    res.sendFile()
})

app.get("/cadastro", (req, res) => {
    res.sendFile()
})

app.get("/suporte", (req, res) => {
    res.sendFile()
})

app.get("/catalogo", (req, res) => {
    res.sendFile()
})

app.get("", (req, res) => {
    res.sendFile("")
})

app.listen(8000, () => {
    console.log("server running")
})