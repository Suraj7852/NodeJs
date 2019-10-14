/**
 * 
 * @author   : Suraj Kumar Nag
 * Date      : 13/09/2019
 * Purpose   : List of Numbers from a file and arrange it ascending Order in a Linked List. 
 *             Take user input for a number, if found then pop the number out of the list else insert the number in appropriate position
 * 
 **/
const input = require('readline-sync');
const list = require('../Utility/LinkedList');
const util = require('../Utility/utility');
const fs = require('fs');
fs.readFile('../Files/Number.txt', (err,data) =>{
    if (err) throw err;
    //To hold the data 
    var hold = data.toString().split(",");
    //To copy data in array
    var arr = [];
    for(let i=0;i<hold.length;i++)
    {
        arr[i] = parseInt(hold[i]);
    }
    //For sorting the array
    var sort = util.BubbleSortInt(arr);
    console.log("In array:\n "+sort);

    //Adding Array to LinkedList
    for(let i=0;i<sort.length;i++)
    {
        list.add(sort[i]);
    }
    console.log("In list:\n"+list.printList());

    //To search the element present in an array 
    //If it is present then delete it
    //If not present add it
    var search = input.questionInt("Enter number u want to search: ");
    if(list.indexOf(search) == -1)
        list.add(search);
    else
        list.removeElement(search);
    console.log("Final List:\n "+list.printList());
    //console.log(list.indexOf(search));
    //Sorting the list
    console.log(list.ListSort());
    var op = list.ListSort();
    //Writing the data into another file
    fs.writeFile('../Files/Output.txt',op,(err) =>{
        if(err) throw err;
    })
})

