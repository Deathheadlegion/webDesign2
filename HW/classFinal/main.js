$('form').submit(function(event){ event.preventDefault(); });

var $hamburger = $(".hamburger");
    $hamburger.on("click", function(e) {
        $hamburger.toggleClass("is-active");
        $("#myLinks").slideToggle(400);

    });

    // $( ".donate-button" ).click(function( event ) {
    //     event.preventDefault();
    //     $( "<div>" )
    //       .append( "default " + event.type + " prevented" )
    //       .appendTo( "#log" );
    //   });
var $greeting = $(".donate-button");
      $greeting.on("click", function() {
          $greeting.toggle(".greeting");
          $(".greeting").slideToggle(400);
      });