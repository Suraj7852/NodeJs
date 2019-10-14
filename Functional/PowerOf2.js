/**
 * 
 * @author   : Suraj Kumar Nag
 * Date      : 3/09/2019
 * Purpose   : To print the table of power of 2. like 2^1, 2^2, 2^3...............
 **/
const util = require('../Utility/utility');
const input = require('readline-sync');
console.log("Enter number in between 1 and 31: ");
var pow = input.questionInt("Enter number to print table of the powers of 2: ");
console.log(util.PowOf2(pow));