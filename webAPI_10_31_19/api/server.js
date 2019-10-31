// IMPORTS
    const express = require('express')
    const helmet = require('helmet');
    const cors = require('cors')

// SERVER 
    const server = express()

// IMPORT ROUTES
    // const TEAMS_router = require('./routes/TEAMS_router.js')
    const PLAYERS_router = require('./routes/Players_router.js')
    
// USE MIDDLEWARE
    server.use(
        express.json(),
        helmet(),
        cors()
    )

// USE ROUTES
    // server.use('/teams', TEAMS_router)
    server.use('/players', PLAYERS_router)

// Root Route
    server.get('/', (req,res) => {
        res.status(200).json({api: 'homeManager root server Running'})
    })

// EXPORTS
module.exports = server