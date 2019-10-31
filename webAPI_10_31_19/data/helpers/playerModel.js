const db = require('../dbConfig.js');

module.exports = {
    find,
    findById,
    add,
    remove,
    update
};

function find() {
    console.log('playerModel => find()')
    return db('PLAYERS')
}

function findById(id) {
    console.log('playerModel => findById()')
    return db('PLAYERS')
        .where("id", id)
}

function add(player) {
    console.log('playerModel => add()')
    return db('PLAYERS')
        .insert(player)
}

function update(id,updatePlayer){
    console.log('playerModel => update()')
    return db('PLAYERS')
        .where("id", id)
        .update(updatePlayer)
}

function remove(id) {
    return db('PLAYERS')
        .where("id", id)
        .del()
}
