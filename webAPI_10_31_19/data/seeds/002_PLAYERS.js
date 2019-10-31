exports.seed = function(knex) {
    // Deletes ALL existing entries
        return knex('PLAYERS').truncate()
            .then(function () {
                // Inserts seed entries
                return knex('PLAYERS').insert([
                    {
                        playerName: 'REED',
                        position: 'infield',
                        number: 33,
                    },
                    {
                        playerName: 'The Rock',
                        position: 'infield',
                        number: 12,
                    },
                    {
                        playerName: 'Himmat Gill',
                        position: 'outfield',
                        number: 100,
                    },
                    {
                        playerName: 'Can of Paint',
                        position: 'outfield',
                        number: 46,
                    }
                ]);
            });
};