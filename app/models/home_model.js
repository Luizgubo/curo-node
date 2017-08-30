module.exports = () => {
    
    this.getNoticias = (connection, callback) => connection.query('SELECT *from noticias', callback)

    this.getNoticia = (connection, callback) => connection.query('SELECT *from noticias where id = 2', callback)

    return this
}