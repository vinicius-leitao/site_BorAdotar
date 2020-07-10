//modulos importados
const express = require("express")
const app = express()
const bodyparser = require("body-parser")
const path = require("path")
const multer = require("multer")

//importação das rotas
const userController = require("./controllers/userController")
const Catalogo = require("./database/Catalogo")

//configuração body-parser - ajuda a pegar parametros na requisição
app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())

//configuração multer - salvar imagens
//const upload = multer(dest: )

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

//acertar pra não selecionar cidade, porte ou raça no form

app.get("/catalogo/:pagina?", (req, res) => {
    if(req.params.pagina == 1){
        res.sendFile(path.resolve(__dirname, "public/catalogo/catalogo.html"))
    }
    res.sendFile(path.resolve(__dirname, "public/catalogo/catalogo.html"))
})

app.get("/error", (req, res) => {
    res.sendFile(path.resolve(__dirname,"public/erro/erro.html"))
})

app.get("/teste", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public/teste/teste.html"))
})

//conferir status code depois
app.get("/exibir_index", (req, res) => {
    Catalogo.findAll({
        raw: true, 
        limit: 4
    }).then(element => {
        res.json(element)
    }).catch(err => {
        console.log(err)
        res.statusCode = 400
    })
})

app.get("/exibir_catalogo", (req, res) => {
    Catalogo.findAll({
        raw: true 
    }).then(element =>{
        res.json(element)
    })
})

//só to fazendo uns testes com a exibição na index
app.post("/teste", (req, res) => {
    let nome = req.body.nome
    let descricao = req.body.descricao
    let foto = req.body.img
    Catalogo.create({
        nome: nome,
        descricao: descricao,
        foto: foto
    }).then(() => {
        res.redirect("/")
        res.statusCode = 200
    }).catch(err => {
        console.log(err)
        res.statusCode = 401
    })
})

//terminar else quando ler a documentação do flash
app.post("/cadastro", (req, res) => {
    let [name, lastname, email, password, confirmpassword, data, sex, cep, numberhouse] = req.body
        if(password === confirmpassword){
            let fullname = name + " " + lastname
            User.create({
                nome: fullname,
                email: email,
                senha: password,
                dataDeNascimento: data,
                genero: sex, 
                cep: cep,
                numero: numberhouse
        }).then(() => {
            res.redirect("/user/me")
        }).catch(err => {
            console.log(err)
        })
    } else {

    }
})

app.listen(8000, () => {
    console.log("server running")
})