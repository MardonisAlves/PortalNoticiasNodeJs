

module.exports =  function(app){ 

    app.get('/form_add_noticia' , function(req ,res){
        app.app.controllers.adminController.form_add_noticia(app , req ,res);
    });

    app.post('/salvar' , function(req ,res){

        if(Object.keys(req.files).length == 0) {
            return res.status(400).send('No files were uploaded.');
          }
        
          // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
          let sampleFile = req.files.img;
          var name = req.files.img.name;
        console.log(sampleFile);
          // Use the mv() method to place the file somewhere on your server
          sampleFile.mv('app/public/images/' + name, function(err) {
            if (err)
              return res.status(500).send(err);
        
            //es.send('File uploaded!');

            app.app.controllers.adminController.salvar(app , req ,res);
          });
        
 
        //app.app.controllers.adminController.salvar(app , req ,res);
    });

    

};