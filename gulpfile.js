//////////////////////////////////////////////
///archivo necesario para manipular gulp/////
/////////////////////////////////////////////


var gulp = require('gulp');
var sass = require('gulp-sass');
//para renombrar el css que se guarda como index
var rename= require ('gulp-rename');

////definimos tareas 
///gulp como primer parametro recibe nombre
gulp.task ('style', function(){

	gulp
		//ruta index del sass
		.src('index.scss')
		//pipes como un canal decosas
		.pipe(sass())
		//para rename
		.pipe(rename('app.css'))
		//segunda cosa 
		//despues de procesar envialo a public
		.pipe(gulp.dest('public'));
} )

///para generar archivos desde assets
///y crearlos en public automaticamente

gulp.task('assets', function(){
	gulp
		.src('assets/*')
		.pipe(gulp.dest('public'))
})

gulp.task('default',['style', 'assets'])