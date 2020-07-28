const json_ = 'https://gist.githubusercontent.com/letanure/3012978/raw/2e43be5f86eef95b915c1c804ccc86dc9790a50a/estados-cidades.json';

const json_cidades = [];

  fetch(json_) 
    .then(blob => blob.json())
    .then(data =>  json_cidades.push(data))


window.addEventListener('load',function(){
  
    document.querySelector('#estados').addEventListener('click', function(){
        MostrarCidade(this.value);
    }); 
  
    document.querySelector('#login').addEventListener('click', function(){

        MostrarLogin();
    })
});


function MostrarLogin(e){

    var loginbar = document.querySelector('#loginbar');

    loginbar.classList.remove('display-none');  
    console.log(e)

    loginbar.addEventListener('click', function(e){
        
        if(e.target.id == 'loginbar' || e.target.id == 'close' ){
            loginbar.classList.add('display-none');
        }
    });
}


function MostrarCidade(es){
    var cidadebar = document.querySelector('#cidades');
    cidadebar.innerHTML = ``;
      
    for(var i = 0; i < json_cidades[0].estados.length; i++){
      if (es == json_cidades[0].estados[i].sigla){
        cidadebar.innerHTML = `<option value="">Cidade</option>`;

        for(var j = 0; j < json_cidades[0].estados[i].cidades.length; j++){
            console.log(json_cidades[0].estados[i].cidades[j]);
            cidadebar.innerHTML += `<option value="">${json_cidades[0].estados[i].cidades[j]}</option>`;
        }
        
      } else if (es == ''){
        cidadebar.innerHTML = `<select name="txtCidade" id='cidades'>
        <option value="">Cidade</option>
        </select>`;
      } 
    }
}