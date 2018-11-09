function Noticias(connection){
    this._connection = connection;
}
    Noticias.prototype.getnoticias = function(callback){
        this._connection.query('select * from noticias', callback);
}
    Noticias.prototype.getnoticia = function( id_noticia ,callback){
        this._connection.query('select * from noticias where id_noticias = ' + id_noticia.id_noticia, callback);
}
/*
    Noticias.prototype.salvarNoticia= function(noticia  , callback){
        this._connection.query('insert into noticias set ?' , noticia ,callback);
}
*/

Noticias.prototype.salvarNoticia= function(req , noticia  , callback){

   
    var titulo = noticia.titulo;
    var resumo = noticia.resumo;
    var autor =  noticia.autor;
    var data_noticia = noticia.data_noticia;
    var uploadedFile = req.files.img.name; // nome da imagem
    var noticia = noticia.noticia;
    //console.log(req.files.img.name );

    var query = "insert into noticias(titulo,resumo,autor,data_noticia,noticia,imgnoticia)VALUES('"+ 
    titulo + "' ,'" + resumo + "','" + autor + "','" + data_noticia + "','" + noticia + "', '" + uploadedFile + "')";

    this._connection.query(query,callback);
    

}

    Noticias.prototype.get5Ultimasnoticias = function(callback){
        this._connection.query('select * from noticias order by  data_noticia desc limit 5', callback);
    }

    Noticias.prototype.todasNoticias = function(callback){
       this._connection.query('select * from noticias' , callback); 
    }

module.exports =  function(){

    return Noticias;
    
    }