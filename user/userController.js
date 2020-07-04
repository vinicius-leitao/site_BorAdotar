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
        
    })
})



module.exports = router