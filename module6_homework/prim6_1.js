let arr = [2, 15, 56, 77, 79, 8, 34, 6, 89, 0];
CountEvenOdd(arr);

function CountEvenOdd(arr){

let countEven = 0;
let countOdd = 0;
let countZero = 0;

  for (let i = 0; i < arr.length; i++) {
    if(typeof arr[i] == 'number'){ if(arr[i] !== 0){
       if (arr[i] % 2 === 0) {
          countEven++;
        } else {
          countOdd++;
        }
      } else { countZero++;}
     }
  }
  
  console.log("Odd : " + countOdd);
  console.log("Even : " + countEven);
  console.log("Zero :" + countZero); 
}