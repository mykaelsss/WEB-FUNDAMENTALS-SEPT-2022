


var fruit1 = "apples";
var fruit2 = "oranges";

fruit2 = fruit1;

console.log(fruit2 + " and " + fruit1);








var fruit1 = "apples";
var fruit2 = "oranges";

var temp = fruit1; // temp is a common name for this
fruit1 = fruit2;
fruit2 = temp;

console.log(fruit2 + " and " + fruit1);

/*fruit1 = apples, fruit1 =fruit2 or oranges
fruit2 = oranges, temp or apples
temp= fruit1
console.log() apples and oranges
*/




var start = 0;
var end = 12;

while(start < end) {
    console.log("start: " + start + ", end: " + end);
    start += 2;
    end -= 2;
}

/* start =0
    end= 12
*/



var array=["a", "b", "c", "d", "e"];
function reverse(arr);{
    for(let i=0; i <arr.length; i++){
        arr[i] = (arr.length - 1)
    }
    
}
