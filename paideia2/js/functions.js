$(document).ready(function(){
    $( "#up" ).hide();
    $( "#close" ).hide();
    $( "#am" ).hide();
    $( "#sm" ).hide();
    
    $(function(){
        $( "#enfermedades" ).click(function(){
            $( "#top" ).fadeTo( "slow", 0.53 );
            $( "#bottom" ).fadeOut( "slow" );
            $( "#icons" ).fadeOut( "slow" );
            $( "#up" ).delay( 800 ).fadeIn( "slow" );
            $( "#myModal" ).modal("show");
        });
        $( "#hospitales" ).click(function(){
            $( "#top" ).fadeTo( "slow", 0.53 );
            $( "#bottom" ).fadeOut( "slow" );
            $( "#icons" ).fadeOut( "slow" );
            $( "#up" ).delay( 800 ).fadeIn( "slow" );
        });
        $( "#farmacias" ).click(function(){
            $( "#top" ).fadeTo( "slow", 0.53 );
            $( "#bottom" ).fadeOut( "slow" );
            $( "#icons" ).fadeOut( "slow" );
            $( "#up" ).delay( 800 ).fadeIn( "slow" );
        });
        $( "#up" ).click(function(){
            $( "#up" ).fadeOut( "slow" );
            $( "#top" ).fadeTo( "slow", 1 );
            $( "#bottom" ).delay( 800 ).fadeIn( "slow" );
            $( "#icons" ).delay( 800 ).fadeIn( "slow" );
        });
        $( "#sos" ).click(function(){
            if (confirm('Are you sure about this?')) {
                alert("Help is on the way!");
                $( "#am" ).show();
             }
            else{
                alert("Alright, have a nice day!");
                $( "#sm" ).show();
            }
            $( "#top" ).fadeOut( "slow" );
            $( "#bottom" ).fadeOut( "slow" );
            $( "#icons" ).fadeOut( "slow" );
            $( "#close" ).delay( 800 ).fadeIn( "slow" );
        });
        $( "#close" ).click(function(){
            $( "#sm" ).hide();
            $( "#am" ).hide();
            $( "#close" ).fadeOut( "slow" );
            $( "#top" ).fadeTo( "slow", 1 );
            $( "#bottom" ).delay( 800 ).fadeIn( "slow" );
            $( "#icons" ).delay( 800 ).fadeIn( "slow" );
        });
        
    });
    
  });
   