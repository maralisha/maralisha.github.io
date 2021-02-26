/*Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".*/
let str = 'Hello';
let result = '';
let i = str.length;
while(i >= 0){
i--;
  result =result + str.charAt(i);
}
console.log(result);

let result2 = str.split('').reverse().join('');

console.log(result2); 