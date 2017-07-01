(function() {
				
			var getNode = function(s) {
				return document.querySelector(s);
			};
			
			var textarea = getNode('.chat textarea'),
			chatName = getNode('.chat-name');
			
			var status = getNode('.chat-status span');
			var messages = getNode('.chat-messages');
			var statusDefault = status.textContent;
			
			// this function will change status from default to whatever we get
			var setStatus = function(s) {
				status.textContent = s;
				// set status to what we want
				
				// when status is not deafault that is when status is not Online
				if(s !== statusDefault) {
					var delay = setTimeout(function() {
						setStatus(statusDefault);
						clearInterval(delay);
					}, 1500);
				}
			}
			
			try {
				
				//creates a connection to the socket "http://127.0.0.1/8080"
				var socket = io.connect('http://127.0.0.1:8080');
				
			} catch(e) {
				
			}
			
			if(socket !== undefined) // if connection is established and socket variable is not undefined
			{
				//if connection is established, send names and messages into database on particular event
				
				
				//listen for event 'output' which is client.emit('output', [data]); in server.js file
				socket.on('output', function(data) {
					//console.log(data);
					
					//loop through the data array
					if(data.length) {
						for(var x = 0; x < data.length; x = x + 1)
						{
							var message = document.createElement('div');
							message.setAttribute('class', 'chat-message');
							message.textContent = data[x].name + ': ' + data[x].message;
							
							// append
							messages.appendChild(message);
							messages.insertBefore(message, messages.firstChild);
						}
					}
				});
				
				
				//listen for the event 'status'
				// server.js will emit 'status' event only when name and message is invalid
				socket.on('status', function(data) {
					setStatus((typeof data === 'object') ? data.message: data);
					
					if(data.clear === true) {
						textarea.value = '';
					}
				});
				
				//if 'keydown' happens in textarea, do the following function
				textarea.addEventListener('keydown', function(event) {
					var self = this,
						name = chatName.value;
						
					if(event.which === 13 && event.shiftKey === false)
					{
						// it will emit 'input' event, which will be listened at the socket
						socket.emit('input', {
							name: name, message: self.value
						});
						
						event.preventDefault();
					}
				});
			}
			})();