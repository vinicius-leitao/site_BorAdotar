const chat = document.getElementById("chat-area")
const socket = io()

socket.on('message', message => {
    console.log(message)
})

//messagem enviada
chat.addEventListener("submit", event => {
    event.preventDefault()
    const msg = event.target.elements.msg.textContent
    console.log(msg)
})