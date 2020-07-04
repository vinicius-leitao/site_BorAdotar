//modulos importados
const express = require('express')
const router = express.Router()
const Catalogo = require("../database/Catalogo")

//rotas
router.get("/user", (req, res) => {
    res.sendFile()
})

router.get("/user/catalogo", (req,res) => {
    res.sendFile()
})

router.get("/user/catalogo/new", (req, res) => {
    res.sendFile()
})

router.post("/user/catalogo/new", (req, res) => {
    let[name, desc, per, age] = req.body
    Catalogo.create({
        name: name,
        description: desc, 
        personality: per, 
        age: age
    }).then(() => { //checar os status code depois
        res.redirect("/user/catalogo")
        res.statusCode = 200
    }).catch(err => {
        console.log(err)
        res.statusCode = 401
    })
})



module.exports = router