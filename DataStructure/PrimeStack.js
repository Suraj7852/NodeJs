/**
 * 
 * @author   : Suraj Kumar Nag
 * Date      : 15/09/2019
 * Purpose   : Add the Prime Numbers that are Anagram in the Range of 0 ­ 1000 in a Stack 
 *             using the Linked List and Print the Anagrams in the Reverse Order. 
 *             Note no Collection Library can be used.
 * 
 **/
const stack = require('../Utility/StackLink');
const util = require('../Utility/utility');

// To hold the values of prime
var arrPrime = [];
var count = 0;

//Adding values to array
for(let i=0;i<1000;i++)
{
    if(util.isPrime(i))
        arrPrime[count++] = i;
}

//Adding element which is prime and anagram into stack
for(let i=0;i<arrPrime.length;i++)
{
    var flag = 0;
    for(let j=i+1;j<arrPrime.length;j++)
    {
        if(util.isAnagram(arrPrime[i].toString(),arrPrime[j].toString())==true)
            flag++;
    }
    if(flag>0)
        stack.push(arrPrime[i]);
}
// Sorting the stack
var output = stack.StackSort();

//Printing the value of stack.
for(let i=0;i<output.length;i++)
{
    process.stdout.write(output[i]+" ");
}