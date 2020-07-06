axios.get("http://localhost:8000/exibir").then(response => {
    let catalogo = response.data
    let list = document.getElementById("cards")
    catalogo.forEach(animal => {
        //criação de elementos pra igualar a o modelo anterior
        let cards = document.createElement("div")
        let imagem = document.createElement("a")
        let cardInfo = document.createElement("div")
        let nome = document.createElement("a")
        let regiao = document.createElement("p")
        
        //inserção das variáveis nos elementos
        nome.innerHTML = animal.nome

        //setagem de atributos para carrgar o estilo do css
        cards.setAttribute("class", "cards")
        cardInfo.setAttribute("class", "card-info")

        //configuração de que elementos ficam dentro de quais
        list.appendChild(cards)
        cards.appendChild(imagem, cardInfo)
        cardInfo.appendChild(nome, regiao)
    })
})   