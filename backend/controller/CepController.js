const axios = require('axios').default; 

module.exports = {
    async index(request, response)
    {
       const {cep} = request.body;
        console.log(cep);
        const cepResponse = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        console.log(cepResponse.data);
     
        const {logradouro, bairro, localidade,uf} = cepResponse.data;
       return response.json({logradouro,bairro, localidade, uf});
    }
}