$(document).ready(function(){
    $("#openMenu").click(function(){
         $("#main").fadeIn(200);
         $("#openMenu").animate({left:"-10%"});
         $("#closeMenu").animate({left:"93%"});
         $(".menu").animate({left:"-1%"},10);
       });
    
    $("#closeMenu").click(function(){
         $("#main").fadeOut(200);
         $("#openMenu").animate({left:"2.7%"});
         $("#closeMenu").animate({left:"105%"});
         $(".menu").animate({left:"-50%"},10);
       });
    
});