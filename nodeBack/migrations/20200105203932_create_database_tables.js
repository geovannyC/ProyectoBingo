;
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable( 'cartilla', function( table ) {
    table.increments('idcartilla');
    table.string('numero');
    table.string('codigo').unique();
  })

  .createTable( 'persona', function( table ) {
    table.increments('idpersona');
    table.integer('idcartilla').references('idcartilla').inTable('cartilla');
    table.string('nombre').unique();
  })

  .createTable( 'administrador', function( table ) {
    table.increments('idadministrador');
    table.integer('idpersona').references('idpersona').inTable('persona');
    table.string('clave');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists( 'administrador' )
    .dropTableIfExists( 'persona' )
    .dropTableIfExists( 'cartilla' )
};