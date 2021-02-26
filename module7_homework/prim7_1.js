/*Написать, функцию, которая принимает 
в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств.
 Данная функция не должна возвращать значение.*/


const prod = {
  product: 'apple',
  color: 'green',
  weight: 300
}

func(prod);

function func(prod){
  for(let prop in prod){
    if(prod.hasOwnProperty(prop)){
      console.log(prod);
    }
  }
}