module.exports = (app) => {

    app.get('/', (req, res) => {
        
        let connection = app.server.dbConnection();
        let noticiasModel = new app.app.models.NoticiasDAO(connection);

        noticiasModel.getNoticias((err, result) => res.render('home', {noticia: result}))

    })
}