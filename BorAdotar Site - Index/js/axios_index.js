axios.get("http://localhost:8000/teste").then(response => {
    catalogo = response.data
    console.log(catalogo)
    lista = document.getElementById("cards")     
})
