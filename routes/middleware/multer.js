//importação de modulos
require("dotenv").config()

const path = require("path")
const aws = require("aws-sdk")
const multer = require("multer")
const multerS3 = require("multer-s3")


//setagem e configuração do aws s3
aws.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACESS_KEY,
    region: 'sa-east-1'
})

const s3 = new aws.S3()

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: "boradotar",
        contentType: multerS3.AUTO_CONTENT_TYPE,
        acl: 'public-read',
        metadata: function(req, file, cb){
            cb(null, {fieldName: file.filename})
        },
        key: function(req, file, cb){
            cb(null, Date.now().toString())
        }
    })
})

module.exports = upload