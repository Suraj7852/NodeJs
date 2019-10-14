/**
 * 
 * @author   : Suraj Kumar Nag
 * Date      : 12/09/2019
 * Purpose   : Banking Cash Counter where people come in to deposit Cash and withdraw Cash.
 *             Using Queue
 * 
 **/
const q = require('../Utility/Queue');
const input = require('readline-sync');
//Adding element into Queue
q.enqueue("Suraj");
q.enqueue("shubham");
q.enqueue("Raju");
q.enqueue("Rahul");
var Add=0;

for(let i=0;i<q.size();i++)
{
    console.log(q.front());
    // wid for taking input wether they want to deposite or to withdraw
    var wid = input.questionInt("Enter 1 to Deposite: 0 to Withdarw: ");
    if(wid==1)
    {
        var sum = input.questionInt("Enter how much money u want to deposite: ");
        Add+=sum;
    }
    else if(wid==0)
    {
        var sub = input.questionInt("Enter how much money u want to withdraw: ");
        if(Add>=sub)
            Add-=sub;
        else
            console.log("There is no enough money visit to next bank: ");
    }
    console.log("Money left in Bank: "+Add);
    q.dequeue();
    console.log();
}