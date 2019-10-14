/**
 * 
 * @author   : Suraj Kumar Nag
 * Date      : 3/09/2019
 * Purpose   : To Simulates a gambler who start with $stake and place fair $1 bets until
 *             he/she goes broke (i.e. has no money) or reach $goal and Also Keeps track of the number of
 *             times he/she wins and the number of bets he/she makes.
 **/
const util = require('../Utility/utility');
const input = require('readline-sync');
var stack = input.questionInt("Enter Stack: ");
var Goal = input.questionInt("Set your Goal: ");
var Times = input.questionInt("Enter number of times you want to play: ");
console.log();
var all = util.Gambler(stack,Goal,Times);
console.log("No. of Times win = "+all.win);
console.log("Percentage of total wins: "+all.perWin);
console.log("Percentage of loos: "+all.perLoos);