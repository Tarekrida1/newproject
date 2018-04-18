$(function(){
    'use strict';

   $(window).load(function() {  
    $(".loader , #loading h2").slideUp(500, function(){
        $("#loading").fadeOut(500);
    });
});
  var typed3 = new Typed('#ppp', {
    strings: ['I have 3 years of professional experience in developing websites based on webstandard technologies like HTML5, CSS, jquery, bootstrap, sass.'],
    typeSpeed: 20,
    backSpeed: 5,
    loop: true
  });
    var  winH = $(window).height(),
      unavh = $('.navbar').height();
    $('.more').height(winH - ( unavh));
    
    
     $("#know-more").click(function () {
        $("html, body").animate({
            scrollTop: $(".more").offset().top
        }, 1000);
          
    });
      $(".more .con button").click(function () {
        $("html, body").animate({
            scrollTop: $(".services").offset().top
        }, 1000);
    });
    
    $("body").niceScroll({
cursorcolor:"#81ee8e",
cursorwidth:"16px"
});
   $(window).scroll(function() { // check if scroll event happened
        if ($(document).scrollTop() > 50) { // check if user scrolled more than 50 from top of the browser window
      
           
             $(".navbar").css({
    background: "linear-gradient(to right,  #81ee8e , #00c9fd)" 
                
});
     
            // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
        } else {
                      $(".navbar").css({
    background: "none" 
});
  
      // if not, change it back to transparent
        }
      });
    
          $("#Templates").click(function () {
        $("html, body").animate({
            scrollTop: $(".bbb").offset().top
        }, 1000);
    });
    $('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});
    
});