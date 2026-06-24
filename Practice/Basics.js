// Write a function that adds two numbers.
function add(a,b){
    return a+b;
}
console.log(add(5,2));

// Write a function that checks whether a number is even or odd.
function eo(a){
    if (a%2==0)
        console.log('even');
    else
        console.log('odd');

}
eo(4)

// Write a function that returns the larger of two numbers.
function max(a,b){
    return (a>b)?a:b;
}
console.log(max(3,4));

// Write a function that reverses a string.
function rstring(string){
    return string.split('').reverse().join('')


}
console.log(rstring("cat"))

// Convert a normal function that multiplies two numbers into an arrow function.
const mul = (x,y) => x*y;
console.log(mul(4,3));

// Write an arrow function that returns the square of a number.
const sqr = x => x*x;
console.log(sqr(4));

//Write an arrow function that greets a user by name.
function greet(name){
    return "Hello "+name;
}
console.log(greet("Wareesha"));

// Create a function greet(name, callback) that prints the name and then calls the callback

function saybye(n){
    return "byebye "+n;
}

function greets(name,mycallback){
    console.log("hello "+name);
    console.log(mycallback(name));
}
greets('rumi',saybye);

// Create a calculator function that takes two numbers and an operation callback (add, subtract, etc.).
const adds=(a,b)=>a+b;
const subs=(a,b)=>a-b;
const muls=(a,b)=>a*b;

function calc(a,b,callback){
    return callback(a,b);
}
console.log(calc(5,4,muls));

// Create a function that takes an array and a callback and applies the callback to each element.
function Greet(){
    return "hello"
}
function ac(array,callback){
    array.forEach(arr=> console.log(callback()))
}
const myarray=[1,2,3]
ac(myarray,Greet)

let fruits=["mango",'apricot',"appple","banana","orange","strawberry"];
let doubled=fruits.map(fruit=>fruit.toUpperCase());
console.log(doubled);
let a=fruits.filter(fruit=> fruit.at(-1)=='e')
console.log(a);
let b=fruits.filter(fruit=> fruit.length>5)
console.log(b);
let c=fruits.filter(fruit=> fruit.startsWith("a"))
console.log(c);
let fe=fruits.forEach(fruit=>console.log(fruit));
console.log(fe);
let d=fruits.filter(fruit=> fruit.endsWith("e"))
console.log(d);
let e=fruits.map(fruit=>fruit.length)
console.log(e)
let f=fruits.find(fruit=>fruit.length>5)
console.log(f)
console.log(fruits.includes("cherry"))
let g=fruits.some(fruit=>fruit.length>6)
console.log(g)
let i=fruits.sort((a,b)=>a.localeCompare(b))
console.log(i)

let nums=[1,6,2,4,9]
let h=nums.sort((a,b)=>a-b)
console.log(h)
// q12 unsolved
console.log(fruits.reverse())
console.log(fruits.reverse())
console.log(fruits.join(" | "))
let sum = fruits.reduce((total, fruit) => {
    return total + fruit.length;
}, 0);
console.log(sum)