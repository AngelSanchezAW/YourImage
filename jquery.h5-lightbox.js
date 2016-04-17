/*!
 * h5-lightbox jQuery plugin
 *
 * @version 1.2.2
 * @author Morgan Estes (@morganestes) http://github.com/morganestes
 * @link http://plugins.jquery.com/h5-lightbox/
 * @uses Lightbox code: http://bit.ly/MzTDLT
 *
 * Copyright (c) 2013-2014 Morgan Estes
 * @license Licensed under the MIT license.
 */
function textoIMG(){
    var tipos = new Array("Abstracto","Animales","Negocios","Ciudad","Comida","Vida Nocturna","Moda","Gente","Naturaleza","Deporte","Tecnologia","Transporte");               
    tipoimagen = "Tipo de imagen: "+tipos[tipo]+"";
}

(function( $ ) {
$.fn.h5lightbox = function( options ) {

    if( !this.length ) {
        return this;
    }

    var opt = $.extend( $.fn.h5lightbox.defaults, options );

    return this.each(function() {

        var $this = $( this ),
            imgLarge = $this.attr( opt.target ),
            /**
             * check if the image has the proper data attribute
             * @param {String} img_large Attribute set in options.
             * @returns {Boolean}
             */
            isLightbox = function( imgLarge ) {
                return ( typeof imgLarge !== "undefined" );
            };

        if ( isLightbox( imgLarge ) ) {
            $this.wrap( "<a class='" + opt.wrapperClass + "' href='" + imgLarge + "'></a>" );
        }

        // lightbox implementation
        $( "a." + opt.wrapperClass ).click(function( e ) {
            e.preventDefault();
            var altoPre = document.propiedades.alto.value
            var anchoPre = document.propiedades.ancho.value 
            var lightbox,
            lbImageHref = $( this ).attr( "href" );

            if ( $( "#lightbox" ).length ) { 
                $( "#lightbox-img" ).html( "<img src='" + lbImageHref + "' /><p style='text-align:center;'>Tamaño de imagen: "+alto+" x "+ancho+" pixeles | "+tipoimagen+" | "+imgColor+"</p>" );
                $( "#lightbox" ).show();
            } else {
                lightbox =
                    "<div id='lightbox'>" +
                        "<p>Click para cerrar imagen</p>" +
                        "<div id='lightbox-img'>" +
                            "<img src='" + lbImageHref + "' />" +
                        "<p style='text-align:center;'>Tamaño de imagen: "+alto+" x "+ancho+" pixeles | "+tipoimagen+" | "+imgColor+"</p></div>" +
                    "</div>";

                $( "body" ).append( lightbox );
            }
        });

        $( document ).on( "click", "#lightbox", function() {
            $( this ).hide();
        });
    });
};

// default options
$.fn.h5lightbox.defaults = {
    target: "data-large-src",
    wrapperClass: "lightbox"
};

})(jQuery);
