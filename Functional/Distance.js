/**
 * 
 * @author   : Suraj Kumar Nag
 * Date      : 3/09/2019
 * Purpose   : To calculate the distance from origin(0,0).
 **/
const u = require('../Utility/utility');
const input = require('readline-sync');
var x = input.questionInt("Enter x distance from origin: ");
var y = input.questionInt("Enter y distance from origin: ");
console.log(u.distance(x,y));