// IMPORTS
    require('dotenv').config()
    const express = require('express')
    const helmet = require('helmet')

// SERVER
    const server = express()

// ROUTES
    const teamsRouter = require('./routes/TEAMS_router.js')
    const playersRouter = require('./routes/PLAYERS_router.js')

// USE MIDDLEWARE 
    server.use(
        express.json(),
        helmet(),
    )

// USE ROUTES
    server.use('/teams', teamsRouter)
    server.use('/players', playersRouter)


// Root Route
    server.get('/', (req,res) => {
        // res.status(200).json( {message: 'welcome'} )
        res.send({message: '123456789'})
    })

// EXPORT
    module.exports = server 

