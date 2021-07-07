
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {id: 1, vin: 'asdasd', make: 'honda', model: 'civic', mileage: 2000, "Transmission Type": 'Auto', "Title Status": 'clean'},
        {id: 2, vin: 'qweqwr', make: 'toyota', model: 'camry', mileage: 0, "Transmission Type": 'Manual', "Title Status": 'salvage'},
        {id: 3, vin: 'zxcgde', make: 'ford', model: 'explorer', mileage: 5000, "Transmission Type": 'Manual', "Title Status": 'clean'}   
      ]);
    });
};
