/**
 * 
 * @author   : Suraj Kumar Nag
 * Date      : 3/09/2019
 * Purpose   : To craete the user defined 2D Matrix.
 **/
const input = require('readline-sync');
var row = input.questionInt("Enter no. of rows you want: ");
var col = input.questionInt("Enter no. of coloumn you want: ");

var arr = new Array(row);
for(let i=0;i<row;i++)
{
    arr[i] = new Array(col);
}

var count=0;
    for(var i=0;i<row;i++)
    {
        for(var j=0;j<col;j++)
        {
            arr[i][j] = count++;
        }
    }
    console.log("Here is your matrix: ");
    for(let i=0;i<row;i++)
    {
        for(let j=0;j<col;j++)
        {
            process.stdout.write(arr[i][j]+"    ");
        }
        console.log("");
    }