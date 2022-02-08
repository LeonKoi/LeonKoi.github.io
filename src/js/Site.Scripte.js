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



/*обо мне*/
$(document).ready(function(){

let options = {thresgold: [0.5]};
  let observer = new IntersectionObserver(onEntry, options);
  let elements = $('.info');
  elements.each((i,el) => {
  	 observer.observe(el);
  });
function onEntry (entry){
	  entry.forEach(change => {
	  	if (change.isIntersecting){
	  		change.target.classList.add('show-anim2');
	  	}
	  });
}


});

/*Статистика 
$('#lines1').animateNumber({ number: 120 });
$('#lines2').animateNumber({ number: 4.600 });
$('#lines3').animateNumber({ number: 340 });
$('#lines4').animateNumber({ number: 23 });
*/

$(document).ready(function(){
let options = {thresgold: [0.5]};
  let observer = new IntersectionObserver(onEntry, options);
  let elements = $('.GGGR');
  elements.each((i,el) => {
  	 observer.observe(el);
  });
function onEntry (entry){
	  entry.forEach(change => {
	  	if (change.isIntersecting){
	  		change.target.classList.add('lines');
	  	}
	  });
}


});


$(document).ready(function(){
if ("typeee"=='opt1') {
console.log("10000");
alert ("Визитка");
price += 1000;
deadlines +=10;
};
if ("typeee"=='opt2') {
console.log("2");
alert ("Корпоративный");
price += 1500;
deadlines +=30;
};
if ('typeee'=='opt3') {
console.log("3");
alert ("Витрина");
price += 2500;
deadlines +=25;
};




});











function explode(){
 $(document).ready(function() {
$("#exampleModal").modal('show');/*модельное окно таймер */
 });
}
setTimeout(explode, 7000);