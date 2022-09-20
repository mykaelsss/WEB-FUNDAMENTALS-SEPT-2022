


function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza = {};
    pizza.crustType = ["deep dish", "hand tossed"];
    pizza.sauceType =["traditional", "marinara"];
    pizza.cheeses = ["mozzarella", "feta", "parmesean"];
    pizza.toppings =  ["pepporoni", "sausage", "mushrooms", "olives", "oinions"];
}

var p1 = pizzaOven("deep dish", "traditional", "mozzarella", ["pepporini", "sausage"]);
console.log(p1);
