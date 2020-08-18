//modulos importados
const express = require("express")
const bodyparser = require("body-parser")
const multer = require("multer")
const path = require("path")

//inicialização e configuração dos módulos
const router = express.Router() //inicialização do express
router.use(bodyparser.urlencoded({extended: false}))
router.use(bodyparser.json())

//middlewares importados
const auth = require("./middleware/authenticator")
const upload = require("./middleware/multer")

//classes importadas - preferência no caso de um possível reaproveitamento de código, além de tirar toda a lógica da index 
const UserController = require("../controllers/userController")
const PetController = require("../controllers/petController")
const PublicController = require("../controllers/PublicController")

//configuração dos arquivos estáticos
router.use(express.static("static"))

//rotas
router.get("/", PublicController.homePage) //rota da página príncipal do site 
router.get("/login", PublicController.login) //rota da página de login
router.get("/cadastro", PublicController.cadastro) //rota de cadastro
router.get("/suporte", PublicController.suporte) //rota de suporte
router.get("/catalogo/:page?", PublicController.catalogo) //rota do catálogo
router.get("/error", PublicController.error) //rota de erro
router.get("/user/me", auth, UserController.userMe) //rota do usuário
router.get("/user/pet/new", auth, PetController.petForm) //passar o middleware
router.get("/user/chat",auth, UserController.userChat) //página do chat
router.get("/pet", auth, PetController.pet) //pagina do pet
router.get("/logout", UserController.logout) //rotas de logout

router.post("/pet", upload.single("img"), PetController.create) //cadastra um novo pet    
router.post("/cadastro", UserController.create) //cadastra um novo usuário
router.post("/login", UserController.Userlogin) //confere os dados de login

//pré sets de páginas com status code
router.use(PublicController.error)

module.exports = router