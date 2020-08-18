let search = window.location.search
axios.get(`http://localhost:3000/catalogo${search}`).then(response => {
    let catalog = JSON.parse(response.headers.catalog)
    let token = response.headers.cookie
    let list = document.getElementById("catalogo-container")
    console.log(catalog)

    let cadastro = document.getElementById("cadastro")
    let login = document.getElementById("login")
    
    if(token && token != null && token != "undefined"){
        //definição
        login.innerHTML = "Perfil"
        cadastro.innerHTML = "Chat"

        //setagem de rotas
        login.setAttribute("href", "/user/me")
        cadastro.setAttribute("href", "/user/chat")
    }

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
        porte.innerHTML = animal.port.toUpperCase().substr(0,1)

        //setagem de links
        img.src = animal.url

        //setagem de atributos para carregar o estilo do css e links
        box.classList.add("box-pet")
        link.setAttribute("href", `http://localhost:3000/pet?id=${animal.id}`)
        regiao.setAttribute("class","regiao-a")
        porte.setAttribute("class", "clear")
        genero.setAttribute("class", "active-border")

        //configuração de que elementos ficam dentro de quais
        list.appendChild(box)
        link.appendChild(nome)
        box.appendChild(img)
        box.appendChild(link)
        box.appendChild(regiao)
        box.appendChild(porte)
        box.appendChild(genero)
    })
})