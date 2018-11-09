var  mysql = require('mysql');

var conMysql =  function(){
    
    return  mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'jk8yup02@',
    database: 'portal_noticias' 
    });
}

module.exports =  function(){
    return conMysql;
   
}