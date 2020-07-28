const json_ = 'https://gist.githubusercontent.com/letanure/3012978/raw/2e43be5f86eef95b915c1c804ccc86dc9790a50a/estados-cidades.json';

const json_cidades = [];

  fetch(json_) 
    .then(blob => blob.json())
    .then(data =>  json_cidades.push(data))

window.addEventListener('load',function(){
  
    MostrarCidade();
  
});


function MostrarCidade(){
    var cidadebar = document.querySelector('#cidades');
    cidadebar.innerHTML = `<option value=""> Cidade </option>`;
      
        for(var j = 0; j < json_cidades[0].estados[18].cidades.length; j++){
            cidadebar.innerHTML += `<option value="${json_cidades[0].estados[18].sigla}">${json_cidades[0].estados[18].cidades[j]}</option>`;
        }
}