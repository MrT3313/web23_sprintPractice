const db = require('../dbConfig.js');

module.exports = { 
    find,
    findById,
    // add,
    // remove,
    // update
}

function find() {
    console.log('playerModel => find()')
    return db('TEAMS')
}

function findById(id) {
    console.log('playerModel => findById()')
    return db('TEAMS')
        .where("id", id)
}