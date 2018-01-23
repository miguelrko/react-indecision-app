import {square, add } from './utils.js';
import isSenior, {isAdult, canDrink } from './person.js';
//para los default:
//import defaultnamethatyouwant, {square, add} from './utils.js';

console.log('webpack configuration test');

console.log(square(5));
console.log(add(50, 50));

//Challenge: create person.js
//named export isAdult(18) - true if adult, otherwise false
//named export canDrink(18) - true if 21 and over, otherwise false
//import isAdult and canDrin
//use both printing result to the console
console.log('I am an adult ', isAdult(19));
console.log('Can i drink? ', canDrink(19));
console.log('Am i too old? ', isSenior(61));