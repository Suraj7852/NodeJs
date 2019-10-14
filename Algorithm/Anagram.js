/**
 * 
 * @author   : Suraj Kumar Nag
 * Date      : 3/09/2019
 * Purpose   : To check wheather two string is anagram or not. 
 *             One string is an anagram of another if the second is simply a
 *             rearrangement of the first.
 *             For example, 'heart' and 'earth' are anagrams...
 **/
const u = require('../Utility/utility')
const input = require('readline-sync');
var str = input.question("Enter String: ");
var str1 = input.question("Enter string to check anagram: ");
var v = u.isAnagram(str,str1);
if(v==true)
    console.log("Anagram");
else
    console.log("Not Anagram");