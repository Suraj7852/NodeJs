/**
 * 
 * @author   : Suraj Kumar Nag
 * Date      : 13/09/2019
 * Purpose   : Read the Text from a file, split it into words and arrange it as Linked List.
 *             Take a user input to search a Word in the List. 
 *             If the Word is not found then add it to the list, and if it found then remove the word from the List.
 *             In the end save the list into a file
 * 
 **/
const input = require('readline-sync');
const list = require('../Utility/LinkedList');
const fs = require('fs');

// This is to read data from file
fs.readFile('../Files/Text.txt', (err,data) =>{
    if (err) throw err;

    // To store data into array
    var arr = data.toString().split(",");
    // adding element into list
    for(let i=0;i<arr.length;i++)
    {
        list.add(arr[i]);
    }
    
    // Printing original list
    console.log("Original List: \n"+list.printList());

    //To search the element present in an array 
    //If it is present then delete it
    //If not present add it
    var search = input.question("Enter element to search: ");
    if(list.indexOf(search) == -1)
        list.add(search);
    else
        list.removeElement(search);
    
    console.log("Final:\n "+list.printList());
    var op = list.printList();

    // Writing data to file
    fs.writeFile('../Files/Output.txt',op,(err) =>{
        if (err) throw err;
    })

})


