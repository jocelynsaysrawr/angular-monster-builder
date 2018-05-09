exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("heads")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("heads").insert([
        {
          head_name: "Big Head",
          head_src: "./assets/heads/big-head.png"
          // head_hp: 7,
          // head_attack: 7,
          // head_defense: 7
        },
        {
          head_name: "Little Head",
          head_src: "./assets/heads/tiny-head.png"
          // head_hp: 3,
          // head_attack: 3,
          // head_defense: 2
        },
        {
          head_name: "Weird Head",
          head_src: "./assets/heads/weird-head.png"
          // head_hp: 9,
          // head_attack: 9,
          // head_defense: 9
        },
        {
          head_name: "Shaq Head",
          head_src: "./assets/heads/shaq-head.png"
          // head_hp: 7,
          // head_attack: 7,
          // head_defense: 7
        }
      ]);
    });
};
