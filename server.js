// variable mongo, accesses MongoClient's path, that makes connection to database
var mongo = require('mongodb').MongoClient;
// 'mongodb' is name of the package

var client = require('socket.io').listen(8080).sockets;
// socket is listening at port 8080
// client variable listens to this port for requests
// whenever the connection is made to the socket from the client, 
// client.on('connection', function(socket) {}); will handle the request
// 'connection' is an event which will be emmited by the client

// our index.html page will make a connection request to this socket
// to create a connection to the socket "http://127.0.0.1/8080" from our index.html page, type in console log of browser
// var socket = io.connect('http:/127.0.0.1/8080');
// now a connection will be established from our index.html page to the socket
// now from this connection we can emit something like 'input' and socket will listen to that connection


/*
EVENT LISTENER
client.on('connection', function(socket) {});

EVENT EMITTER
var socket = io.connect('http://127.0.0.1/8080');
*/

//connect to your datbase running on the server
mongo.connect('mongodb://127.0.0.1/chat', function(err, db) {
	if(err) throw err;
	
	// if mongodb is successfully connected, then we can proceed to listen to the connections
	// when a connection request is made to the socket, the below callback occurs
	// therefore we are listening for connections here
	// connection will be emitted by our index.html program
	client.on('connection', function(socket) {
		
		var sendStatus = function(s) {
			socket.emit('status', s);
		};
		
		var col = db.collection('messages');
		//create collection names messages
		
		// emit all messages when client is first connected
		// retrieve all messages from database and send to client
		col.find().limit(100).sort({_id: 1}).toArray(function(err, res) {
			if(err) throw err;
			socket.emit('output', res);
		});
		
		
		// requests to socket will be made when index.html emits an event named 'input'
		// so when socket.emit('input', data); from index.html following function will happen to data
		// the function will send data into the database
		socket.on('input', function(data) {
			//send data to databse
			var name1 = data.name;
			var message1 = data.message;
			var whitespacePattern = /^\s*$/;
			
			if(whitespacePattern.test(name1) || whitespacePattern.test(message1))
			{
				//console.log("Invalid!");
				// call sendStatus function which will emit event 'status'
				// this event 'status' will be listened by the index.html file
				sendStatus('Name and message is required');
			}
			else
			{
				col.insert({name: name1, message: message1}, function() {
				//console.log("Data Inserted!");
				
				
				// emit latest message to all clients
				client.emit('output', [data]);
				
				sendStatus({
					message: "Message sent!",
					clear: true
				});
				
				});
			}
			
			
		});
	});
});
