////////////////////////////////////////////////////////////
///archivo necesario para levantar el server usando expres///
/// libreria o microframework para tener servidor con js/////
/////////////////////////////////////////////////

//requerimos la libreria express instalada de npm 

var express = require('express');
//hacemos express una funcion
var app = express();

//para pug
app.set('view engine','pug');
//para hacerlo accesile a todos los usuarios como archivo estatico

app.use(express.static('public'));

//envamos y recibimos segun la ruta
app.get('/',function(req, res){
	res.render('index',)
})
//hacemos que escuche por el puerto 3000 y detectamos los errores
//si no hay error puerto escucha
app.listen(3000, function(err){
	if(err) return console.lig('hubo un error'),process.exit(1);
	console.log('platzigram escuchando por el puerto 3000');

   })
