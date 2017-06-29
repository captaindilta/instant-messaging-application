# instant-messaging-application
A simple chat application using Node.js, Socket.IO, and MongoDB.

Interface of the appliaction is designed on HTML and CSS. A simple and minimal interface.

Node.js creates the server on a port of 127.0.0.1(or any other IP address), handles the requests made by the clients to the server socket, stores the data (username and messages entered by the user) on MongoDB, and sends data back to the clients.

Socket.IO API is used to listen to the client requests by creating a socket, this socket listens to the client requests.
The client requests services from the server by initiating a connection to the server's socket.
The server socket listens to the request emitted by the client, and serves back the requests to the client.


A client gets connected to the server socket, when we start our application progam.
The client sends data to the Node.js server through the socket connection and server inserts into the MongoDB database, and then the server emits the messages to all the connected clients that are connected to that server socket.
