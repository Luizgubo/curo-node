module.exports = (app) => {

    app.get('/', (req, res) => {
        let connection = app.server.dbConnection();
        connection.query('select *from usuarios', (err, result) => {
            res.render('home', {usuario:result});
        })
    })

}