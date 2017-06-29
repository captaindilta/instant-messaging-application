# instant-messaging-application
A simple chat application using Node.js, Socket.IO, and MongoDB.

Interface of the appliaction is designed on HTML and CSS. A simple and minimal interface.

Node.js creates the server on one of the ports of 127.0.0.1, handles the requests made by the clients to the server socket, stores the data (username and messages entered by the user) on MongoDB, and sends data back to the clients.

Socket.IO API is used to create a socket on one of the ports of 127.0.0.1, which listens to the client requests.
The client requests services from the server by initiating a connection to the server's socket. 
The server socket listens to the request emitted by the client, and serves back the requests to the client.


A client gets connected to the server socket, when we start our application proram.
The user types his name and message and hits enter key, on hitting enter key, when this event happens on the client side, the request goes to the server socket, which listens to the event emitted by client on the dedicated port.
The server then stores the name and the message entered by the user, in the database, and the server emits the messages to all the connected clients that are connected to that server socket.
