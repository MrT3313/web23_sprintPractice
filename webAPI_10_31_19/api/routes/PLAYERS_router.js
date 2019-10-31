// EXPRESS & ROUTER
    const router = require('express').Router()

// IMPORT MODEL
    const playersModel = require('../../data/helpers/playerModel.js')

// - GET - // 
    router.get('/', async(req,res) => {
        console.log('playersRouter get/')
        playersModel.find()
            .then( findAllPlayers => {
                console.log('findAllPlayers', findAllPlayers )
                res.status(200).json( findAllPlayers )
            })
            .catch( err => {
                res.status(500).json( err )
            })
    })
// - POST - //
    router.post('/', async(req,res) => {
    console.log('playersRouter post/')
    const newPlayer = req.body
    console.log('newPlayer', newPlayer)
        // -- //
        playersModel.add(newPlayer)
            .then( addPlayerResult => {
                console.log('addPlayerResult', addPlayerResult )
                res.status(201).json( addPlayerResult )
            })
            .catch( err => {
                res.status(500).json( err )
            })
        
    })
// - PUT - // 
    router.put('/:id', async(req,res) => {
    console.log('playersRouter put/')
    const {id} = req.params
    console.log(id)
    const updatedPlayer = req.body
    console.log(updatedPlayer)
        // -- //
        playersModel.update(id, updatedPlayer)
            .then( updateResult => {
                console.log('updateResult', updateResult )
                res.status(200).json( updateResult )
            })
            .catch( err => {
                res.status(500).json( err )
            })
    })
// - DEL - // 
    router.delete('/:id', async(req,res) => {
    console.log('playersRouter delete/')
    const {id} = req.params
    console.log(id)
        // -- //
        playersModel.remove(id)
            .then( deleteResult => {
                console.log('deleteResult', deleteResult )
                res.status(200).json( deleteResult )
            })
            .catch( err => {
                res.status(500).json( err )
            })
    })

// EXPORTS
    module.exports = router

