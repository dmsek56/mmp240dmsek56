/* JavaScript Document */

$(document).ready(function(){
//    alert('success');
    $('nav a.mobile_menu').on('click', function(){
        
        var currentNavHeight = $('nav').height();
        //toggle navigation
        if(currentNavHeight < 5){
            var newNavHeight = $('nav > ul').height()+85;
            $('nav').animate({'height':newNavHeight+'px'}, 750);
            console.log('smaller');
        }else{
            $('nav').animate({'height':'0px'}, 750, function(){
                $(this).removeAttr('style');
            });
        }
    });
    
    $(window).resize(function(){
        if( $(this).width()>625){
            $('nav').removeAttr('style');
        }
    });
});



