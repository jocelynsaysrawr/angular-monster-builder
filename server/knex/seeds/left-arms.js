exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("left_arms")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("left_arms").insert([
        {
          left_arm_name: "Hulk Arm",
          left_arm_src: "./assets/arms/left-hulk-arm.png"
        },
        {
          left_arm_name: "Werewolf Arm",
          left_arm_src: "./assets/arms/left-orange-arm.png"
        },
        {
          left_arm_name: "Floopy Arm",
          left_arm_src: "./assets/arms/left-floopy-arm.png"
        },
        {
          left_arm_name: "Golem Arm",
          left_arm_src: "./assets/arms/left-golem-arm.png"
        },
        {
          left_arm_name: "Tentacle Arm",
          left_arm_src: "./assets/arms/left-tentacle-arm.png"
        }
      ]);
    });
};
