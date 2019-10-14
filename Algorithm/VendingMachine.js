/**
 * 
 * @author   : Suraj Kumar Nag
 * Date      : 4/09/2019
 * Purpose   : To calculate the minimum number
 *             of Notes as well as the Notes to be returned by the Vending Machine as a
 *             Change
 **/
const input = require('readline-sync');
const util = require('../Utility/utility');
var money = input.questionInt("Enter how many money you want: ");

util.VendingMachine(money);