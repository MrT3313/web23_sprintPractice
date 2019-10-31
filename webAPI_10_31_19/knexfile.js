// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: 'data/webAPI_DB.sqlite3'
      // filename: './DB.webAPI_DB.db3'
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
    useNullAsDefault: true,
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
