/**
 * 
 * @author   : Suraj Kumar Nag
 * Date      : 3/09/2019
 * Purpose   : To check if the number is prime or not.
 *              This program shows prime number between 0 to 1000;
 **/
const u = require('../Utility/utility');
for(let i=0;i<=1000;i++)
{
    if(u.isPrime(i)==true)
        console.log(i+" Prime");
    else
        console.log(i+" Not Prime");
}