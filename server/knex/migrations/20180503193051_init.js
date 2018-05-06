exports.up = function(knex, Promise) {
  return knex.schema.createTable("heads", table => {
    table.increments("head_id");
    table.string("head_name").notNullable();
    table.string("head_src").notNullable();
    table.integer("head_hp").notNullable();
    table.integer("head_attack").notNullable();
    table.integer("head_defense").notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("heads");
};
