module.exports = (app) => {
    
        app.get('/noticia', (req, res) => {

            let connection = app.server.dbConnection();
            let noticiasModel = app.app.models.home_model;
            
            noticiasModel.getNoticia(connection, (err, result) => res.render('noticia', {noticia: result}))
        })
    
    }