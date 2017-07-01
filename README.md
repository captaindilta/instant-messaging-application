# instant-messaging-application
A simple chat application using Node.js, Socket.IO, and MongoDB.

Interface of the appliaction is designed using HTML and CSS. A simple and minimal interface.

Node.js creates a socket on the server, on one of the ports using socket.io library, handles the requests made by the clients to the server socket, stores the data (username and messages entered by the user) on MongoDB, and sends data back to the clients.

Multiple clients can connect to the server socket at a time, and they all can send and receive messages through the same server.

> Run the server i.e. server.js file
> Run index.html program in your browser, the client program, every time you run this client program, a new client-server connection is established.


Please read explanation.md for understanding the whole flow of the program.
