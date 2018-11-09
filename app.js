/* importa o module server*/
var app = require('./config/server');
// configuração para o heroku
let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port);