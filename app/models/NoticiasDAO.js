class NoticiasDAO {
    constructor(connection) {
        this._connection = connection;
    }
    getNoticias(callback) { return this._connection.query('SELECT *from noticias', callback); }
    getNoticia(callback) { return this._connection.query('SELECT *from noticias where id = 2', callback); }
    addNotice(noticia, callback) { return this._connection.query('INSERT INTO noticias set ? ', noticia, callback); }
}

module.exports = () => NoticiasDAO