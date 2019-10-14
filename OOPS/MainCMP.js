const cmp = require('./CMP');
const input = require('readline-sync');

while(true)
{
    var choice = input.questionInt("\n1 =>Search Doctor\n2 => Search Patient\n3 => For Appointnment\n4 => To see Doctor List\n5 => To see Patient List\n6 => To see Appointment List\n7 => Add Patient\n8 => Save Patient\n9 => Save Doctor\n10 => Save Appointment\n11 => Exit\nEnter choice: ");
    switch (choice) {
        case 1:
                cmp.searchDoc();
                break;
        case 2:
                cmp.searchPat();
                break;
        case 3:
                cmp.AppointMent();
                break;
        case 4:
                cmp.PrintDoc();
                break;
        case 5:
                cmp.PrintPat();
                break;
        case 6:
                cmp.PrintApp();
                break;
        case 7:
                cmp.AddPat();
                break;
        case 8:
                cmp.SavePatFile();
                break;
        case 9:
                cmp.SaveDocFile();
                break;
        case 10:
                cmp.SaveAppFile();
                break;
        case 11:
                var ch = input.questionInt("Do you want to save the changes:\n1 => yes\n2 => No\nEnter choice: ")
                if(ch==1)
                {
                        cmp.SaveAppFile();
                        cmp.SaveDocFile();
                        cmp.SavePatFile();
                }
                else if(ch==2)
                        return;
        default:
            console.log("Enter Valid Choice: ");
            break;
    }
}