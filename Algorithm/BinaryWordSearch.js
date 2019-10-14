/**
 * 
 * @author   : Suraj Kumar Nag
 * Date      : 3/09/2019
 * Purpose   : Read in a list of words from File. Then prompt the user to enter a word to
 *             search the list. The program reports if the search word is found in the list.
 **/
const input = require('readline-sync');
const u = require('../Utility/utility');
const fs = require('fs');
fs.readFile('../Files/Text.txt', (err, data) => { 
    if (err) throw err; 
  
    var arr = data.toString().split(","); 
    console.log(arr.sort());
    var search = input.question("Enter the element you want to search: ");
    u.BinarySearch(arr,search);
}) 