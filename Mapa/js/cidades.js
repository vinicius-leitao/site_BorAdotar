
const json_ = 'https://gist.githubusercontent.com/letanure/3012978/raw/2e43be5f86eef95b915c1c804ccc86dc9790a50a/estados-cidades.json';

const json_cidades = [];

fetch(json_).then(blob => blob.json()).then(data => json_cidades.push(data))

window.addEventListener('load',function(){
  
    document.querySelector('#estados').addEventListener('click', function(){
     
      var cidadebar = document.querySelector('#cidades');
      cidadebar.innerHTML = ``;
        
      for(var i = 0; i < json_cidades.estados.length; i++){
        if (this.value == json_cidades.estados[i].sigla){
          cidadebar.innerHTML = `<select name="txtCidade" id='cidades'>
          <option value="">Cidade</option>`;

          for(var j = 0; j < json_cidades.estados[i].cidades.length; j++){
              console.log(json_cidades.estados[i].cidades[j]);
              cidadebar.innerHTML += `<option value="">${json_cidades.estados[i].cidades[j]}</option>`;
          }

        cidadebar.innerHTML += `</select>`;
        } else if (this.value == ''){

          cidadebar.innerHTML = `<select name="txtCidade" id='cidades'>
          <option value="">Cidade</option>
          </select>`;
        } 
      }

    }); 
  
});




