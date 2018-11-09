module.exports.form_add_noticia = function(app ,req , res){
    res.render("admin/form_add_noticia", {validacao: {} , noticia: {}});
}   

module.exports.salvar = function(app ,req , res){
    var noticia = req.body;
    
    req.assert('titulo', 'Tirulo é Obrogatório').notEmpty();
    req.assert('resumo', 'Resumo é Obrogatório').notEmpty();
    req.assert('resumo', 'Resumo deve conter entre 10 a 100 caracteres').len(10 , 100);
    req.assert('autor', 'Autor é Obrogatório').notEmpty();
    req.assert('data_noticia', 'Data é Obrogatório').notEmpty();
    req.assert('noticia', 'Noticia é Obrogatório').notEmpty();

    var erros = req.validationErrors();

    if(erros){
        console.log(erros);
        res.render("admin/form_add_noticia" , {validacao: erros, noticia: noticia});
        return;

    }  

    
    var connection  = app.config.dbConnection(); 
    var noticiasModel =  new app.app.models.noticiasModel(connection);        
        
    noticiasModel.salvarNoticia(req,noticia , function(err , result){
        
    res.redirect('/noticias');
    });
}
