/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
    $(".flip-container .flip-content").css({
        width: $(".flip-container").find(".left-page").eq(1).width() - 40,
        height: $(".flip-container").find(".left-page").eq(1).height() -40
    });
    
    
    
    $(".flip-container").on("mousemove", function(e){
        console.log(e.pageY - $(".flip-container").find(".right-page").offset().top, '$(".flip-container").find(".right-page").offset().left")');
        
        
        
    });
    
});


function flip(){
    
    
    
    var _width = $(".flip-container").find(".right-page").eq(1).width();
    var _opacity = 0;
    var _opacityVal = 0;
    var _deg = 6;
    
    var findOpacity = function(val){
        
        //console.log(val, "val");
        _opacityVal = 1 - val;
        
        if(_opacityVal > 0.04){
            return 0.02;
        }
        
        console.log(_opacityVal, "_opacityVal");
        return _opacityVal; 
        
    }

    
    $(".flip-container .right-top").animate({
        width: _width
    }, {
        duration: 1500,
        step: function(){
            var _this = this;
            
            _deg = ($(this).width() < 20)? 2  : 0;
                
            $(_this).css({
                transform: 'rotate('+_deg+'deg) translateX(-'+$(".flip-container .right-top").width()+'px)',
            });
            
            _opacity = $(".flip-container .right-top").width()/_width;
            
            
            
            $(".flip-container .right-top .flip-content").css({
                backgroundImage: '-webkit-gradient(linear, 0% 0%, '+ ( _opacity * 100 ) +'% 0%,  color-stop(0.4, rgba(0, 0, 0, 0)), color-stop(0.8, rgba(0, 0, 0, '+findOpacity(_opacity)+')), color-stop(0.9, rgba(0, 0, 0, 0)))'
            });
           
            
            $(".flip-container").find(".right-page").eq(1).css({
                width: (_width - $(".flip-container .right-top").width())
            });
        }
    }
    );
    
    
        
    $(".flip-container .right-top").html($(".flip-container").find(".left-page").eq(0).html());
}