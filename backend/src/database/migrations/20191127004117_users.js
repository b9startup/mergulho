exports.up = knex => {
  return knex.schema.createTable('users', table => {
    table.increments();
    table.string('name').notNullable();
    table
      .string('email')
      .notNullable()
      .unique();
    table.string('password_hash').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = knex => {
  return knex.schema.dropTable('users');
};
