exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("legs")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("legs").insert([
        {
          leg_name: "muscle leg",
          leg_src: "./assets/legs/muscle-leg.png"
        },
        {
          leg_name: "banana leg",
          leg_src: "./assets/legs/banana-legs.png"
        },
        {
          leg_name: "penis leg",
          leg_src: "./assets/legs/penis-leg.png"
        },
        {
          leg_name: "hairy leg",
          leg_src: "./assets/legs/hairy-legs.png"
        },
        {
          leg_name: "squat leg",
          leg_src: "./assets/legs/squat-legs.png"
        }
      ]);
    });
};
