const {io} = require('../server');

io.on('connection', (client) =>{
    console.log('Cliente connectado')

   client.on('enviarMSJ', (msj) => {
        console.log(msj)

        client.broadcast.emit('enviarMSJ', msj)
    
    })

    
    //Broadcast: Para enviar a todos los usuarios un msj
    //emit: Para enviar a un solo usuario
    client.on('disconnect', () => {
        console.log('Usuario desconectado')
    })
})

module.exports = {
    io
}