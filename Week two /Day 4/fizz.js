


// for(let i=1; i < 101; i++){
//     if (i % 3 === 0 && i % 5 === 0 ){
//     console.log("FizzBuzz");
//     }else if( i % 3 === 0 ){
//         console.log("Fizz");
//     } else if ( i % 5 === 0){
//         console.log("Buzz");
//     }else{
//         console.log(i);
//     }
// }


// for(let i = 1; i < 20; i++){
//     if( i % 2 === 1 ){
//         console.log(i)
//     }
// }

// for(let i = 100; i > 0; i--){
//     if( i % 3 === 0 ){
//         console.log( i )
//     }
// }


// for(let i = 4; i > -4; i-=1.5){
//         console.log(i)
// }

// let sum = 0
// for(let i = 0; i < 101; i++){
//     sum += i
// }

// console.log(sum);



// let product = 1
// for(let i = 1; i < 13; i++){
//     product *= i
// }

// console.log(product);



// let a = 25;
// a = a - 13;
// console.log(a/2);

// a =  "hello"
// console.log( a + " hello ")



// for(var  i = 0; i < 10; i++){
//     console.log(i);
//     i = i + 3;
// }

// console.log("outside of the loop " + i );


// function getTotal(arrayOfNumbers){
//     var sum = arrayOfNumbers[0];

//     for( var i = 0; i<arrayOfNumbers.length; i++){
//         sum+=arrayOfNumbers[i];
//         console.log("the current sum is: " + sum);
//     }
//     console.log(" the total is " + sum );
// }

// getTotal([1, 3, 5]);


// var isSunny = true;
// var temperature = 45; // let's assume degrees Fahrenheit
// var isRaining = false;
// var whatToBring = "I should bring: ";

// if(isSunny) {
//   whatToBring += "sunglasses, ";
// }
// if(temperature < 50) {
//   whatToBring += "a coat, ";
// }
// if(isRaining) {
//   whatToBring += "an umbrella, ";
// }
// whatToBring += "and a smile!";

// console.log(whatToBring);


// //whatToBring = I should bring sunglasses, a coat , and a smile!



// for(var i=10; i>0; i--) {
//     if(i != 2) {
//       console.log(i);
//     } else {
//       console.log("ignition!");
//     }
//   }

//   console.log("liftoff!");



// var countPositives = 0;
// var numbers = [3, 4, -2, 7, 16, -8, 0];
// for(let i = 0; i < numbers.length; i++){
//     if(numbers[i] > 0){
//     countPositives+=1
//     }
// }

// console.log("there are " + countPositives + " positive values");



// var x = 5;

// function setX(newValue) {
//     x = newValue;
// }

// console.log(x);
// setX(15);
// console.log(x);



// var x = 5;

// function addToX(amount) {
//     return x + amount;
//     console.log("hello there");
// }

// console.log(x);
// var result = addToX(-10);
// console.log(result);
// console.log(x);


// function isPal(arr) {
//     for(var left=0; left<arr.length/2; left++) {
//         var right = arr.length-1-left;
//         if(arr[left] != arr[right]) {
//             return "Not a pal-indrome!";
//         }
//     }
//     return "Pal-indrome!";
// }

// var result1 = isPal( [1, 1, 2, 2, 1] );
// console.log(result1);

// var result2 = isPal( [3, 2, 1, 1, 2, 3] );
// console.log(result2);


// var fruit1 = "apples";
// var fruit2 = "oranges";

// fruit2 = fruit1;

// console.log(fruit2 + " and " + fruit1);



// var fruit1 = "apples";
// var fruit2 = "oranges";

// var temp = fruit1; // temp is a common name for this
// fruit1 = fruit2;
// fruit2 = temp;

// console.log(fruit2 + " and " + fruit1);



// var start = 0;
// var end = 12;

// while(start < end) {
//     console.log("start: " + start + ", end: " + end);
//     start += 2;
//     end -= 2;
// }

// //start = 0
// //end = 12

// function reverse(arr){
//     var return1 = newArray;
//     for( var i = 0; i<reverse.length-1 /2; i--){
//         return1.push("arr[i]");
//     }
// }


// var a = reverse(["a" , "b" , "c" , "d",  "e"])



// console.log(reverse(arr));
