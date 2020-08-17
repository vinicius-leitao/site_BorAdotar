//modulos importados
const express = require("express")
const bodyparser = require("body-parser")

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

router.post("/pet", PetController.create) //cadastra um novo pet    
router.post("/cadastro", UserController.create) //cadastra um novo usuário
router.post("/login", UserController.Userlogin) //confere os dados de login


router.get("/teste", (req, res) => {
    res.sendfile("./static/views/teste/teste.html")
})
router.post("/teste", upload.single("imagem"), (req, res) => {
    res.json({'imagem': req.file})
})

//pré sets de páginas com status code
router.use(PublicController.error)

module.exports = router