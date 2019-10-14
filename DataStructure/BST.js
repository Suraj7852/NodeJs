/**
 * 
 * @author   : Suraj Kumar Nag
 * Date      : 12/09/2019
 * Purpose   : Calculating Number of Binary Search Tree.
 * 
 **/
const util = require('../Utility/utility');
const input = require('readline-sync');
let num = input.questionInt("Enter Number of binary search tree: ");

// The calculation for BST is done by the formula which is in utility package
console.log("Count of BST with "+num+" nodes is: "+util.countBST(num))
console.log("Count of binary trees with "+num+" nodes is: "+util.countBt(num));