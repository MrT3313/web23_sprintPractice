
exports.up = function(knex) {
return knex.schema.createTable('PLAYERS', tbl => {
    tbl.increments('id')

    tbl.string('playerName')
    tbl.string('position')
    tbl.integer('number')
    
})
};

exports.down = function(knex) {
return knex.schema.dropTableIfExists('PLAYERS')
};
