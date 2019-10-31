// EXPRESS & ROUTER
    const router = require('express').Router()

// IMPORT MODEL
    const teamsModel = require('../../data/helpers/teamModel.js')

// - GET - //
    // -1- // get all teams
    router.get('/', async(req,res) => {
    console.log('teamsRouter get/')
        // -- //
        teamsModel.find()
            .then( allTeamsResult => {
            console.log('allTeamsResult', allTeamsResult )
                // -- //
                // V1
                    allTeamsResult && res.status(200).json(allTeamsResult) 
                // V2
                
            })
            .catch( err => {
                res.status(500).json( err )
            })
    })
    // -2- // get team by id
    router.get('/:id', async(req,res) => {
    console.log('teamsRouter get/')
    const {id} = req.params
        // -- //
        teamsModel.findById(id)
            .then( teamByIdResult => {
            console.log('teamByIdResult', teamByIdResult )
                res.status(200).json( teamByIdResult )
            })
            .catch( err => {
                res.status(500).json( err )
            })
        
    })
// - POST - //
// - PUT - //
// - DEL - //

// EXPORTS
module.exports = router





