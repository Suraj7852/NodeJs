/**
 * 
 * @author   : Suraj Kumar Nag
 * Date      : 4/09/2019
 * Purpose   : A nibble is a four­bit aggregation, or half an octet. There are two nibbles in a byte.
 *             Given a byte, swap the two nibbles in it. For example 100 is to be represented as
 *             01100100 in a byte (or 8 bits). The two nibbles are (0110) and (0100). If we swap the
 *             two nibbles, we get 01000110 which is 70 in decimal.
 **/
const input = require('readline-sync');
const util = require('../Utility/utility');
var num = input.questionInt("Enter number: ");

console.log(util.BinaryNibble(num));