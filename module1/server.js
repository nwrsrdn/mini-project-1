const { createServer } = require('https')
const { Server } = require('socket.io')
const chokidar = require('chokidar');

const {
  CERT, KEY, FILE, getFileData, transformData
} = require('./utils')

const options = {
  cert: getFileData(CERT),
  key: getFileData(KEY)
}

const httpsServer = createServer(options, (req, res) => {
  if (req.url === '/metrics' && req.method === 'GET') {
    const data = getFileData(FILE)

    res.writeHead(200, { 'Content-Type': 'text/csv' })
    res.end(data)
  }
})

const io = new Server(httpsServer, {
  cors: {
    origin: "http://localhost:3000"
  }
})

const onConnection = (socket) => {
  io.emit('log', 'You are connected to the server!')
  chokidar.watch(FILE).on('all', () => {
    const rawData = getFileData(FILE)
    const data = transformData(rawData)
    io.emit('newData', data)
  })
}

io.on('connection', onConnection)
  .on("connection_error", (err) => {
  console.log(err.req);      // the request object
  console.log(err.code);     // the error code, for example 1
  console.log(err.message);  // the error message, for example "Session ID unknown"
  console.log(err.context);  // some additional error context
})

httpsServer.listen(3030, () => {
  console.log('Socket.io server listening on port 3030')
})
