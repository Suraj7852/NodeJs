/**
 * 
 * @author   : Suraj Kumar Nag
 * Date      : 3/09/2019
 * Purpose   : TO find the element present in an array.
 *             Through BinarySearch. This ALgorithm is for both integer and String.
 *             That should be in sorted format. 
 **/
const input = require('readline-sync');
const util = require('../Utility/utility');
var v = [];
var num = input.questionInt("Enter how many input u want: ");
for(let i=0;i<num;i++)
{
    v[i] = input.question("Enter in position "+(i+1)+":");
}
var search = input.question("Enter u want to search: ");
console.log(util.BinarySearch(v,search));
