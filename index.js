//modulos importados
require("dotenv").config()

const express = require("express") //módulo de rotas 
const http = require("http") //protocolo 
const socketio = require("socket.io") //web socket -> chat 
const flash = require("express-flash") //responses que só duram uma request

//funções importadas
const formatMessage = require('./chat/messages')

//inicialização
const app = express()
const server = http.createServer(app)
const io = socketio(server)

//executa quando um usuário conecta
io.on('connection', socket => {
    console.log("New WS Connection")

    socket.emit('message', formatMessage('','Bem vindo'))//emite uma mensagem só para a pessoa que se conectou
    socket.broadcast.emit("message", "Alguém se conectou") //para todos menos a pessoa que logou
    socket.on("disconnect", () => { 
        io.emit("message", "Alguém saiu") //para todos os usuários em geral 
    })

    socket.join()

    //pegando a mensagem para o chatMessage
    socket.on('chatMessage', (msg) => { //assim que a pessoa mandar a mensagem ela é pega e: 
        io.emit('message', formatMessage("user", msg)) //emite para todos
    })
})

//importação das rotas
const routes = require("./routes/rotas")
app.use("/", routes)

//configuração body-parser - ajuda a pegar parametros na requisição
app.use(flash()) //usando o express-flash como middleware

//inicialização do "servidor" na porta 3000
server.listen(3000, () => { 
    console.log("server running")
})