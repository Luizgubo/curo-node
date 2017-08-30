module.exports = (app) => {

    app.get('/', (req, res) => {
        
        let connection = app.server.dbConnection();
        let noticiasModel = app.app.models.home_model;

        noticiasModel.getNoticias(connection, (err, result) => res.render('home', {noticia: result}))

    })
}