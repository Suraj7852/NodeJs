/**
 * 
 * @author   : Suraj Kumar Nag
 * Date      : 3/09/2019
 * Purpose   : To find the roots of the equation ax^2 + bx + c.
 *             Since the equation is x*x, hence there are 2 roots.
 **/
const util = require('../Utility/utility');
const input = require('readline-sync');

console.log("Enter in this format ax^2+bx+c: ")

var a = input.questionInt("Enter value of a: ");
var b = input.questionInt("Enter value of b: ");
var c = input.questionInt("Enter value of c: ");

var all = util.QuadraticEquation(a,b,c);
console.log(all.root1);
console.log(all.root2);