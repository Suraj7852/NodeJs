/**
 * 
 * @author   : Suraj Kumar Nag
 * Date      : 4/09/2019
 * Purpose   : This program is to convert celcius to fahrenheit
 *              and fahrenheit to celcius.
 **/
function CeltoFer(cel)
{
    return ((cel*(9/5)+32));
}
function FertoCel(fer)
{
    return ((fer-32)*(5/9));
}
const input = require('readline-sync');
var cel = input.questionInt("Enter temp in celcius:  ");
var fer = input.questionInt("Enter temp in fahrenheit:  ");
console.log("Temp in celcius: "+CeltoFer(cel).toFixed(2));
console.log("Temp in fehrenheit: "+FertoCel(fer).toFixed(2));