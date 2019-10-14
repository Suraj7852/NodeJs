/**
 * 
 * @author   : Suraj Kumar Nag
 * Date      : 3/09/2019
 * Purpose   : To replace yor name in place of <<username>> "Hello <<usernme>>, How are you?
 **/
const input = require('readline-sync');
const util = require('../Utility/utility');
let name = input.question("Enter your name: ");
//If name length is greater than 3 then only its valid
console.log(util.Username(name));