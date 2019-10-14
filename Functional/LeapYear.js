/**
 * 
 * @author   : Suraj Kumar Nag
 * Date      : 3/09/2019
 * Purpose   : To check weather that Year is Leap Year or Not.
 **/
const util = require('../Utility/utility');
const input  = require('readline-sync');
var year = input.questionInt("Enter year to check leapYear: ");
var v = util.LeapYear(year);
if(v==true)
    console.log("Leap Year");
else
    console.log("Not a Leap Year");
