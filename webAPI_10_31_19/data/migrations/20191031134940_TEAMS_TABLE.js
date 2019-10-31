
exports.up = function(knex) {
    return knex.schema.createTable('TEAMS', tbl => {
        tbl.increments('id')

        tbl.string('teamName')
            .unique()
        tbl.string('city')
        tbl.string('mascotName')
            .unique()
        
        
    })
};

exports.down = function(knex) {
return knex.schema.dropTableIfExists('TEAMS')
};
