
module.exports =  function(app){

    app.get('/noticias' , function(req ,res){
    app.app.controllers.noticiasController.noticias(app , req , res );

    });


    app.get('/noticia' , function(req ,res){
    app.app.controllers.noticiasController.noticia( app , req , res);
    });   

    app.get('/getnoticias' ,function(req , res){
        app.app.controllers.noticiasController.getnoticias(app , req ,res);
    });
}
