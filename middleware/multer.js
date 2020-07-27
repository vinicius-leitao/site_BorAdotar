// const multer = require("multer")
// const path = require("path")

// const imageFilter = (req, file, cb) => { 
//     if(file.mimetype.startsWith("image")){
//         cb(null, true)
//     } else { 
//         cb("Por favor, só faça upload de imagens")
//     }
// }

// let storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, path.resolve(__dirname, "../upload/"))
//     }, 
//     filename: (req, file, cb) => {
//         cb(null, `${Date.now()} image`)
//     }
// })

// let uploadFile = multer({storage: storage, fileFilter: imageFilter})
// module.exports = uploadFile

//conferir se vale a pena utilizar