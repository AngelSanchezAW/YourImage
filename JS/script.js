function generar(){

    var tipos = new Array("abstract","animals","business","city","food","nightlife","fashion","people","nature","sports","technics","transport");
    
	tipo = document.propiedades.tipoImg.value
	alto = document.propiedades.alto.value
	ancho = document.propiedades.ancho.value
	imgColor = "Imagen a color";

	var tipoImage = tipos[tipo];
	var urlimg = "http://lorempixel.com/"+alto+"/"+ancho+"/"+tipoImage+"/";

	document.getElementById("imgContenedor").innerHTML='<img onclick="textoIMG()" title="Ver imagen" src="'+urlimg+'" data-large-src="'+urlimg+'">';
	$("img").h5lightbox();
	document.getElementById("titulo").innerHTML='Tamaño de imagen: '+alto+' x '+ancho+' | '+imgColor+'';
}

function generarg(){

    var tipos = new Array("abstract","animals","business","city","food","nightlife","fashion","people","nature","sports","technics","transport");

	tipo = document.propiedades.tipoImg.value
	alto = document.propiedades.alto.value
	ancho = document.propiedades.ancho.value
	imgColor = "Imagen a escala de grises";

	var tipoImage = tipos[tipo];

	var urlimg = "http://lorempixel.com/g/"+alto+"/"+ancho+"/"+tipoImage+"/";
	document.getElementById("imgContenedor").innerHTML='<img onclick="textoIMG()" title="Ver imagen" src="'+urlimg+'" data-large-src="'+urlimg+'">';
	$("img").h5lightbox();
	document.getElementById("titulo").innerHTML='Tamaño de imagen: '+alto+' x '+ancho+' | '+imgColor+'';
}