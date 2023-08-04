module.exports = (app) => {

    app.route('/users')
        .get(app.api.users.get)
        .post(app.api.users.post)
    
    app.route('/users/:id')
        .delete(app.api.users.remove)
        .get(app.api.users.getById)
        .put(app.api.users.put)

}