function generar(){
    var tipos = new Array("abstract","animals","business","city","food","nightlife","fashion","people","nature","sports","technics","transport"); 
	tipo = document.propiedades.tipoImg.value
	alto = document.propiedades.alto.value
	ancho = document.propiedades.ancho.value
	color = document.propiedades.cb.value   
	var tipoImage = tipos[tipo];
    if (color==12) {
    	var urlimg = "http://lorempixel.com/"+alto+"/"+ancho+"/"+tipoImage+"/";
    	imgColor = "Imagen a color";
    } else {
    	var urlimg = "http://lorempixel.com/g/"+alto+"/"+ancho+"/"+tipoImage+"/";
    	imgColor = "Imagen a escala de grises";
    }	
	document.getElementById("imgContenedor").innerHTML='<img onclick="textoIMG()" title="Ver imagen" src="'+urlimg+'" data-large-src="'+urlimg+'">';
	$("img").h5lightbox();
	document.getElementById("titulo").innerHTML='Tamaño de imagen: '+alto+' x '+ancho+' | '+imgColor+'';
}