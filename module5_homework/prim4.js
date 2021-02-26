/*Записать в переменную случайное целое число в диапазоне [0; 100]. Используйте объект Math.*/
let X = 0;
let Y = 100;
let rand = X + Math.random() * (Y + 1 - X);
console.log(Math.floor(rand))