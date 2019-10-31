// IMPORT SERVER
    const server = require('./api/server.js')

// PORT
    const PORT = process.env.PORT || 8888

// Server Listening
    server.listen(PORT, () => {
        console.log(`=== webAPI server on http://localHost:${PORT}`)
    })