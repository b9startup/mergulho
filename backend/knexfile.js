const path = require('path');

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'b9startup',
      user: 'postgres',
      password: 'docker',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: path.join(__dirname, 'database', 'migrations'),
      tableName: 'b9startup',
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'b9startup',
      user: 'postgres',
      password: 'docker',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: path.join(__dirname, 'database', 'migrations'),
      tableName: 'b9startup',
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'b9startup',
      user: 'postgres',
      docker: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: path.join(__dirname, 'database', 'migrations'),
      tableName: 'b9startup',
    },
  },
};
