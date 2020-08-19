window.addEventListener('load',function(){

    document.querySelector('#login').addEventListener('click', MostrarLogin);

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
