We will create a socket on localhost.
We need to listen to the connections on the socket created by us. User will connect to the socket, when he opens the web page, that is our program, that is index.html program. index.html will connect to the node.js server and include the socket.io.js file on the server, and we will get connected to socket.

we need to install socket.io using Node Package Manager. socket.io module allows us to use socket functionality.

we need to install mongodb using NPM. mongodb is the node module that allows us to use MongoDB functionality.

// > npm init
// to create package.json file

// >npm install socket.io
// node_modules folder will be created, and it will contain socket.io modules for socket.io functionality

// >npm install mongodb
// it will allow us to use mongodb functionality

// C:\mongodb\server\3.4\bin>mongod
// mongodaemon, starts listening for connections.... basically the database running

// C:\mongodb\server\3.4\bin>mongo
//opens the database and provides command line interface

// > show dbs
// > use chat
// chat is our database name


// server will be running on localhost that is 127.0.0.1
// server is litening on the port number 8080

/*
To make a connection request, 
the client tries to rendezvous with the server on the server's machine and port.
The client also needs to identify itself to the server,
so it binds to a local port number that it will use during this connection. 
This is usually assigned by the system.


If everything goes well, the server accepts the connection. 
Upon acceptance, the server gets a new socket bound to the same local port 
and also has its remote endpoint set to the address and port of the client. 
It needs a new socket so that it can continue to listen to the original socket for connection requests 
while attending to the needs of the connected client.

On the client side, if the connection is accepted, a socket is successfully created 
and the client can use the socket to communicate with the server.
The client and server can now communicate by writing to or reading from their sockets.
*/




/*
Initially, a socket is created in the unconnected state, 
meaning the socket is not associated with any foreign destination.
Connections are established between a client process and a server process. In a connection-oriented network environment, a client process initiates a connection and a server process receives, or responds to, a connection. The client and server interactions occur as follows:
The server, when willing to offer its advertised services, binds a socket to a well-known address associated with the service, and then passively listens on its socket. It is then possible for an unrelated process to rendezvous with the server.
The server process socket is marked to indicate incoming connections are to be accepted on it.
The client requests services from the server by initiating a connection to the server's socket. The client process uses a connect subroutine to initiate a socket connection.
If the client process' socket is unbound at the time of the connect call, the system automatically selects and binds a name to the socket if necessary. This is the usual way that local addresses are bound to a socket.
The system returns an error if the connection fails (any name automatically bound by the system, however, remains). Otherwise, the socket is associated with the server and data transfer can begin.
*/
