(function(){
    // Pegando a referência do container
    var container = document.getElementById("mapa");
    //Checando se o container existe para a introdução do mapa
    if(container) {
        //Verificando se o usuário está logado. O mapa exibirá a partir do ponto mais proximo dele. Caso não esteja, exibirá uma coordenada padrão do Rio de Janeiro; 
        var logado = false;
        //Criando variáveis para obter a localização do usuário
        // var userLat = user.location.lat;
        // var userLgt = user.location.lgt;
        if(logado == true){
            //Inserindo o mapa com ponto de vista mais próximo do usuário.
            var mymap = L.map('mapa').setView([userLat, userLgt], 13);
            L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                maxZoom: 18,
                id: 'mapbox/streets-v11',
                tileSize: 512,
                zoomOffset: -1,
                accessToken: 'pk.eyJ1IjoidmluaTE5bGVpdGFvIiwiYSI6ImNrZHp6d3NkdDFpMHoyd29heHRudzNoY3EifQ.tocnOMTKySArknevYlQgvA'
            }).addTo(mymap);
        }
        else{
            //Inserindo mapa com ponto de vista padrão do Rio de Janeiro.
            var mymap = L.map('mapa').setView([ -22.9035,  -43.2096 ], 13);
            L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                maxZoom: 18,
                id: 'mapbox/streets-v11',
                tileSize: 512,
                zoomOffset: -1,
                accessToken: 'pk.eyJ1IjoidmluaTE5bGVpdGFvIiwiYSI6ImNrZHp6d3NkdDFpMHoyd29heHRudzNoY3EifQ.tocnOMTKySArknevYlQgvA'
            }).addTo(mymap);
        }  
    }
    //Criando um loop para marcar cada animal no mapa (Parte mais complicada, devido a forma que vou obter essas informações do animal)
    // animals.forEach(function criaMarcador(name, local , esp, i){
    //     //Obtendo localização do animal da forma que eu imagino ser.
    //     var lat = local.lat;
    //     var lgt = local.lgt;
    //     var marcador;
    //     var gato = L.icon({
    //         iconUrl: 'js/cat.png',
    //         popupAnchor: [12, 0]
    //     })
    //     var cachorro = L.icon({
    //         iconUrl: 'js/dog.png',
    //         popupAnchor: [12, 0]
    //     })
    //     if(esp == "Gato"){
    //         marcador= L.marker([lat, lgt], {icon: gato}).addTo(mymap);
    //         marcador.bindPopup(name).openPopup();
    //     }else{
    //         marcador= L.marker([lat, lgt], {icon: cachorro}).addTo(mymap);
    //         marcador.bindPopup(name).openPopup();
    //     }  
    // })
    function criaMarcador(name, lat, lgt, esp){
        var marcador;
        var gato = L.icon({
            iconUrl: 'js/cat.png',
            popupAnchor: [12, 0]
        })
        var cachorro = L.icon({
            iconUrl: 'js/dog.png',
            popupAnchor: [12, 0]
        })
        if(esp == "Gato"){
            marcador= L.marker([lat, lgt], {icon: gato}).addTo(mymap);
            marcador.bindPopup(name).openPopup();
        }else{
            marcador= L.marker([lat, lgt], {icon: cachorro}).addTo(mymap);
            marcador.bindPopup(name).openPopup();
        }
    }
    criaMarcador("Pretinha", -22.8633154, -43.2428305, "Gato");
    criaMarcador("Alfredo", -22.8733154, -43.2528305, "Cachorro");
    criaMarcador("Melissa", -22.8673154, -43.2468305, "Cachorro");
})()