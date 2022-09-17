
/*
for(var i=3, set, j=5; i < 100; i++);{
    if( i%3 === 0)
        console.log("Fizz")
    if( j%5 === 0)
        console.log("Buzz")
    if (i%3,j%5 === 0)
    console.log("FizzBuzz")
}
console.log(i)
*/



for(var i = 1; i < 101; i++) {
    if(i % 15 === 0) {
        console.log("FizzBuzz");
    } else if(i % 3 === 0) {
        console.log("Fizz");
    } else if(i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
