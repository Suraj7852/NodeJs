/**
 * 
 * @author   : Suraj Kumar Nag
 * Date      : 3/09/2019
 * Purpose   : To calculate the percentage of head and tails occure randomly.
 *             If random value is <0.5 then it will be heads
 *             If random value is >0.5 then it will be tail
 **/
const u = require('../Utility/utility');
const input = require('readline-sync');
var times = input.questionInt("Enter number of times you want to flip the coin: ");
var all = u.CoinFlip(times)
console.log("Percentage of head: "+all.headper.toFixed(2));
console.log("Percentage of tails: "+all.tailper.toFixed(2));