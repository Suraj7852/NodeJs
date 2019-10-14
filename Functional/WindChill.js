/**
 * 
 * @author   : Suraj Kumar Nag
 * Date      : 3/09/2019
 * Purpose   : 35.75+0.6215t(0.4275t-35.75)*speed^0.16) Use this formula t calculate the wind speed.
 **/
const util = require('../Utility/utility')
const input = require('readline-sync');
var temp = input.questionInt("Enter temperature in fahrenheit(<50): ");
var speed = input.questionInt("Enter WindSpeed(3<=speed>=120): ");
console.log(util.WindChill(Math.abs(temp),speed));

