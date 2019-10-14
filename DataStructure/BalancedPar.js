/**
 * 
 * @author   : Suraj Kumar Nag
 * Date      : 3/09/2019
 * Purpose   : Take an Arithmetic Expression such as 
 *             (5+6)∗(7+8)/(4+3)(5+6)∗(7+8)/(4+3) 
 *              where parentheses are used to order the performance of operations. 
 *              Ensure parentheses must appear in a balanced fashion.
 **/
const stack = require('../Utility/Stack');
const input = require('readline-sync');
var art = input.question("Enter Paranthesis: ");
for(let i=0;i<art.length;i++)
{
    //CharAt is used for single character in the string
    if(art.charAt(i)=='(')
        stack.push(art.charAt(i));
    else if(art.charAt(i)==')')
        stack.pop();
}
//if stack is empty then this is balanced paranthesis
if(stack.isEmpty()==true)
    console.log("Balanced Parenthasis:");
else
    console.log("Not Balanced:");
    //