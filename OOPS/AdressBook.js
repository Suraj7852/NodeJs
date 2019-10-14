const input = require('readline-sync');
const util = require('../Utility/utility');
// HEre we are reading the json file
const AddJson = util.ReadFile('../Files/AddBookOp.json');
//Adding element in Array;

//Making the class for adressBook
class adressBook{
    constructor(firstName,lastName,adress,city,state,zip,Ph_No)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.adress = adress;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.Ph_No = Ph_No;
    }   
}

//All the logic are implemented here
class changes{
    constructor()
    {
        this.size = 0;
        this.addInBook = [];
        this.arrCount = 0;
    }

    // To add the existing file into the array
    ShowExistingContact()
    {
        for(let i=0;i<AddJson.AdressBook.length;i++)
        {
            var firstName = AddJson.AdressBook[i].firstName;
            var lastName = AddJson.AdressBook[i].lastName;
            var adress = AddJson.AdressBook[i].adress;
            var city = AddJson.AdressBook[i].city;
            var state = AddJson.AdressBook[i].state;
            var zip = AddJson.AdressBook[i].zip;
            var Ph_No = AddJson.AdressBook[i].Ph_No;
            // Creating the object of Adressbook
            var jsAdd = new adressBook(firstName,lastName,adress,city,state,zip,Ph_No);
            this.addInBook[this.arrCount++] = jsAdd;
        }
    }
    
    // To add new person details into the adressbook
    AddInAdressBook()
    {
        console.log(`Enter ${this.addInBook.length+1} adress`)
        var firstName = input.question("Enter first name: ");
        var lastName = input.question("Enter Last name: ");
        var adress = input.question("Enter adress : ");
        var city = input.question("Enter city name: ");
        var state = input.question("Enter state name: ");
        var zip = input.questionInt("Enter zip code: ");
        var Ph_No = input.questionInt("Enter phone number: ");
        var newadd = new adressBook(firstName,lastName,adress,city,state,zip,Ph_No);
        this.addInBook[this.arrCount++] = newadd;
        this.size++;
        console.log();
    }
    // To delete the contact
    deleteContact(index)
    {
        this.addInBook = util.removeInArray(this.addInBook,index);
        this.arrCount--;
        this.size--;
    }

    // If we want to edit the contact details
    edit(index)
    {
        console.log("You cant change first name nad lastname:");
        var update = input.questionInt("Enter 0 to change adress\n1 to change city name\n2 to change state\n3 to change zip code\n4 to change ph.No.");
        if(update == 0)
        {
            var up = input.question("Enter adress: ");
            this.addInBook[index].adress = add;
        }
        else if(update == 1)
        {
            var up = input.question("enter city: ");
            this.addInBook[index].city = up;
        }
        else if(update == 2)
        {
            var up = input.question("enter state: ");
            this.addInBook[index].state = up;
        }
        else if(update == 3)
        {
            var up = input.questionInt("enter zip code: ");
            this.addInBook[index].zip = up;
        }
        else if(update == 4)
        {
            var up = input.questionInt("enter ph.No. ");
            var mobNoReg = /^[6-9]\d{9}$/;
            if(mobNoReg.test(up))
            {
                this.addInBook[index].Ph_No = up;
            }
            else
            {
                console.log("Invalid Mobile Number\n");
            }
        }
        else
        {
            console.log("Enter valid input:");
        }
        
    }

    //Sorting by name
    sortByName()
    {
        var temp;
        for(let i=0;i<this.addInBook.length;i++)
        {
            for(let j=i+1;j<this.addInBook.length;j++)
            {
                if(this.addInBook[i].firstName>this.addInBook[j].firstName)
                {
                    temp = this.addInBook[i];
                    this.addInBook[i] = this.addInBook[j];
                    this.addInBook[j] = temp; 
                }
            }
        }
    }

    //Sortng by the ZIp code
    sortByZip()
    {
        var temp;
        for(let i=0;i<this.addInBook.length;i++)
        {
            for(let j=i+1;j<this.addInBook.length;j++)
            {
                if(this.addInBook[i].zip>this.addInBook[j].zip)
                {
                    temp = this.addInBook[i];
                    this.addInBook[i] = this.addInBook[j];
                    this.addInBook[j] = temp; 
                }
            }
        }
    }

    // to print the book adress
    printAddBook()
    {
        console.log("Sl.N0.  firstName   lastName   adress       city         state          zip           ph_No");
        console.log("---------------------------------------------------------------------------------------------");
        for(let i=0;i<this.addInBook.length;i++)
        {
            console.log(`${i}        ${this.addInBook[i].firstName}      ${this.addInBook[i].lastName}       ${this.addInBook[i].adress}     ${this.addInBook[i].city}     ${this.addInBook[i].state}      ${this.addInBook[i].zip}     ${this.addInBook[i].Ph_No}`);
        }
        console.log("---------------------------------------------------------------------------------------------");
    }

    // to print how many details in the phone book
    Printsize()
    {
        this.size;
    }

    // To write into the json file.
    Save()
    {
        var obj = {
            AdressBook: []
        };
        for(let i=0;i<this.addInBook.length;i++)
        {
            obj.AdressBook.push(this.addInBook[i]);
        }
        util.WriteJsonFile('../Files/AddBookOp.json',obj);
    }
 }
var change = new changes();
module.exports = change;
