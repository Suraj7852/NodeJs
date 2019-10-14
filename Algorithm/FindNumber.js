/**
 * 
 * @author   : Suraj Kumar Nag
 * Date      : 3/09/2019
 * Purpose   : TO find the number you think. You have to think a number
 * 				after that simply u have to answer 2 answer and it will give the number you think.
 **/
const input = require('readline-sync');
var num = input.questionInt("Enter the Range: ");
var range = Math.pow(2, num);
console.log("Think number in range 0 to "+range);
var mid=0,lo=0,hi=range;
while(lo<=hi)
{
	mid = parseInt((lo+hi)/2);
	console.log("Is this your number: "+mid);
	var inp = input.questionInt("Enter true:1 or false:0 ");
	if(inp==1)
	{
		console.log("Your number is "+mid);
		return;
	}
	else
	{
		var v = input.question("Enter L:less G:greater: ")
		if(v=='L')
			hi=mid-1;
		else
			lo=mid+1;
	}
			
}