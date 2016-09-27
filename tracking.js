function menuTracking(option){
     
    var option = option; 
	var menuOptons = ["Cursos","Tutoriales","Tecnologia","Ciencia","Educacion"]; 

	ga('send', 'event', 'Menu', menuOptons[option] );

}
