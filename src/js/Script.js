"use strict"
alert ("привет");

let deadlines = 0;
let price = 0;


let typee = prompt( "Выберите цифру типа сайта: Визитка-1 , Корпоративный-2 , Витрина-3"); 
console.log (typee);
if (typee==1) {
console.log("1");
alert ("Визитка");
price += 1000;
deadlines +=10;
typee="_Визитка_";
};
if (typee==2) {
console.log("2");
alert ("Корпоративный");
price += 1500;
deadlines +=30;
typee="_Корпоративный_";
};
if (typee==3) {
console.log("3");
alert ("Витрина");
price += 2500;
deadlines +=25;
typee="_Витрина_";
};
if (typee>3){
	alert ("Такого сайта нет")
};


alert ("еще немного");

let disain = prompt( "Выберите Дизайн: Классика-1 , Ретро-2 , Рисованный-3");
if (disain==1) {
console.log("1");
alert ("Классика");
price += 1000;
deadlines +=5;
disain="_Классика_";
};
if (disain==2) {
console.log("2");
alert ("Ретро");
price += 1500;
deadlines +=10;
disain="_Ретро_";
};
if (disain==3) {
console.log("3");
alert ("Рисованный");
price += 2000;
deadlines +=25;
disain="_Рисованный_";
};
if (disain>3){
	alert ("Такого дизайна нет")
};


let adartive = prompt( "Выберите адаптивность: Без адаптивности-1 , Под телефон-2 , Персонально-3");
if (adartive==1) {
console.log("1");
alert ("Без адаптивности");
price += 0;
deadlines +=0;
adartive="_Без адаптивности";
};
if (adartive==2) {
console.log("2");
alert ("Под телефон");
price += 2000;
deadlines +=5;
adartive="_Под телефон";
};
if (adartive==3) {
console.log("3");
alert ("Персонально");
price += 4000;
deadlines +=30;
adartive="_Персонально";
};
if (adartive>3){
	alert ("Такого дизайна нет")
};

alert("Вы выбрали:" +typee+ disain +adartive);
alert('Цена:' +price+ ',сроки~' +deadlines+ 'дней');


console.log(price);