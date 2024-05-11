$( document ).ready(function() {
    
    $(".point").hover(function(){
        $(this).toggleClass("dots-blinking")
    });



    // Close Intro window
    $(".close").click(function(){
        $(".intro").toggle()
    });




    /// Cascais

    $(".point_cascais").mouseover(function(){
        $(".container").animate({"background-color":"#d3d3d3"}) //background color
        $(".masked").animate({"background-color":"#000080"}) //map color
        $(".grid").animate({"background-color":"#000080"}) //grid button
        $(".location").animate({"color":"#000080"}) //text color
        $("h1").animate({"color":"#000080"}) //text color
        $(".location_name").html("<h1>Cascais</h1>") //location name
        $(".location_name").css({"font-family": "'Trochut', sans-serif", "font-style":"italic"}) //font
        $(".coordinates").html("<h3>38.6971° N, 9.4223° W</h3>") //coordinates
    });

    $(".point_cascais").click(function(){
        $(".blur").toggle() //blurry background show
        $(".postcards").toggle('slow') // Poster div show
        $('.card > div').not(this).css({"display":"none"}); // Turn all other posters off
        $(".card-cascais").toggle('slow') //Show poster
        $('.point > div').not(this).toggle(); // remove all other dots
        
    });


    

    /// DUMBO

    $(".point_dumbo").hover(function(){
        $(".container").animate({"background-color":"#065457"})
        $(".masked").animate({"background-color":"#faed7a"})
        $(".grid").animate({"background-color":"#faed7a"})
        $(".location").animate({"color":"#faed7a"})
        $(".location_name").animate({"color":"#faed7a"})
        $(".location_name").html("<h1>DUMBO</h1>")
        $(".location_name").css({"font-family": "'prohibition', sans-serif" , "font-style":"normal"})
        $(".coordinates").html("<h3>40.7030° N, 73.9880° W</h3>")
    });

    $(".point_dumbo").click(function(){
        $(".blur").toggle()
        $(".postcards").toggle()
        $('.card > div').not(this).css({"display":"none"});
        $(".card-dumbo").toggle()
        $('.point > div').not(this).toggle();
    });


    /// Venice

    $(".point_venice").hover(function(){
        $(".container").animate({"background-color":"#FF00FF"})
        $(".masked").animate({"background-color":"#ffdb58"})
        $(".grid").animate({"background-color":"#ffdb58"})
        $(".location").animate({"color":"#ffdb58"})
        $(".location_name").animate({"color":"#ffdb58"})
        $(".location_name").html("<h1>Venice</h1>")
        $(".location_name").css({"font-family": "'p22-stickley-pro-caption', serif","font-style":"normal"})
        $(".coordinates").html("<h3>45.4408° N, 12.3155° E</h3>")
    });

    $(".point_venice").click(function(){
        $(".blur").toggle()
        $(".postcards").toggle()
        $('.card > div').not(this).css({"display":"none"});
        $(".card-venice").toggle()
        $('.point > div').not(this).toggle();
    });


    /// Cartagena

    $(".point_cartagena").hover(function(){
        $(".container").animate({"background-color":"#349ee0"})
        $(".masked").animate({"background-color":"#85383e"})
        $(".grid").animate({"background-color":"#85383e"})
        $(".location").animate({"color":"#85383e"})
        $(".location_name").animate({"color":"#85383e"})
        $(".location_name").html("<h1>Cartagena</h1>")
        $(".location_name").css({"font-family": "'sirenne-six-mvb-roman-small', serif","font-style":"normal"})
        $(".coordinates").html("<h3>10.3932° N, 75.4832° W</h3>")
    });

    $(".point_cartagena").click(function(){
        $(".blur").toggle()
        $(".postcards").toggle()
        $('.card > div').not(this).css({"display":"none"});
        $(".card-cartagena").toggle()
        $('.point > div').not(this).toggle();
    });



    /// Thailand

    $(".point_thailand").hover(function(){
        $(".container").animate({"background-color":"#b1cee0"})
        $(".masked").animate({"background-color":"#1f3d36"})
        $(".grid").animate({"background-color":"#1f3d36"})
        $(".location").animate({"color":"#1f3d36"})
        $(".location_name").animate({"color":"#1f3d36"})
        $(".location_name").html("<h1>Koh Yao Noi</h1>")
        $(".location_name").css({"font-family": "'chill-script', sans-serif","font-style":"normal"})
        $(".coordinates").html("<h3>7.9684° N, 98.5831° E</h3>")
    });

    $(".point_thailand").click(function(){
        $(".blur").toggle()
        $(".postcards").toggle()
        $('.card > div').not(this).css({"display":"none"});
        $(".card-thailand").toggle()
        $('.point > div').not(this).toggle();
    });



    /// Asturias

    $(".point_asturias").hover(function(){
        $(".container").animate({"background-color":"#9b69bf"})
        $(".masked").animate({"background-color":"#66a13f"})
        $(".grid").animate({"background-color":"#66a13f"})
        $(".location").animate({"color":"#66a13f"})
        $(".location_name").animate({"color":"#66a13f"})
        $(".location_name").html("<h1>Asturias</h1>")
        $(".location_name").css({"font-family": "'Uncial Antiqua', system-ui","font-style":"normal"})
        $(".coordinates").html("<h3>43.2504° N, 5.9833° W</h3>")
    });

    $(".point_asturias").click(function(){
        $(".blur").toggle()
        $(".postcards").toggle()
        $('.card > div').not(this).css({"display":"none"});
        $(".card-asturias").toggle()
        $('.point > div').not(this).toggle();
    });



    /// Paris

    $(".point_paris").hover(function(){
        $(".container").animate({"background-color":"#d17206"})
        $(".masked").animate({"background-color":"#87bdfa"})
        $(".grid").animate({"background-color":"#87bdfa"})
        $(".location").animate({"color":"#87bdfa"})
        $(".location_name").animate({"color":"#87bdfa"})
        $(".location_name").html("<h1>Eiffel Tower</h1>")
        $(".location_name").css({"font-family": "'adobe-garamond-pro', serif","font-style":"normal"})
        $(".coordinates").html("<h3>48.8584° N, 2.2945° E</h3>")
    });

    $(".point_paris").click(function(){
        $(".blur").toggle()
        $(".postcards").toggle()
        $('.card > div').not(this).css({"display":"none"});
        $(".card-paris").toggle()
        $('.point > div').not(this).toggle();
    });



    /// Pula

    $(".point_pula").hover(function(){
        $(".container").animate({"background-color":"#eda058"})
        $(".masked").animate({"background-color":"#3f484d"})
        $(".grid").animate({"background-color":"#3f484d"})
        $(".location").animate({"color":"#3f484d"})
        $(".location_name").animate({"color":"#3f484d"})
        $(".location_name").html("<h1>Pula</h1>")
        $(".location_name").css({"font-family": "'sinete', sans-serif","font-style":"normal"})
        $(".coordinates").html("<h3>44.8666° N, 13.8496° E</h3>")
    });

    $(".point_pula").click(function(){
        $(".blur").toggle()
        $(".postcards").toggle()
        $('.card > div').not(this).css({"display":"none"});
        $(".card-pula").toggle()
        $('.point > div').not(this).toggle();
    });




    /// Hoch Ybrig

    $(".point_hochYbrig").hover(function(){
        $(".container").animate({"background-color":"#fc0a0a"})
        $(".masked").animate({"background-color":"#d5e5f7"})
        $(".grid").animate({"background-color":"#d5e5f7"})
        $(".location").animate({"color":"#d5e5f7"})
        $(".location_name").animate({"color":"#d5e5f7"})
        $(".location_name").html("<h1>Hoch Y-brig</h1>")
        $(".location_name").css({"font-family": "'garamond-premier-pro', serif","font-style":"italic"})
        $(".coordinates").html("<h3>47.0082° N, 8.7878° E</h3>")
    });

    $(".point_hochYbrig").click(function(){
        $(".blur").toggle()
        $(".postcards").toggle()
        $('.card > div').not(this).css({"display":"none"});
        $(".card-hochYbrig").toggle()
        $('.point > div').not(this).toggle();
    });



    /// Les Gets

    $(".point_lesgets").hover(function(){
        $(".container").animate({"background-color":"#f09f8b"})
        $(".masked").animate({"background-color":"#61748c"})
        $(".grid").animate({"background-color":"#61748c"})
        $(".location").animate({"color":"#61748c"})
        $(".location_name").animate({"color":"#61748c"})
        $(".location_name").html("<h1>Les Gets</h1>")
        $(".location_name").css({"font-family": "'the-seasons', sans-serif","font-style":"normal"})
        $(".coordinates").html("<h3>46.1586° N, 6.6700° E</h3>")
    });

    $(".point_lesgets").click(function(){
        $(".blur").toggle()
        $(".postcards").toggle()
        $('.card > div').not(this).css({"display":"none"});
        $(".card-lesgets").toggle()
        $('.point > div').not(this).toggle()
    });



    /// St Moritz

    $(".point_stmoritz").hover(function(){
        $(".container").animate({"background-color":"#ffffff"})
        $(".masked").animate({"background-color":"#6b94d6"})
        $(".grid").animate({"background-color":"#6b94d6"})
        $(".location").animate({"color":"#6b94d6"})
        $(".location_name").animate({"color":"#6b94d6"})
        $(".location_name").html("<h1>St.Moritz</h1>")
        $(".location_name").css({"font-family": "'rafaella', sans-serif","font-style":"normal"})
        $(".coordinates").html("<h3>46.4906° N, 9.8355° E</h3>")
    });

    $(".point_stmoritz").click(function(){
        $(".blur").toggle()
        $(".postcards").toggle()
        $('.card > div').not(this).css({"display":"none"});
        $(".card-stmoritz").toggle()
        $('.point > div').not(this).toggle();
    });



    /// Golden Gate

    $(".point_goldengate").hover(function(){
        $(".container").animate({"background-color":"#f53722"})
        $(".masked").animate({"background-color":"#eba157"})
        $(".grid").animate({"background-color":"#eba157"})
        $(".location").animate({"color":"#eba157"})
        $(".location_name").animate({"color":"#eba157"})
        $(".location_name").html("<h1>GOLDEN GATE</h1>")
        $(".location_name").css({"font-family": "'Erica One', sans-serif","font-style":"normal"})
        $(".coordinates").html("<h3>37.8199° N, 122.4786° W</h3>")
    });

    $(".point_goldengate").click(function(){
        $(".blur").toggle()
        $(".postcards").toggle()
        $('.card > div').not(this).css({"display":"none"});
        $(".card-goldengate").toggle()
        $('.point > div').not(this).toggle();
    });





    /// Atenas Playa

    $(".point_atenas").hover(function(){
        $(".container").animate({"background-color":"#ba6d02"})
        $(".masked").animate({"background-color":"#5aa375"})
        $(".grid").animate({"background-color":"#5aa375"})
        $(".location").animate({"color":"#5aa375"})
        $(".location_name").animate({"color":"#5aa375"})
        $(".location_name").html("<h1>Atenas</h1>")
        $(".location_name").css({"font-family": "'josefin-sans', sans-serif","font-style":"italic"})
        $(".coordinates").html("<h3>36.3812° N, 6.1973° W</h3>")
    });

    $(".point_atenas").click(function(){
        $(".blur").toggle()
        $(".postcards").toggle()
        $('.card > div').not(this).css({"display":"none"});
        $(".card-atenas").toggle()
        $('.point > div').not(this).toggle();
    });




    /// Tenerife

    $(".point_tenerife").hover(function(){
        $(".container").animate({"background-color":"#1b3154"})
        $(".masked").animate({"background-color":"#ed8258"})
        $(".grid").animate({"background-color":"#ed8258"})
        $(".location").animate({"color":"#ed8258"})
        $(".location_name").animate({"color":"#ed8258"})
        $(".location_name").html("<h1>La Tarta</h1>")
        $(".location_name").css({"font-family": "'poleno', sans-serif","font-style":"normal"})
        $(".coordinates").html("<h3>28.2723° N, 16.6425° W</h3>")
    });

    $(".point_tenerife").click(function(){
        $(".blur").toggle('slow', 'linear')
        $(".postcards").toggle()
        $('.card > div').not(this).css({"display":"none"});
        $(".card-tenerife").toggle()
        $('.point > div').not(this).toggle();
    });



    /// Grid View Posters

    $(".grid").click(function(){
        $(".blur").toggle()
        // $(".card:first-child").toggle()
        $(this).toggleClass("card-rotate")
        $(this).children().slideToggle('slow')
        // $(".postcards").toggleClass(".postcard-grid")
    });


    // flipping cards on grid view & changing color
    $(".cards").click(function(){
        $(this).toggleClass("card-rotate")
        $(this).children().slideToggle('slow')

        let x = Math.floor(Math.random()*255);
        let y = Math.floor(Math.random()*255);
        let z = Math.floor(Math.random()*255);

        let bgColor = "rgb("+x+","+y+","+z+")";
        document.body.style.background = bgColor;


        $(".masked").animate({"background-color":"rgb("+z+","+x+","+y+")"})
        $(".grid").animate({"background-color":"rgb("+z+","+x+","+y+")"})
        
    });


    /// Card toggle poster & image

    $(".card").click(function(){
        $(this).toggleClass("card-rotate")
        $(this).children().slideToggle('slow')
    });


    //// Postcard draggable object
    $(function() {
        $( ".postcards" ).draggable();
     });


    //Resize 
    var aspectRatio; 
    var windowWidth;
    var windowHeight;
    
    $(window).resize(function(){
        windowHeight = $(window).height()
        windowWidth = $(window).width()
        aspectRatio = windowWidth/windowHeight
        console.log(aspectRatio)

        if (aspectRatio > 1.57){
            console.log("change CSS")
            var dotsheight = $(".dots").height()
            $(".dots").css({"width":`${dotsheight*1.57}px`})
        }

        if (aspectRatio < 1.57){
            $(".dots").css({"width":`100vw`})
        }

      });





});