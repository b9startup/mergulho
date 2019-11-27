import knex from 'knex';

const database = knex({
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'postgres',
    password: 'docker',
    database: 'b9startup',
  },
});

export default database;
