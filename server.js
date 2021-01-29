const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/ships.html');
});

app.use('/javascripts', express.static(__dirname + '/javascripts'));
app.use('/stylesheets', express.static(__dirname + '/stylesheets'));

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
});

http.listen(8000, () => {
    console.log('listening on *:8000');
});
