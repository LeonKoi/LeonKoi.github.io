"use strict"


  $("a[href^="#"]").click (function(){
    let valHref = $(this).attr("href");
    $("html, body").animate({scrollTop: $(valHref).offset().top - 50+"px"});
  
});

$(document).ready(function(){







});