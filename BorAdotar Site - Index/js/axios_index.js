axios.get("http://localhost:8000/exibir_index").then(response => {
    let catalogo = response.data
    let list = document.getElementById("cards")
    catalogo.forEach(animal => {
        //criação de elementos pra igualar a o modelo anterior
        let cards = document.createElement("div")
        let link_imagem = document.createElement("a")
        let cardInfo = document.createElement("div")
        let nome = document.createElement("a")
        let regiao = document.createElement("p")
        
        //inserção das variáveis nos elementos
        nome.innerHTML = animal.nome

        //setagem de atributos para carrgar o estilo do css
        cards.setAttribute("class", "cards")
        cardInfo.setAttribute("class", "card-info")

        //setagem dos links
        nome.setAttribute("href", "/")

        //configuração de que elementos ficam dentro de quais
        list.appendChild(cards)
        cards.appendChild(cardInfo)
        cardInfo.appendChild(nome)
        cardInfo.appendChild(regiao)
    })
})   