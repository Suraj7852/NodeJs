/**
 * 
 * @author   : Suraj Kumar Nag
 * Date      : 13/09/2019
 * Purpose   : the Prime Number Program and store only the numbers in that range that are Anagrams. 
 *             For e.g. 17 and 71 are both Prime and Anagrams in the 0 to 1000 range.
 *             Further store in a 2D Array the numbers that are Anagram and numbers that are not Anagram
 * 
 **/
const util = require('../Utility/utility');

// Creating 2D Array for Anagram
var arrAna2D = util.Matrix(8,9);

// Creating 2D Array for NonAnagram
var arrNonAna2D = util.Matrix(10,11);

//For storing prime number
var arrPrime = [];
//For storing anagram and prime
var arrAna = [];
//For storing nonAnagram and prime
var arrNonAna = [];

var count = 0,countNonAna = 0,countAna = 0;
for(let i=0;i<1000;i++)
{
    if(util.isPrime(i)==true)
        arrPrime[count++] = i;
}
//console.log(arrPrime);


for(let i=0;i<arrPrime.length;i++)
{
    var flag = 0;
    for(let j=i+1;j<arrPrime.length;j++)
    {
        if(util.isAnagram(arrPrime[i].toString(),arrPrime[j].toString())==true)
            flag++;
    }
    if(flag>0)
        arrAna[countAna++] = arrPrime[i];
    else
        arrNonAna[countNonAna++] = arrPrime[i];
}
// 2D Array for Anagram
console.log("--------------For Anagram----------------------");

countAna = 0;
for(let i=0;i<8;i++)
{
    for(let j=0;j<9;j++)
    {
        arrAna2D[i][j] = arrAna[countAna++];
    }
}

//Displaying 2D Array
util.MatrixPrint(8,9,arrAna2D);
console.log();

// 2D Array for NonAnagram
console.log("----------------For Non Anagram------------");

countNonAna = 0;
for(let i=0;i<10;i++)
{
    for(let j=0;j<11;j++)
    {
        arrNonAna2D[i][j] = arrNonAna[countNonAna++];
    }
}

//Displaying 2D array
util.MatrixPrint(10,11,arrNonAna2D);
