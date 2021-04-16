(function($) { 
    $.noConflict();
   //$("#exo1 > p").css("border", "2px solid red");
    /*function borderRed(selector) {
        selector.css("border", "2px solid red");
    }*/
    $("#button1").click(function(){
        $("#exo1 > p").css("border", "2px solid red");
    });

    // Exo2lass()
    //$("#exo2 p").last().addClass("w3r_font_color");
    $("#exo2 p:last-of-type()").addClass("w3r_font_color");

    // exo 3
    // exemple
    /*function colorer() {
        $(".vert").css("color", "green"); }*/

    /*$('button[onclick="colorer()"]').click(function(){
        $(".vert").css("color", "green");});*/

    //exemple : $("#contenu").wrap("<h1></h1>");
    //$("#contenu span").append( $('i') );
    

    // semantique() => Faire apparaitre le gras, l'italique et le souligné au bons endroits
    $("button:nth-of-type(1)").click(function(){ 
        semantique();
    });

   function semantique(e) {
        $('#contenu .souligne').wrap('<u></u>');
        $('#contenu .gras').wrap('<b></b>');
        $('#contenu .italique').wrap('<i></i>');
    }

    $('#contenu .barre').wrap('<strike></strike>');

        
    function colorer() {
    }

    $("button:nth-of-type(2)").click(function(){
        //$(".red").css("color", "red");
        //$(".vert").css("color", "green");
        //$(".orange").css("color", "orange");
        //$(".bleu").css("color", "blue");
        colorer();
        $('#contenu .rouge').wrap('<span style="color:red"></span>');
        $('#contenu .vert').wrap('<span style="color:green"></span>');
        $('#contenu .orange').wrap('<span style="color:orange"></span>');
        $('#contenu .bleu').wrap('<span style="color:blue"></span>');
    });

    //$("button:nth-of-type(2)").click(colorer());
    function colorer() {
        $('#contenu .rouge').wrap('<span style="color:red"></span>');
        $('#contenu .vert').wrap('<span style="color:green"></span>');
        $('#contenu .orange').wrap('<span style="color:orange"></span>');
        $('#contenu .bleu').wrap('<span style="color:blue"></span>');
    }

    function mettreTitres() {
        if ( $(this).hasClass("titre2") ){
            $(this).prepend( $('h2') );
        }
    }

    $("button:nth-of-type(3)").click(function(){ 
        $("#contenu .titre2").wrap('<h2></h2>');
        mettreTitres();
    });

    function liensEnBoutons() {
    }

    $("button:nth-of-type(4)").click(function(){ 
        $( "#contenu a" ).each(function( index ) {
            $(this).replaceWith( "<button>" + $(this).text() + "</button>" )});
    });

   /* $( "#contenu a" ).each(function( index ) {
        console.log( index + ": " + $( this ).text() );
      });*/

    
    function dupliquerTexte() {
    }

    $("button:nth-of-type(5)").click(function(e){ 
        var contenu = $('#contenu').clone();
        $( "#contenu"). append(contenu);
    });

    function regrouperTitres() {
    }

    $("button:nth-of-type(6)").click(function(){ 
        /*$( "h2" ).each(function( index ) {
            $(this).append( "<div>" + $(this).html() + "</div>" )});*/
        $( "h2" ).wrapAll( "<div class='new' />");
    });

    function regrouperLiens() {
    }

    $("button:nth-of-type(7)").click(function(){ 
        $( "#contenu a" ).wrapAll( "<div class='new' />");
    });

    function viderBoutons() {
    }

    $("button:nth-of-type(8)").click(function(){ 
        $( "#contenu button" ).each( function(){
            $(this).empty().remove();
        });
    });

    function enleverLiens() {
    }

    $("button:nth-of-type(9)").click(function(){ 
        $( "#contenu a" ).each( function(){
            $(this).remove();
        });
    });

    function enleverGras() {
    }
    $("button:nth-of-type(10)").click(function(){ 
        /*$( "#contenu b" ).each( function(){
            $(this).unwrap();
        });*/
        //$("#contenu > span").removeClass("gras");
        //$("#contenu").removeData('b');
        // $('b').unwrap();
        //$('#contenu').find('b').remove();
        $( "#contenu b" ).each(function( index ) {
            $(this).replaceWith( "<span>" + $(this).text() + "</span>" )});
    });

    
        $('#contenu .italique').wrap('<i></i>');

    function enleverItalique() {
    }

    $("button:nth-of-type(11)").click(function(){ 
        $( "#contenu i" ).each(function( index ) {
            $(this).replaceWith( "<span>" + $(this).text() + "</span>" )});
    });

    function enleverDecor() {
    }

    $("button:nth-of-type(12)").click(function(){ 
        $( "#contenu u" ).each(function( index ) {
            $(this).replaceWith( "<span>" + $(this).text() + "</span>" )});

        $( "#contenu a" ).each(function( index ) {
            $(this).css("text-decoration", "none")});

            $( "#contenu strike" ).each(function( index ) {
                $(this).replaceWith( "<span>" + $(this).text() + "</span>" )});
    });
    
    function voirCode() {
    }

    $("button:nth-of-type(13)").click(function(){ 
        var html = $( "#contenu" ).html();
        //$( "#contenu" ).html().show();
        //$( "#contenu" ).html().append();
       console.log($( "#contenu" ).html());
       $("div").html(html);
    });

    // Autre
    $("button").each(function( index ) {
        console.log($(this).text());
        var textboutton = $(this).text();
        switch (textboutton) {
            case 'Faire apparaitre le gras, l\'italique et le souligné au bons endroits'
            :semantique();
            break;

            case 'Colorer le texte' : colorer();
            break;

            /* etc ..*/
        
            default:
                break;
        }

    })

   
        


 
})(jQuery) //fin chargement




