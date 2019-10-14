/**
 * 
 * @author   : Suraj Kumar Nag
 * Date      : 4/09/2019
 * Purpose   : calculates the monthly payments you
 *             would have to make over Y years to pay off a P principal loan amount at R per cent
 *             interest compounded monthly. Using formula
 **/

const input = require('readline-sync');
const util = require('../Utility/utility');

var P = input.questionInt("Enter Amount you get: ");
var Y = input.questionInt("Enter years to pay off: ");
var R = input.questionInt("Enter Rate of intrest: ");
console.log(util.Payment(P,Y,R).toFixed(2));