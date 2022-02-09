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



/*обо мне Анимация + в ксс show-anim2 доп*/
$(document).ready(function(){

let options = {thresgold: [0.3]};
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


/*Case animation*/
$(document).ready(function(){

let options = {thresgold: [0.9]};
  let observer = new IntersectionObserver(onEntry, options);
  let elements = $('.tope');
  elements.each((i,el) => {
  	 observer.observe(el);
  });
function onEntry (entry){
	  entry.forEach(change => {
	  	if (change.isIntersecting){
	  		change.target.classList.add('show-anim3');
	  		
	  	}
	  });
}
});

$(document).ready(function(){

let options = {thresgold: [0.2]};
  let observer = new IntersectionObserver(onEntry, options);
  let elements = $('.unders');
  elements.each((i,el) => {
  	 observer.observe(el);
  });
function onEntry (entry){
	  entry.forEach(change => {
	  	if (change.isIntersecting){
	  		change.target.classList.add('show-anim4');
	  		
	  	}
	  });
}


});


/*CALC*/
function calculate() {
  let sum = 0;
  let deadlines = 0;
  $('select').each(function() {
    sum += parseInt($(this).val());
  });
  if ($('option[name=s11]:selected')) {
    if ($('#list').val() == "opt1") sum += 0;
    if ($('#list').val() == "opt2") sum += 4000;
    if ($('#list').val() == "opt3") sum += 2400;
    if ($('#list').val() == "opt4") sum += 1200;
   }
if ($('option[name=s22]:selected')) {
    if ($('#list2').val() == "optio1") sum += 0;
    if ($('#list2').val() == "optio2") sum += 4000;
    if ($('#list2').val() == "optio3") sum += 2400;
    if ($('#list2').val() == "optio4") sum += 1200;
}
if ($('option[name=s33]:selected')) {
    if ($('#list3').val() == "option1") sum += 0;
    if ($('#list3').val() == "option2") sum += 4000;
    if ($('#list3').val() == "option3") sum += 2400;
  }
  $('#final_price').html(sum);
}
$('select').change(function() {
  calculate();
});








/*
$(document).ready(function(){
	let deadlines = 0;
let price = 0;
if ("typeee"=='opt1') {
console.log("10000");
alert ("Визитка");
price += 0;
deadlines +=0;
 $(this).addClass("active");
};
if ("typeee"=='opt2') {
console.log("2");
alert ("Корпоративный");
price += 1500;
deadlines +=30;
 $(this).addClass("active");
};
if ('typeee'=='opt3') {
console.log("3");
alert ("Витрина");
price += 2500;
deadlines +=25;
 $(this).addClass("active");
};
if ('typeee'=='opt4') {
console.log("3");
alert ("Вита");
price += 2500;
deadlines +=22;
 $(this).addClass("active");
};



if ("typeee2"=='optio1') {
console.log("10000");
alert ("Визитка");
price += 0;
deadlines +=0;
 $(this).addClass("active");
};
if ("typeee2"=='optio2') {
console.log("2");
alert ("Корпоративный");
price += 1500;
deadlines +=30;
 $(this).addClass("active");
};
if ('typeee2'=='optio3') {
console.log("3");
alert ("Витрина");
price += 4500;
deadlines +=25;
 $(this).addClass("active");
};
if ('typeee2'=='optio4') {
console.log("3");
alert ("Вита");
price += 2100;
deadlines +=22;
 $(this).addClass("active");
};


if ("typeee3"=='option1') {
console.log("10000");
alert ("Визитка");
price += 0;
deadlines +=0;
 $(this).addClass("active");
};
if ("typeee3"=='option2') {
console.log("2");
alert ("Корпоративный");
price += 3500;
deadlines +=30;
 $(this).addClass("active");
};
if ('typeee3'=='option3') {
console.log("3");
alert ("Витрина");
price += 2500;
deadlines +=25;
 $(this).addClass("active");
};
console.log(price);


$(function(){
	$('.dayss').html( deadlines);
$('.stoi').html( price);

});



});
*/




/*Статистика*/ 

	$(function() {
		var target_block = $('#liness1'); // Ищем блок 
		var blockStatus = true;
		$(window).scroll(function() {
			var scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));
			if(scrollEvent && blockStatus) {
				blockStatus = false; // Запрещаем повторное выполнение функции до следующей перезагрузки страницы.
				$({numberValue: 0}).animate({numberValue: 120}, {
					duration: 3500, // Продолжительность анимации, миллисекунд 
					step: function(val) {
						$('#liness1').html(Math.ceil(val)); // Блок, где необходимо сделать анимацию	
					}	
				});	
			}	
		});	
	});

$(function() {
		var target_block = $('#liness2'); // Ищем блок 
		var blockStatus = true;
		$(window).scroll(function() {
			var scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));
			if(scrollEvent && blockStatus) {
				blockStatus = false; // Запрещаем повторное выполнение функции до следующей перезагрузки страницы.
				$({numberValue: 0}).animate({numberValue: 4.600}, {
					duration: 3500, // Продолжительность анимации, миллисекунд 
					step: function(val) {
						$('#liness2').html(Math.ceil(val)); // Блок, где необходимо сделать анимацию	
					}	
				});	
			}	
		});	
	});
$(function() {
		var target_block = $('#liness3'); // Ищем блок 
		var blockStatus = true;
		$(window).scroll(function() {
			var scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));
			if(scrollEvent && blockStatus) {
				blockStatus = false; // Запрещаем повторное выполнение функции до следующей перезагрузки страницы.
				$({numberValue: 0}).animate({numberValue: 340}, {
					duration: 3500, // Продолжительность анимации, миллисекунд 
					step: function(val) {
						$('#liness3').html(Math.ceil(val)); // Блок, где необходимо сделать анимацию	
					}	
				});	
			}	
		});	
	});
$(function() {
		var target_block = $('#liness4'); // Ищем блок 
		var blockStatus = true;
		$(window).scroll(function() {
			var scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));
			if(scrollEvent && blockStatus) {
				blockStatus = false; // Запрещаем повторное выполнение функции до следующей перезагрузки страницы.
				$({numberValue: 0}).animate({numberValue: 23}, {
					duration: 3500, // Продолжительность анимации, миллисекунд 
					step: function(val) {
						$('#liness4').html(Math.ceil(val)); // Блок, где необходимо сделать анимацию	
					}	
				});	
			}	
		});	
	});








function explode(){
 $(document).ready(function() {
$("#exampleModal").modal('show');/*модельное окно таймер */
 });
}
setTimeout(explode, 7000);