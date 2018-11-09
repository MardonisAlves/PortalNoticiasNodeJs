module.exports.noticias = function(app , req ,res){

    var connection  = app.config.dbConnection(); 
    var noticiasModel =  new app.app.models.noticiasModel(connection);

    noticiasModel.getnoticias(function(err , result){
    res.render("noticias/noticias" ,{noticias :  result});
        });
}

module.exports.noticia = function(app , req  ,res){
 var connection  = app.config.dbConnection(); 
        var noticiasModel =  new app.app.models.noticiasModel(connection);

        var id_noticia = req.query; // id_noticia é um parametro get

        noticiasModel.getnoticia(id_noticia , function(err , result){
        res.render("noticias/noticia" ,{noticia:  result});
        });
        
}

module.exports.getnoticias = function(app  , req , res){
var connection = app.config.dbConnection();
var noticiasModel = new app.app.models.noticiasModel(connection);
noticiasModel.getnoticias(function(err , result){
    console.log('oi');
    res.render("noticias/noticias" ,{noticias: result});
});
}
