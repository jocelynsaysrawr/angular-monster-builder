// Update with your config settings.

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "127.0.0.1",
      user: "angular_monster",
      password: "hulkSmash",
      database: "angular_monster",
      charset: "utf8"
    },
    migrations: {
      directory: __dirname + "/knex/migrations"
    },
    seeds: {
      directory: __dirname + "/knex/seeds"
    }
  },

  production: {
    client: "pg",
    connection: {
      host: process.env.DATABASE_URL,
      user: "angular_monster",
      password: "hulkSmash",
      database: "angular_monster",
      charset: "utf8"
    },
    migrations: {
      directory: __dirname + "/knex/migrations"
    },
    seeds: {
      directory: __dirname + "knex/seeds"
    }
  }
};
