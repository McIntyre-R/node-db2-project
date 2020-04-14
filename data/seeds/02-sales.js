
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('sales').del()
    .then(function () {
      // Inserts seed entries
      return knex('sales').insert([
        {id: 1, carID: 1, price: 22000},
        {id: 2, carID: 1, price: 43000},
        {id: 3, carID: 1, price: 50000}
      ]);
    });
};
