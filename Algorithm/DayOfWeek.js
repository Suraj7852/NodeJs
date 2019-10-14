/**
 * 
 * @author   : Suraj Kumar Nag
 * Date      : 4/09/2019
 * Purpose   : This program is to find the day if you want to find the day of that date.
 *             It simply takes three input Day Month and Year
 **/
const input = require('readline-sync');
const util = require('../Utility/utility');

var Day = input.questionInt("Enter Day: ");
var Month = input.questionInt("Enter Month: ");
var Year = input.questionInt("Enter year: ");
var all = util.DayOfWeek(Day,Month,Year);
console.log("Today is: "+all.dayStr);