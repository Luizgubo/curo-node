module.exports = (app) => {
    
        app.get('/noticia', (req, res) => {
            let connection = app.server.dbConnection();
            connection.query('select *from noticias where id = 2', (err, result) => {
                res.render('noticia', {noticia:result});
            })
        })
    
    }