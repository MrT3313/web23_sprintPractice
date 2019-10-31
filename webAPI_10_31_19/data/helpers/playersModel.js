const db = require('../dbConfig.js');

module.exports = {
    find,
    findById,
    // add,
    // remove,
    // update
};

function find() {
    console.log('playersModel => find()')
    return db('PLAYERS')
}

function findById(id) {
    console.log('playerModel => findById()')
    return db('PLAYERS')
        .where("id", id)
}
