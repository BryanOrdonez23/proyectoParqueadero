const express = require('express');
const app = express();
const path = require('path');

// configuracion
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));

// static files
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req,res)=> {
    res.send("Hola mundo");
});

// listening the Server
app.listen(app.get('port'), () => {
    console.log('INDEX servidor corriendo', app.get('port'));
  });