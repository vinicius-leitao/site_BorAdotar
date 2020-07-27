const jwt = require("jsonwebtoken") //tolkiens para os usuários

const jwtsecret = "DkWn_ZQm4wi-5BcrMRd0M1ayTzoWw9bbHfTmydCZJQjpd8KFYqAX5SmBCjZZ2dspk0pBvMCXo4nluz82RhCUCY2N36cqrxMDEHKj5zkRxn_i-BGi_H3guUop5pSxGsVFgJBJr_hSKnPC33UNBpiUedE62tpmA1xlEN_czbGoTZE"

function auth(req, res, next){ //middleware para a autenticação do usuário
    const authToken = req.headers['autorization'] //na requisição enviamos um header de autorização
    if(authToken != undefined){
        const bearer = authToken.split(" ") //O token vem em duas partes. Então precisamos reparti-lo 
        var token = bearer[1] //pegamos então a segunda parte do token
        jwt.verify(token, jwtsecret, (err, data) => { //O token é a segunda parte do array e o secret é a senha que foi usada para criptografar o token. Assim sendo, essa função pede um callback caso dê errado
            if(err){
                res.status(401)
            } else {
                req.token = token
                req.loggedUser = {id: data.id, email: data.email} //adicionar mais coisas
                next()
            }
        })
    } else {
        res
            .status(401)
            .json({err: "token inválido"})
    }
    next()
}

module.exports = auth