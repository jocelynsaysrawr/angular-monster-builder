exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users")
        .insert([
          {
            username: "jimkim",
            password: "password"
          },
          {
            username: "jesseleung",
            password: "password"
          },
          {
            username: "markwuu",
            password: "password"
          },
          {
            username: "jocelynbelden",
            password: "password"
          },
          {
            username: "steveninouye",
            password: "password"
          },
          {
            username: "admin",
            password: "password"
          }
        ])
        .then(() => {
          return knex("user_monsters")
            .del()
            .then(function() {
              return knex("user_monsters").insert([
                {
                  user_id: 1,
                  head_id: 2,
                  body_id: 2,
                  left_arm_id: 1,
                  right_arm_id: 1,
                  leg_id: 1
                },
                {
                  user_id: 2,
                  head_id: 1,
                  body_id: 1,
                  left_arm_id: 1,
                  right_arm_id: 1,
                  leg_id: 1
                },
                {
                  user_id: 3,
                  head_id: 2,
                  body_id: 2,
                  left_arm_id: 2,
                  right_arm_id: 2,
                  leg_id: 2
                },
                {
                  user_id: 4,
                  head_id: 3,
                  body_id: 3,
                  left_arm_id: 3,
                  right_arm_id: 3,
                  leg_id: 3
                },
                {
                  user_id: 5,
                  head_id: 1,
                  body_id: 2,
                  left_arm_id: 3,
                  right_arm_id: 3,
                  leg_id: 2
                }
              ]);
            });
        });
    });
};
