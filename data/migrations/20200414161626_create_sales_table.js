exports.up = function(knex, Promise) {
    return knex.schema.createTable('sales', tbl => {
      tbl.increments();
      tbl.integer('CarID', 17).notNullable().references('id').inTable('Cars')
      tbl.integer('Price').notNullable()
    
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('sales');
  };
  