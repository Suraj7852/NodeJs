/**
 * 
 * @author   : Suraj Kumar Nag
 * Date      : 3/09/2019
 * Purpose   : To find the sum of 3 digit in an array that sums to zero.
 **/
const util = require('../Utility/utility');
const input = require('readline-sync');
var size = input.questionInt("Enter the size of array: ");
var arr = [];
for(let i=0;i<size;i++)
{
    arr[i] = input.questionInt("Enter element in an array: ");
}
util.sumZero(arr,size);