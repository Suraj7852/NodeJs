/**
 * 
 * @author   : Suraj Kumar Nag
 * Date      : 3/09/2019
 * Purpose   : TO calculate the sum of Nth harmonic number: 1/1 + 1/2 + ... + 1/N.
 **/
const util = require('../Utility/utility')
const input = require('readline-sync');
var num = input.questionInt("Enter number upto which you want the sum as harmonic: ");
var sum = util.HarmonicNumber(num);
var twoplace = sum.toFixed(2);      //toFixed is used to place upto 2 dicimal places
console.log("Harmonic sum is: "+twoplace);
