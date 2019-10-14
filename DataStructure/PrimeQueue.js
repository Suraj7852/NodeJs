/**
 * 
 * @author   : Suraj Kumar Nag
 * Date      : 15/09/2019
 * Purpose   : Add the Prime Numbers that are Anagram in the Range of 0 ­ 1000 in a Queue
 *             using the Linked List and Print the Anagrams from the Queue. 
 *             Note no Collection Library can be used.
 * 
 **/
const queue = require('../Utility/QueueLink');
const util = require('../Utility/utility');

//This Array is to add prime no.
var arrPrime = [];
var count = 0;
// Adding prime no. in array between 1 to 1000
for(let i=0;i<1000;i++)
{
    if(util.isPrime(i))
        arrPrime[count++] = i;
}

// Adding those value wich is prime and anagram
for(let i=0;i<arrPrime.length;i++)
{
    var flag = 0;
    for(let j=i+1;j<arrPrime.length;j++)
    {
        if(util.isAnagram(arrPrime[i].toString(),arrPrime[j].toString())==true)
            flag++;
    }
    if(flag>0)
        queue.enqueue(arrPrime[i]);
}

// Printing the values
console.log(queue.printQueue());