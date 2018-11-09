var  mysql = require('mysql');

var conMysql =  function(){
    
    return  mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'sua senha',
    database: 'seu DB' 
    });
}

module.exports =  function(){
    return conMysql;
   
}
