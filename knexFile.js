module.exports = {
    client: "mysql2",
    connection:  {
        database: "wm",
        user: "root",
        password: "gui140404"
    },
    pool: {
        min: 2,
        max: 10
    },
    migrations: {
        tableName: "knex_migrations"
    }
}