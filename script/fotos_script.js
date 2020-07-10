function getBase64(img){
    let canvas = document.createElement("canvas") //cria uma área de desenho. No html canvas é uma parte da página selecionada para renderizar desenhos
    canvas.width(img) //definir largura do canvas
    canvas.height(img) //definir altura do canvas

    let context = canvas.getContext("2d") //diz como a imagem deve ser renderizada
    context.drawImage(img, 0, 0) //definem o tamanho do padding pras margens do canvas 

    let dataURL = canvas.toDataURL("image/jpg") //primeiro parametro: formato desejado retorna o canvas em forma de URI, default = png

    return dataURL.replace(/^data:image\/(png|jpg); base64, /,"")
}