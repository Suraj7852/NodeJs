/**
 * 
 * @author   : Suraj Kumar Nag
 * Date      : 12/09/2019
 * Purpose   : Displaying calender if user gives Month and year
 * 
 **/
const input = require('readline-sync');
const util = require('../Utility/utility');
var M = input.questionInt("Enter Month: ");
var Y = input.questionInt("Enter Year: ");
var day = ["Su","Mo","Tu","We","Th","Fr","Sa"];
var Month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// This variable Day is to store the day value of 1st day.
var Day = util.DayOfWeek(1,M,Y);


console.log("% Java Calender "+Month[M-1]+" "+Y);
console.log(" @ "+Month[M-1]+" "+Y);
console.log();
var LastDay=0,Move=0;
for(let i=0;i<day.length;i++)
{
    process.stdout.write(day[i]+"   ");
}

// LastDay variable is used to store the day of that month.
if(M==2)
{
    //To check weather the year is leap year or not.
    if(util.LeapYear(Y)==true)
        LastDay = 29;
    else
        LastDay = 28;
}
else if(M==1||M==3||M==5||M==7||M==8||M==10||M==12)
    LastDay = 31;
else
    LastDay = 30;

console.log();    

for(let j=1-Day.dayNum;j<=LastDay;j++)
{
    Move++;
    if(j<=0)
        process.stdout.write("     ");
    else
    {
        if(Move%7!=0)
        {
            //This block is used to manipulate the space in calender for  single digit only
            if(j<=9)
                process.stdout.write(" "+j+"   ");
            else
                process.stdout.write(j+"   ");
        }
        else
        {
            process.stdout.write(j+"");
            console.log();
        }
                
    }
}
console.log();