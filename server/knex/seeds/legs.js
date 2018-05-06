exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('legs')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('legs').insert([
        {
          leg_name: 'muscle leg',
          leg_src:
            'https://www.t-nation.com/system/publishing/articles/10004697/original/A-New-Trick-for-Building-Your-Legs.jpg?1491942177'
        },
        {
          leg_name: 'banana leg',
          leg_src:
            'https://www.organicfacts.net/wp-content/uploads/2013/05/Banana3.jpg'
        },
        {
          leg_name: 'penis leg',
          leg_src: 'https://i.rocdn.com/v2/2454507?w=1024&h=1024'
        },
        {
          leg_name: 'hairy leg',
          leg_src:
            'http://www.primandprep.com/wp-content/uploads/2015/04/Mans-Hairy-Legs.jpg'
        },
        {
          leg_name: 'squat leg',
          leg_src:
            'http://diaryofafitmommy.com/wp-content/uploads/2017/04/Pictures16.jpg'
        }
      ]);
    });
};
