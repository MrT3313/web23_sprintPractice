// EXPRESS & ROUTER
    const router = require('express').Router();

// MODELS
    const playersModel = require('../../data/helpers/playersModel')

// - GET - //
    router.get('/',  (req, res) => {
        // V1
            playersModel.find()
                .then( allPlayers => {
                    console.log(allPlayers )
                    res.status(200).json(allPlayers);
                })
                .catch( err => {
                    res.status(500).json( err )
                })
        // V2
            // try {
            //     const allPlayers = await playersModel.find();
            //     res.status(200).json(allPlayers);
            // } catch (error) {
            //     res
            //         .status(500)
            //         .json({ message: 'We ran into an error retrieving the projects' });
            // }
    });
// - POST - //
// - PUT - //
// - DEL - //

// EXPORTS
    module.exports = router