const express = require("express")
const path = require("path") //ajuda nos caminhos, é mais simples para renderizar as páginas
const multer = require("multer") //armazenamento de imagens
const bodyparser = require("body-parser")
const session = require("express-session")

const User = require("../database/User")

const router = express.Router() //inicialização do express
const upload = multer({dest: './static/upload/'}) //configuração da variável upload do multer

router.use(bodyparser.urlencoded({extended: false}))
router.use(bodyparser.json())



//classes importadas - preferência no caso de um possível reaproveitamento de código, além de tirar toda a lógica da index 
const UserController = require("../controllers/userController")
const PetController = require("../controllers/petController")
const nonAuthUser = require("../controllers/noAuthUserController")

//configuração dos arquivos estáticos
router.use(express.static("static"))

//rotas

router.get("/", nonAuthUser.homePage) //rota da página príncipal do site 
router.get("/login", nonAuthUser.login) //rota da página de login
router.get("/cadastro", nonAuthUser.cadastro) //rota de cadastro
router.get("/suporte", nonAuthUser.suporte) //rota de suporte
router.get("/catalogo/:page?", nonAuthUser.catalogo) //rota do catálogo
router.get("/error", nonAuthUser.error) //rota de erro
router.get("/user/me", UserController.userMe) //rota do usuário
router.get("/user/pet/new",PetController.petForm) //passar o middleware
router.get("/user/chat", UserController.userChat) 

//mudar a rota assim que conseguir o html do vinicius
router.post("/pet", upload.single('img'), PetController.create)

//terminar else quando ler a documentação do flash
router.post("/cadastro", UserController.create)

router.post("/login", UserController.Userlogin)


//pré sets de páginas com status code
router.use((req, res) => {
    res.status(404).sendFile(path.resolve(__dirname, "../static/views/erro/erro.html"))
})

router.use((req, res) => {
    res.status(401).sendFile()
})


module.exports = router
