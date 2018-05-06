exports.up = function(knex, Promise) {
  return knex.schema
    .createTable("heads", table => {
      table.increments("head_id");
      table.string("head_name").notNullable();
      table.string("head_src").notNullable();
      // table.integer('head_hp').notNullable();
      // table.integer('head_attack').notNullable();
      // table.integer('head_defense').notNullable();
      table.timestamps(true, true);
    })
    .createTable("bodys", table => {
      table.increments("body_id");
      table.string("body_name").notNullable();
      table.string("body_src").notNullable();
      // table.integer('body_hp').notNullable();
      // table.integer('body_attack').notNullable();
      // table.integer('body_defense').notNullable();
      table.timestamps(true, true);
    })
    .createTable("left_arms", table => {
      table.increments("left_arm_id");
      table.string("left_arm_name").notNullable();
      table.string("left_arm_src").notNullable();
      // table.integer('arm_hp').notNullable();
      // table.integer('arm_attack').notNullable();
      // table.integer('arm_defense').notNullable();
      table.timestamps(true, true);
    })
    .createTable("right_arms", table => {
      table.increments("right_arm_id");
      table.string("right_arm_name").notNullable();
      table.string("right_arm_src").notNullable();
      // table.integer('arm_hp').notNullable();
      // table.integer('arm_attack').notNullable();
      // table.integer('arm_defense').notNullable();
      table.timestamps(true, true);
    })
    .createTable("legs", table => {
      table.increments("leg_id");
      table.string("leg_name").notNullable();
      table.string("leg_src").notNullable();
      // table.integer('leg_hp').notNullable();
      // table.integer('leg_attack').notNullable();
      // table.integer('leg_defense').notNullable();
      table.timestamps(true, true);
    })
    .createTable("users", table => {
      table.increments("user_id");
      table.string("username").notNullable();
      table.string("password").notNullable();
    })
    .createTable("user_monsters", table => {
      table.increments("user_monster_id");
      table
        .integer("user_id")
        .references("user_id")
        .inTable("users")
        .onDelete("cascade");
      table
        .integer("head_id")
        .references("head_id")
        .inTable("heads")
        .onDelete("cascade");
      table
        .integer("body_id")
        .references("body_id")
        .inTable("bodys")
        .onDelete("cascade");
      table
        .integer("left_arm_id")
        .references("left_arm_id")
        .inTable("left_arms")
        .onDelete("cascade");
      table
        .integer("right_arm_id")
        .references("right_arm_id")
        .inTable("right_arms")
        .onDelete("cascade");
      table
        .integer("leg_id")
        .references("leg_id")
        .inTable("legs")
        .onDelete("cascade");
    });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable("user_monsters")
    .dropTable("users")
    .dropTable("legs")
    .dropTable("arms")
    .dropTable("left_arms")
    .dropTable("right_arms")
    .dropTable("bodys")
    .dropTable("heads");
};
