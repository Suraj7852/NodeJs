/**
 * 
 * @author   : Suraj Kumar Nag
 * Date      : 15/09/2019
 * Purpose   : A palindrome is a string that reads the same forward and backward, 
 *             for example, radar, toot, and madam. We would like to construct an algorithm to
 *             input a string of characters and check whether it is a palindrome.
 * 
 **/
const deque = require('../Utility/Deque');
const input = require('readline-sync');
var str = input.question("Enter string to check palindrom: ");
for(let i=0;i<str.length;i++)
{
    deque.addRear(str.charAt(i));
}

for(let j=str.length-1;j>=0;j--)
{
    if(deque.front()==str.charAt(j))
        deque.removeFront();
}
if(deque.isEmpty())
    console.log("Palindrom:");
else 
    console.log("Not Palindrom:");
