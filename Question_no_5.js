const net = require('net');

const server = net.createServer((socket) => {
    console.log('Client connected');
    socket.on('data', (data) => {
        console.log('Received from client: ' + data);
        socket.write('Echo: ' + data);  // Echo back to client
    });

    socket.on('end', () => {
        console.log('Client disconnected');
    });
});

server.listen(8080, () => {
    console.log('Server listening on port 8080');
});



const net = require('net');

const client = net.createConnection({ port: 8080 }, () => {
    console.log('Connected to server!');
    client.write('Hello Server!');
});

client.on('data', (data) => {
    console.log('Received from server: ' + data);
    client.end(); // Close the connection after receiving the data
});

client.on('end', () => {
    console.log('Disconnected from server');
});
