const axios = require("axios")

class API {
    static async logradouro(cep){
        let response = await axios.get(`http://viacep.com.br/ws/${cep}/json/`)
        return response.data
    }
}

module.exports = API