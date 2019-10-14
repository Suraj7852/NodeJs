const book = require('./AdressBook');
const input = require('readline-sync');
book.ShowExistingContact();

while(true)
{
    var choice = input.questionInt(`Enter\n1 => Add in Contact:\n2 => Edit:\n3 => Delete\n4 => Display\n5 => Sort by Name\n6 => Sort by Zip\n7 => save\n8 => Exit\nEnter Choice: `);
    switch (choice) {
        case 1:
                book.AddInAdressBook();
                break;
        case 2:
                var inp = input.questionInt("Enter sl.No you want to edit: ");
                book.edit(inp);
                break;
        case 3:
                var inp = input.questionInt("Enter sl.No you delete: ");
                book.deleteContact(inp);
                break;
        case 4:
                book.printAddBook();
                break;
        case 5:
                book.sortByName();
                book.printAddBook();
                break;
        case 6:
                book.sortByZip();
                book.printAddBook();
                break;
        case 7:
                book.Save();
                break;
        case 8:
                return;
        default:
                console.log("You made some mistake: ");
            break;
    }
}