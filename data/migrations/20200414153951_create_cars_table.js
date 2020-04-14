
exports.up = function(knex, Promise) {
    return knex.schema.createTable('Cars', tbl => {
      tbl.increments();
      tbl.string('VIN', 17).notNullable().unique();
      tbl.string('make').notNullable();
      tbl.string('model').notNullable();
      tbl.string('Transmission Type');
      tbl.string('Title Status');
      tbl.integer('mileage').notNullable();
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('Cars');
  };
  