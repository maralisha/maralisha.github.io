/*Написать функцию, которая принимает на входе любое число (но не больше 1 000), определяет, является ли оно простым, 
и выводит простое число или нет. Если введено больше 1 000, то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.*/
let Num = 7;
let znach = getTypeNum(Num);
console.log(znach);

function getTypeNum(num){
  
  if (num > 1000){
      return 'date is incorect';
  } 
  for(let i=2; i<num; i++) {
        if(num % i == 0) {
            return 'composite number'
        }
   }
    return 'prime number';
 }

