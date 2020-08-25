const formatMessage = require('./messages')
const io = require('socket.io')

module.exports = function(socket){
    socket.on("message", message => {
        io.emit("chat-message", message)
    })
}

