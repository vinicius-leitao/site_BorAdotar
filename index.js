//modulos importados
const express = require("express") //módulo de rotas 
const bodyparser = require("body-parser") //requisições podem ser pegas diretamente do body do html
const session = require("express-session") //sessões e criação de requisições com sessions
const flash = require("express-flash") //responses que só duram uma request 

const app = express()



//importação das rotas
const routes = require("./routes/rotas")
app.use("/", routes)

//configuração body-parser - ajuda a pegar parametros na requisição
app.use(session({ //configurações do express session
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {secure: true}
}))
app.use(flash()) //usando o express-flash como middleware



//inicialização do "servidor" na porta 8000
app.listen(8000, () => { 
    console.log("server running")
})