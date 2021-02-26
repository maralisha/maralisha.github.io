/*Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. 
Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.*/
const arr = [2, 7, 8, 9, 9];
let result = true;
for(let i = 0; i < arr.length-1; i++){
      for(let j=i+1; j<arr.length; j++){
        if(arr[i] == arr[j]){
          result = false;
          break;}
      }  
}
console.log(result)