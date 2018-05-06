exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('bodys')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('bodys').insert([
        {
          body_name: 'Bad King Body',
          body_src: './assets/body/badKing.png'
        },
        {
          body_name: 'Donut Body',
          body_src: './assets/body/Donut.png'
        },
        {
          body_name: 'Manekin Body',
          body_src:
            'https://img1.cgtrader.com/items/665920/37db346fa5/male-torso-3d-model-obj-ztl.jpg'
        },
        {
          body_name: 'Hot Body',
          body_src:
            'http://cdn.shopify.com/s/files/1/0925/7956/products/IMG_3719__1_LATEX_2026_983aa4b7-3cd6-41cc-ac65-a9e857a893bd_grande.jpg?v=1517117260'
        },
        {
          body_name: 'Muscle Body',
          body_src:
            'https://images.fineartamerica.com/images-medium-large/1-male-torso-phil-jude.jpg'
        }
      ]);
    });
};
