module.exports.index = function(app , req , res){

    var connection = app.config.dbConnection();
    var noticiasModel = new app.app.models.noticiasModel(connection);

    noticiasModel.get5Ultimasnoticias(function(erro , result){
        //console.log(result);
        res.render('home/index',{noticias : result});
    });
    
}