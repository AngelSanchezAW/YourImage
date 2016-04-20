function opSelect(){
    var tipos = new Array("abstract","animals","business","city","food","nightlife","fashion","people","nature","sports","technics","transport"); 
	tipo = document.propiedades.tipoImg.value
	var focus = tipos[tipo];
	for (var i = 0; i < 12; i++) {
		var retro = tipos[i];
		document.getElementById(retro).style.background='#3498db';
	}	
	document.getElementById(focus).style.background='#16527a'; 
}

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

    if (alto > 1920 | ancho > 1920) {
    	document.getElementById("titulo").innerHTML='Error: tamaño maximo 1920 x 1920';
    } else {
    	document.getElementById("imgContenedor").innerHTML='<img onclick="textoIMG()" title="Ver imagen" src="'+urlimg+'" data-large-src="'+urlimg+'">';
	    $("img").h5lightbox();
	    document.getElementById("titulo").innerHTML='Tamaño de imagen: '+alto+' x '+ancho+' | '+imgColor+'';
    }

}