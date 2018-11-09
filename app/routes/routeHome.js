/*urls para rotas*/
module.exports = function(app){

app.get('/' , function(req ,res){
    app.app.controllers.indexController.index( app , req , res);
});

}