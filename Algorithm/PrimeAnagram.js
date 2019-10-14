/**
 * 
 * @author   : Suraj Kumar Nag
 * Date      : 3/09/2019
 * Purpose   : This program prints all the value which is prime number and palindrom.
 *             The prime numbers should be Anagram also.
 **/
const util = require('../Utility/utility');
var arr = [];
var j=0;

for(let i=0;i<=1000;i++)
{
    if(util.isPrime(i)==true&&util.isPalindrom(i)==true)
        arr[j++] = i;
}
console.log(arr)
for(let i=0;i<arr.length;i++)
{
    for(let j=i+1;j<arr.length;j++)
    {
        if(util.isAnagram(arr[i].toString(),arr[j].toString()))
            process.stdout.write(arr[i]+" ");
    }
}
