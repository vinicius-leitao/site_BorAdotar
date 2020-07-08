cidades = [
    "Cidade", 
    "Belford Roxo",
    "Cachoeiras de Macacu",
    "Duque de Caxias",
    "Guapimirim",
    "Itaboraí",
    "Itaguaí",
    "Japeri",
    "Magé",
    "Maricá",
    "Mesquita",
    "Nilópolis",
    "Niterói",
    "Nova Iguaçu",
    "Paracambi",
    "Petrópolis",
    "Queimados",
    "Rio Bonito",
    "Rio de Janeiro",
    "São Gonçalo",
    "São João de Meriti",
    "Seropédica",
    "Tanguá"
]

raca = [
    "Raça",
    "Cachorro",
    "Gato"
]

porte = [
    "Porte",
    "pequeno",
    "medio", 
    "grande"
]

let especie = document.getElementById("especie")
raca.forEach(raca => {
    let opcao = document.createElement("option")
    opcao.innerHTML = raca
    especie.appendChild(opcao)
})

let tamanho = document.getElementById("porte")
porte.forEach(porte => {
    let opcao = document.createElement("option")
    opcao.innerHTML = porte
    tamanho.appendChild(opcao)
})

let municipios = document.getElementById("cidades")
cidades.forEach(cidades => {
    let opcao = document.createElement("option")
    opcao.innerHTML = cidades
    municipios.appendChild(opcao)
})



