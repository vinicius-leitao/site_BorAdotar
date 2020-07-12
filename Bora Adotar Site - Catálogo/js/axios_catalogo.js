axios.get("http://localhost:8000/catalogo").then(response => {
    let catalog = JSON.parse(response.headers.catalog)
    let list = document.getElementById("catalogo-container")
    catalog.forEach(animal => {
        //criação de elementos
        let box = document.createElement("article")
        let img = document.createElement("img")

        let link = document.createElement("a")
        let nome = document.createElement("h3")

        let regiao = document.createElement("a")
        let porte = document.createElement("p")
        let genero = document.createElement("p")

        //inserção das variáveis nos elementos
        nome.innerHTML = animal.name

        //setagem de atributos para carregar o estilo do css
        box.classList.add("box-pet")
        regiao.setAttribute("class","regiao-a")
        porte.setAttribute("class", "clear")
        genero.setAttribute("class", "active-border")

        //setagem dos links
        link.setAttribute("href", "/catalogo")

        //configuração de que elementos ficam dentro de quais
        link.appendChild(nome)
        box.appendChild(img)
        box.appendChild(link)
        box.appendChild(regiao)
        box.appendChild(porte)
        box.appendChild(genero)
        list.appendChild(box)
    })    
})