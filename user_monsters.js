exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_monsters')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('user_monsters').insert([
        {
          user_id: 1,
          head_id: 2,
          body_id: 2,
          arm_id: 1,
          leg_id: 1
        },
        {
          user_id: 2,
          head_id: 1,
          body_id: 1,
          arm_id: 1,
          leg_id: 1
        },
        {
          user_id: 3,
          head_id: 2,
          body_id: 2,
          arm_id: 2,
          leg_id: 2
        },
        {
          user_id: 4,
          head_id: 3,
          body_id: 3,
          arm_id: 3,
          leg_id: 3
        },
        {
          user_id: 5,
          head_id: 1,
          body_id: 2,
          arm_id: 3,
          leg_id: 2
        }
      ]);
    });
};
