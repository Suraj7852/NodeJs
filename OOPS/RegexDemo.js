const input  =require('readline-sync');
var name = input.question("Enter your full Name: ");
var nameReg = /[A-z]/;
var today = new Date();
var date = today.getDate()+"/"+(today.getMonth()+1)+"/"+today.getFullYear();
var mobNo = input.questionInt("Enter your mobile number: ");
var mobNoReg = /^[6-9]\d{9}$/;
if(nameReg.test(name)&&mobNoReg.test(mobNo))
{
    var nameSp = name.split(" ");
    console.log(`Hello ${nameSp[0]}, We have your full name as ${name} in our system.\nYour contact number is +91-${mobNo}.\nPlease,let us know in case of any clarification Thank you BridgeLabz ${date}.`);
}
else
{
    console.log("Invalid user name Or Mobile Number");
}
