#### Run the server.
Run the server.js file; connection is made to the database 'chat'; and a socket is created at one of the ports of the server; this socket listens to the connections made by the clients.

#### Run the client application; index.html
This program contains a self invoking JavaScript function, which contains all the functionality of the client side.
First of all it emits an event 'connection', this event is listened at the socket.


Event Emitter
```JavaScript
var socket = io.connect('http//127.0.0.1/8080');
```

Above statement from index.html, will emit an event named 'connection', to be listened to at the socket, i.e. port 8080 of localhost.

Event Listener
```JavaScript
client.on('connection', function(socket) {
    // the rest of the functionaity, when connection established between client and the server
  });
```

The two variables, variable **socket** in index.html and variable **client** in server.js:
```JavaScript
var socket = io.connect('http://127.0.0.1:8080');
```
the above **socket** variable in index.html; contains connection to the socket (port number) of the server.

```JavaScript
var client = require('socket.io').listen(8080).sockets;
```
the above **client** variable in server.js; contains connection to the socket of the client program.

When the client is connected for the first time, he receives all the messages, while he was offline, therefore the server.js will emit an event named **'output'**; and index.html will listen to this event and displays the messages.

In index.html will listen to the keydown event now, when Enter key is pressed, if name textfield and message textarea are not empty; 
index.html will emit an event named **'input'** which will be listened by server.js.

When server listens to the **'input'** event, it stores the name and message in databse 'chat' and displays the sent message on our index.html page.
