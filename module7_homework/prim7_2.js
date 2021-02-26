/*Написать функцию, которая принимает в качестве аргументов строку и объект,
 а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.*/
const prod = {
  product: 'apple',
  color: 'green',
  weight: 300
}


let str = "product";

console.log(func(str, prod));

function func(str, obj) {
    for (let key in obj) {
        if (key === str) {
            return true;
        } else return false;
    }
}