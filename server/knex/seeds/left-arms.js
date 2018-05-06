exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("left_arms")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("left_arms").insert([
        {
          left_arm_name: "Hulk Arm",
          left_arm_src:
            "https://previews.123rf.com/images/lineartestpilot/lineartestpilot1404/lineartestpilot140404348/27861342-flexing-monster-arm-cartoon.jpg"
        },
        {
          left_arm_name: "Werewolf Arm",
          left_arm_src:
            "https://thumbs.dreamstime.com/z/halloween-monster-arm-creative-design-55369559.jpg"
        },
        {
          left_arm_name: "Floopy Arm",
          left_arm_src:
            "https://img.clipartxtras.com/46a44eff1e6c0ae5d4db65fc85495e56_vector-of-cartoon-monster-arm-csp19392081-search-clip-art-monster-arms-clip-art_431-470.jpeg"
        },
        {
          left_arm_name: "Golem Arm",
          left_arm_src:
            "http://blog-imgs-31.fc2.com/u/n/i/uniuni0216/20100503173426df9.png"
        },
        {
          left_arm_name: "Tentacle Arm",
          left_arm_src:
            "http://www.livescience.com/images/i/000/055/385/original/octopus-tentacle.jpg"
        }
      ]);
    });
};
