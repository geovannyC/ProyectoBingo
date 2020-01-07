/* eslint-disable quotes */
module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "127.0.0.1",
      user: "postgres",
      password: "1234",
      database: "bingo"
    },
    migrations: {
      tableName: "knex_migrations"
    },
    seeds: {
      tableName: "./base_de_datos/seeds"
    }
  }
};
