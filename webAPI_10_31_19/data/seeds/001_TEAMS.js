exports.seed = function(knex) {
    // Deletes ALL existing entries
        return knex('TEAMS').truncate()
            .then(function () {
                // Inserts seed entries
                return knex('TEAMS').insert([
                    {
                        teamName: '7Eleven',
                        city: 'AnyShadyCorner',
                        mascotName: 'ColdPizza',
                    },
                    {
                        teamName: 'TacoBell',
                        city: 'WayToCloseToYou',
                        mascotName: 'Charmin Bear',
                    },
                    {
                        teamName: 'Matt Foley',
                        city: 'Little Coat',
                        mascotName: 'Fat Guy',
                    }
                ]);
            });
};