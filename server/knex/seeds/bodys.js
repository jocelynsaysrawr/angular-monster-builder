exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("bodys")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("bodys").insert([
        {
          body_name: "Bad King Body",
          body_src: "./assets/body/badKing.png"
        },
        {
          body_name: "Donut Body",
          body_src: "./assets/body/Donut.png"
        },
        {
          body_name: "Robot Body",
          body_src: "./assets/body/robot-toaster.png"
        },
        {
          body_name: "Dough Body",
          body_src: "./assets/body/Monsters-Dough.png"
        },
        {
          body_name: "Pizza Body",
          body_src: "./assets/body/pizza.png"
        }
      ]);
    });
};
