// Funciones para Button Label --------------------------------------------------------------
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
function selGen(){
    var Generadores = new Array("lorem","place","placek","plasech","ipsum"); 
	tipoGenenerador = document.propiedades.tipoGen.value
	Generador = tipoGenenerador -12;

    if (Generador==0) {
    	document.getElementById("animals").style.display = 'block';
    	document.getElementById("city").style.display = 'block';
    	document.getElementById("people").style.display = 'block';
    	document.getElementById("nature").style.display = 'block';
    	document.getElementById("technics").style.display = 'block';
    	document.getElementById("abstract").style.display = 'block';
		document.getElementById("business").style.display = 'block'; 
		document.getElementById("food").style.display = 'block';
		document.getElementById("nightlife").style.display = 'block';
		document.getElementById("fashion").style.display = 'block';
		document.getElementById("sports").style.display = 'block';
		document.getElementById("transport").style.display = 'block';
    } else if (Generador==1) {
        document.getElementById("animals").style.display = 'block';
    	document.getElementById("city").style.display = 'block';
    	document.getElementById("people").style.display = 'block';
    	document.getElementById("nature").style.display = 'block';
    	document.getElementById("technics").style.display = 'block';
    	document.getElementById("abstract").style.display = 'none';
		document.getElementById("business").style.display = 'none'; 
		document.getElementById("food").style.display = 'none'; 
		document.getElementById("nightlife").style.display = 'none'; 
		document.getElementById("fashion").style.display = 'none'; 
		document.getElementById("sports").style.display = 'none'; 
		document.getElementById("transport").style.display = 'none';
    } else if (Generador==2) {
        document.getElementById("animals").style.display = 'none';
    	document.getElementById("city").style.display = 'none';
    	document.getElementById("people").style.display = 'none';
    	document.getElementById("nature").style.display = 'none';
    	document.getElementById("technics").style.display = 'none';
    	document.getElementById("abstract").style.display = 'none';
		document.getElementById("business").style.display = 'none'; 
		document.getElementById("food").style.display = 'none'; 
		document.getElementById("nightlife").style.display = 'none'; 
		document.getElementById("fashion").style.display = 'none'; 
		document.getElementById("sports").style.display = 'none'; 
		document.getElementById("transport").style.display = 'none';
    } else if (Generador==3) {
    	document.getElementById("animals").style.display = 'none';
    	document.getElementById("city").style.display = 'none';
    	document.getElementById("people").style.display = 'none';
    	document.getElementById("nature").style.display = 'none';
    	document.getElementById("technics").style.display = 'none';
    	document.getElementById("abstract").style.display = 'none';
		document.getElementById("business").style.display = 'none'; 
		document.getElementById("food").style.display = 'none'; 
		document.getElementById("nightlife").style.display = 'none'; 
		document.getElementById("fashion").style.display = 'none'; 
		document.getElementById("sports").style.display = 'none'; 
		document.getElementById("transport").style.display = 'none';

    } else if (Generador==4) {

    }

	var focusGen = Generadores[Generador];
	for (var i = 0; i < 5; i++) {
		var retroGen = Generadores[i];
		document.getElementById(retroGen).style.background='#de5233';
	}	
	document.getElementById(focusGen).style.background='#a9351b'; 
}
// Funciones para Button Label --------------------------------------------------------------

// Funciones para traer imagenes de las API'S -----------------------------------------------
function generar(){
    tipoGenenerador = document.propiedades.tipoGen.value

    var tipos = new Array("abstract","animals","business","city","food","nightlife","fashion","people","nature","sports","technics","transport"); 
	tipo = document.propiedades.tipoImg.value
	alto = document.propiedades.alto.value
	ancho = document.propiedades.ancho.value
	color = document.propiedades.cb.value   
	var tipoImage = tipos[tipo];
    

    if (tipoGenenerador == 12) {
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
		    document.getElementById("url").innerHTML=urlimg;
	    }
    } else if (tipoGenenerador == 13) {
    	http://placeimg.com/640/480/animals/sepia
    		if (color==12) {
    	    var urlimg = "http://placeimg.com/"+alto+"/"+ancho+"/"+tipoImage+"";
	    	imgColor = "Imagen a color";
	    } else {
	    	var urlimg = "http://placeimg.com/"+alto+"/"+ancho+"/"+tipoImage+"/grayscale";
	    	imgColor = "Imagen a escala de grises";
	    }	
	    if (alto > 1920 | ancho > 1920) {
	    	document.getElementById("titulo").innerHTML='Error: tamaño maximo 1920 x 1920';
	    } else {
	    	document.getElementById("imgContenedor").innerHTML='<img onclick="textoIMG()" title="Ver imagen" src="'+urlimg+'" data-large-src="'+urlimg+'">';
		    $("img").h5lightbox();
		    document.getElementById("titulo").innerHTML='Tamaño de imagen: '+alto+' x '+ancho+' | '+imgColor+'';
		    document.getElementById("url").innerHTML=urlimg;
	    }
    } else if (tipoGenenerador == 14) {
    	alert("Vamo a calmarno 14");
    } else if (tipoGenenerador == 15) {
    	alert("Vamo a calmarno 15");
    } else {
    	alert("Vamo a calmarno 16");
    } 
}
// Funciones para traer imagenes de las API'S -----------------------------------------------

// Funciones para Ocultar Menú --------------------------------------------------------------
var clic = 1;
function cerrar(){
	if(clic==1){
	   document.getElementById("genImagenes").style.height = '0px';
	   clic = clic + 1;
	   } else{
	       document.getElementById("genImagenes").style.height = '105px';;      
	    clic = 1;
	}   
}
// Funciones para Ocultar Menú --------------------------------------------------------------