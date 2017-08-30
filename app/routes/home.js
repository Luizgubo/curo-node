module.exports = (app) => {

    app.get('/', (req, res) => {
        let connection = app.server.dbConnection();
        connection.query('select *from noticias', (err, result) => {
            res.render('home', {noticia:result});
        })
    })

}