module.exports = (app) => {
    
        app.get('/noticia', (req, res) => {

            let connection = app.server.dbConnection();
            let noticiasModel = new app.app.models.NoticiasDAO(connection);
            
            noticiasModel.getNoticia((err, result) => res.render('noticia', {noticia: result}))
        })
    
    }