
exports.up = function(knex) {
    return knex.schema.createTable("users", (table) => {
        table.increments("id").primary();
        table.string("nome").notNull();
    })
}

exports.down = function(knex) {
    return knex.dropTable("users")
}
