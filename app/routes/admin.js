module.exports = (app) => {

    app.get('/addnoticia', (req, res) => res.render('admin/addnotice'))

    app.post('/noticia/add', (req,res) => {
        let noticia = req.body;
        let connection = app.server.dbConnection();
        let noticiasModel = new app.app.models.NoticiasDAO(connection);

        noticiasModel.addNotice(noticia, (err, result) => res.redirect('/'))
    })
}