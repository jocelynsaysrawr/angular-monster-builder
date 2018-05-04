exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("heads")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("heads").insert([
        {
          head_name: "Big Head",
          head_src: "https://thumbs.dreamstime.com/b/big-head-34-2530121.jpg",
          head_hp: 7,
          head_attack: 7,
          head_defense: 7
        },
        {
          head_name: "Little Head",
          head_src: "https://i.ytimg.com/vi/rEWe7hQXBv8/maxresdefault.jpg",
          head_hp: 3,
          head_attack: 3,
          head_defense: 2
        },
        {
          head_name: "Wierd Head",
          head_src:
            'https://www.ask"id"eas.com/media/17/Funny-Weird-Head-Mask-Image.jpg',
          head_hp: 9,
          head_attack: 9,
          head_defense: 9
        },
        {
          head_name: "Shaq Head",
          head_src:
            "https://www.celebrity-cutouts.co.uk/wp-content/uploads/2017/02/shaquille-oneal-celebrity-mask.jpg",
          head_hp: 7,
          head_attack: 7,
          head_defense: 7
        }
      ]);
    });
};
