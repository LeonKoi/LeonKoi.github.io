"use strict"


  $("a[href^='#']").click (function(){
    let valHref = $(this).attr("href");
    $("html, body").animate({scrollTop: $(valHref).offset().top - 50+"px"});     /*якорные ссылки */
  
});

$(document).ready(function(){

let options = {thresgold: [0.5]};
  let observer = new IntersectionObserver(onEntry, options);
  let elements = $('.title__container');
  elements.each((i,el) => {
  	 observer.observe(el);
  });
function onEntry (entry){
	  entry.forEach(change => {
	  	if (change.isIntersecting){
	  		change.target.classList.add('show-anim');
	  	}
	  });
}


});

$(document).ready(function() {
  $('.image-link').magnificPopup({type:'image'}); /*Модальное окно */
});