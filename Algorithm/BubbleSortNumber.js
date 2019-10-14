/**
 * 
 * @author   : Suraj Kumar Nag
 * Date      : 4/09/2019
 * Purpose   : Reads in integers from the file and prints them in sorted order using Bubble Sort
 **/
const input = require('readline-sync');
const util = require('../Utility/utility');
const fs = require('fs');
fs.readFile('../Files/Number.txt',(err,data)=> {
    if(err) throw err;
    var arr = data.toString().split(",");
    var sort = util.BubbleSortInt(arr);
    
    for(let i=0;i<sort.length;i++)
    {
        console.log(arr[i]);
    }
})