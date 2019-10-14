/**
 * 
 * @author   : Suraj Kumar Nag
 * Date      : 15/09/2019
 * Purpose   : Take a range of 0 ­ 1000 Numbers and find the Prime numbers in that range. 
 *             Store the prime numbers in a 2D Array, 
 *             the first dimension represents the range 0­100,
 *             100­-200, and so on. While the second dimension represents the prime numbers in that range
 * 
 **/
const util = require('../Utility/utility');
var arr = [];

//Creating 2D Array
var arr = util.Matrix(10,26);

// This is done for adding in 1st coloumn
arr[0][0] = "000:100 => ";
arr[1][0] = "100:200 => ";
arr[2][0] = "200:300 => ";
arr[3][0] = "300:400 => ";
arr[4][0] = "400:500 => ";
arr[5][0] = "500:600 => ";
arr[6][0] = "600:700 => ";
arr[7][0] = "700:800 => ";
arr[8][0] = "800:900 => ";
arr[9][0] = "900:1000 => ";
var colIn = 1;
var rowIn = 0;
var range = 100;

//Assigning values to 2D Array
for(let i=2;i<=1000;i++)
{
    if(util.isPrime(i) && i<=range)
    {
        arr[rowIn][colIn] = i;
        colIn++;
    }
    if(i>range)
    {
        range += 100;
        colIn = 1;
        rowIn++;
    }
}

//Printing the value of 2D 
util.MatrixPrint(10,26,arr);