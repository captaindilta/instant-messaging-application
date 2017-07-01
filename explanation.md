#### Run the server.
Run the server.js file; connection is made to the database 'chat'; and a socket is created at one of the ports of the server; this socket listens to the connections made by the clients.

#### Run the client application; index.html
This program contains a self invoking JavaScript function, which contains all the functionality of the client side.
First of all it emits an event 'connection', this event is listened at the socket.

Event Emitter
> var socket = io.connect('http//127.0.0.1/8080');

Above statement from index.html, will emit an event named 'connection', to be listened to at the socket, i.e. port 8080 of localhost.

Event Listener
```JavaScript
client.on('connection', function(socket) {
    // the rest of the functionaity, when connection established between client and the server
  });
```
