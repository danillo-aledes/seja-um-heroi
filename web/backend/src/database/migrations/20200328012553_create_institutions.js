
exports.up = function(knex) {
  return knex.schema.createTable('institutions', function (table) {
    table.string('id').primary();
    table.string('user').notNullable();
    table.string('password').notNullable();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('institutions');
};
