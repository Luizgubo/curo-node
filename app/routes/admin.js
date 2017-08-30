module.exports = (app) => {

    app.get('/addnoticia', (req, res) => res.render('admin/addnotice.ejs'))

    app.post('/noticia/add', (req,res) => {
        let noticia = req.body;
        let connection = app.server.dbConnection();
        let noticiasModel = app.app.models.home_model;

        noticiasModel.addNotice(noticia, connection, (err, result) => res.render('noticias', {noticia: result}))

       res.redirect('/')
    });
}