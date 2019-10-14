/**
 * 
 * @author   : Suraj Kumar Nag
 * Date      : 4/09/2019
 * Purpose   : This program is to convert decimal number to binary.
 * 
 **/
const input = require('readline-sync');
const util = require('../Utility/utility');
var num = input.questionInt("Enter number to convert in binary: ");

console.log(util.toBinary(num));