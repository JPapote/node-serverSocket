var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor')
})

socket.on('disconnect',  function() {
    console.log('Perdimos la conexion')
})

socket.emit('enviarMSJ', {
name: 'Javi',
menssage: 'Hola man, tdo bien?!?!!!'
})

socket.on('enviarMSJ', function(mesaje) {
console.log('Servidor:', mesaje)
})