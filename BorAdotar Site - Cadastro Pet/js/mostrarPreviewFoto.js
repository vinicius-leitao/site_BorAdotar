
(function(){
    var input = document.querySelector(".inputImg");
    input.value = null;
    input.addEventListener("change", previewImg);
function previewImg(){
    var imagem = document.querySelector("input[name=img]").files[0];
    var preview = document.querySelector(".uploadedImg");
    var reader = new FileReader();
    preview.alt = "Foto enviada pode conter animais de estimação em processo de cadastro para adoção.";
    reader.addEventListener("load", function(){
        preview.src = reader.result;
    })
    if(imagem){
        reader.readAsDataURL(imagem);
    }else{
        preview.src = "";
    }
}
})()