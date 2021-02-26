/*Напишите функцию, которая принимает два числа. 
Каждую секунду необходимо выводить в консоль, начиная от первого и заканчивая вторым. Используйте setInterval.*/

function timerNum(a, b) {
  let counter = a;
  let intervalId = setInterval(function() {
    console.log(counter);
    if (counter == b) {
      clearInterval(intervalId);
    }
    counter++;
  }, 1000);
}

timerNum(5,15);