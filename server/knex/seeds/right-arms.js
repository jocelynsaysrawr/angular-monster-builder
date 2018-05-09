exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("right_arms")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("right_arms").insert([
        {
          right_arm_name: "Hulk Arm",
          right_arm_src: "./assets/arms/right-hulk-arm.png"
        },
        {
          right_arm_name: "Werewolf Arm",
          right_arm_src: "./assets/arms/right-orange-arm.png"
        },
        {
          right_arm_name: "Floopy Arm",
          right_arm_src: "./assets/arms/right-floopy-arm.png"
        },
        {
          right_arm_name: "Golem Arm",
          right_arm_src: "./assets/arms/right-golem-arm.png"
        },
        {
          right_arm_name: "Tentacle Arm",
          right_arm_src: "./assets/arms/right-tentacle-arm.png"
        }
      ]);
    });
};
