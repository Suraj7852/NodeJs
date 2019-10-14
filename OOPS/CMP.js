const util = require('../Utility/utility');
const doctor = util.ReadFile('../Files/Doctor.json');
const patient = util.ReadFile('../Files/Patient.json');
const input = require('readline-sync');

// Creating the doctor class to assign different doctor
class Doctor{
    constructor(Dname,Did,special,avalible)
    {
        this.Dname = Dname;
        this.Did = Did;
        this.special = special;
        this.avalible = avalible;
        this.count=0;
    }
}

// Creating the patient class to assign different patient
class Patient{
    constructor(Pname,Pid,ph,age)
    {
        this.Pname = Pname;
        this.Pid =  Pid;
        this.ph = ph;
        this.age = age;
    }
}

// Creating the Apoint class to assign different doctor and patient
class Apoint{
    constructor(Dname,Did,special,avalible,Pname,Pid,ph,age)
    {
        this.Dname = Dname;
        this.Did = Did;
        this.special = special;
        this.avalible = avalible;
        this.Pname = Pname;
        this.Pid = Pid;
        this.ph = ph;
        this.age = age;
    }
}

//All the logic are implemented here
class DocPat{
    constructor()
    {
        this.AssDoc = [];
        this.doc = 0;
        this.AssPat = [];
        this.pat = 0;
        this.Appoint = [];
        this.app = 0;
    }

    // TO put existing details of Doctor
    Doc()
    {
        for(let i=0;i<doctor.Doctor.length;i++)
        {
            var Dname = doctor.Doctor[i].Dname;
            var Did = doctor.Doctor[i].Did;
            var special = doctor.Doctor[i].Specialization;
            var avalible = doctor.Doctor[i].Availability;
            var doct = new Doctor(Dname,Did,special,avalible);
            this.AssDoc[this.doc++] = doct;
        }
    }

    // TO put existing details of Patient
    Pat()
    {
        for(let i=0;i<patient.Patients.length;i++)
        {
            var Pname = patient.Patients[i].Pname;
            var Pid = patient.Patients[i].Pid;
            var ph = patient.Patients[i].ph;
            var age = patient.Patients[i].age;
            var pati = new Patient(Pname,Pid,ph,age);
            this.AssPat[this.pat++] = pati;
        }
    }

    // To add new Patient
    AddPat()
    {
        var Pname = input.question("Enter name: ");
        var Pid = input.questionInt("Enter ID: ");
        var ph = input.questionInt("Enter Mobile Number: ");
        var age = input.questionInt("Enter age: ");
        var pati = new Patient(Pname,Pid,ph,age);
        this.AssPat[this.pat++] = pati;
    }

    //To Search Doctor by name,id,Specialization
    searchDoc()
    {
        var search = input.questionInt("Search Doctor By\n1 => name\n2 => ID\n3 => Specialization\nEnter choice: ");
        var count = 0;
        if(search == 1)
        {
            var nam = input.question("Enter name: ");
            for(let i=0;i<this.AssDoc.length;i++)
            {
                if(nam == this.AssDoc[i].Dname)
                {
                    count++;
                    console.log("Here is your Doctor Details: ");
                    console.log("---------------------DOCTORS LIST----------------------")
                    console.log("name    id    Specialization   Availability");
                    console.log("-------------------------------------------------------");
                    console.log(`${this.AssDoc[i].Dname}   ${this.AssDoc[i].Did}    ${this.AssDoc[i].special}        ${this.AssDoc[i].avalible}\n`);
                }
            }
            if(count==0)
                console.log("No such Doctor found: \n");
        }
        else if(search == 2)
        {
            var nam = input.questionInt("Enter ID: ");
            for(let i=0;i<this.AssDoc.length;i++)
            {
                if(nam == this.AssDoc[i].Did)
                {
                    count++;
                    console.log("Here is your Doctor Details: ");
                    console.log("---------------------DOCTORS LIST----------------------")
                    console.log("name    id    Specialization   Availability");
                    console.log("-------------------------------------------------------");
                    console.log(`${this.AssDoc[i].Dname}   ${this.AssDoc[i].Did}    ${this.AssDoc[i].special}        ${this.AssDoc[i].avalible}\n`);
                }
            }
            if(count==0)
                console.log("No such Doctor found: \n");
        }
        else if(search == 3)
        {
            var nam = input.question("Enter Specialization: ");
            for(let i=0;i<this.AssDoc.length;i++)
            {
                if(nam == this.AssDoc[i].special)
                {
                    count++;
                    console.log("Here is your Doctor Details: ");
                    console.log("---------------------DOCTORS LIST----------------------")
                    console.log("name    id    Specialization   Availability");
                    console.log("-------------------------------------------------------");
                    console.log(`${this.AssDoc[i].Dname}   ${this.AssDoc[i].Did}    ${this.AssDoc[i].special}        ${this.AssDoc[i].avalible}\n`);
                }
            }
            if(count==0)
                console.log("No such Doctor found: \n");
        }
    }

    //TO search Patient by name,id,mobile number,age
    searchPat()
    {
        var search = input.questionInt("Search Patient By:\n1 => name\n2 => ID\n3 => Mobile No.\n4 => age\nEnter choice: ");
        var count = 0;
        if(search == 1)
        {
            var nam = input.question("Enter name: ");
            for(let i=0;i<this.AssPat.length;i++)
            {
                if(nam == this.AssPat[i].Pname)
                {
                    count++;
                    console.log("Here is your Patient Details: ");
                    console.log("-----------------PATIENTS LIST--------------------------")
                    console.log("name    id    Mobile No.     age");
                    console.log("-------------------------------------------------------");
                    console.log(`${this.AssPat[i].Pname}   ${this.AssPat[i].Pid}    ${this.AssPat[i].ph}        ${this.AssPat[i].age}\n`);
                }
            }
            if(count==0)
                console.log("No such Patient found: \n");
        }
        else if(search == 2)
        {
            var nam = input.questionInt("Enter ID: ");
            for(let i=0;i<this.AssPat.length;i++)
            {
                if(nam == this.AssPat[i].Pid)
                {
                    count++;
                    console.log("Here is your Patient Details: ");
                    console.log("-----------------PATIENTS LIST--------------------------")
                    console.log("name    id    Mobile No.     age");
                    console.log("-------------------------------------------------------");
                    console.log(`${this.AssPat[i].Pname}   ${this.AssPat[i].Pid}    ${this.AssPat[i].ph}        ${this.AssPat[i].age}\n`);
                }
            }
            if(count==0)
                console.log("No such Patient found: \n");
        }
        else if(search == 3)
        {
            var nam = input.questionInt("Enter Mobile No.: ");
            for(let i=0;i<this.AssPat.length;i++)
            {
                if(nam == this.AssPat[i].ph)
                {
                    count++;
                    console.log("Here is your Patient Details: ");
                    console.log("-----------------PATIENTS LIST--------------------------")
                    console.log("name    id    Mobile No.     age");
                    console.log("-------------------------------------------------------");
                    console.log(`${this.AssPat[i].Pname}   ${this.AssPat[i].Pid}    ${this.AssPat[i].ph}        ${this.AssPat[i].age}\n`);
                }
            }
            if(count==0)
                console.log("No such Patient found: \n");
        }
        else if(search == 4)
        {
            var nam = input.questionInt("Enter age: ");
            for(let i=0;i<this.AssPat.length;i++)
            {
                if(nam == this.AssPat[i].age)
                {
                    count++;
                    console.log("Here is your Patient Details: ");
                    console.log("-----------------PATIENTS LIST--------------------------")
                    console.log("name    id    Mobile No.     age");
                    console.log("-------------------------------------------------------");
                    console.log(`${this.AssPat[i].Pname}   ${this.AssPat[i].Pid}    ${this.AssPat[i].ph}        ${this.AssPat[i].age}\n`);
                }
            }
            if(count==0)
                console.log("No such Patient found: \n");
        }
    }

    //TO appoint doctor to patient
    AppointMent()
    {
        this.PrintPat();
        var ch = input.questionInt("Here is the list of patient Select sl.No. to choose for  Appointment: ");
        var Pname = this.AssPat[ch].Pname;
        var Pid = this.AssPat[ch].Pid;
        var ph = this.AssPat[ch].ph;
        var age = this.AssPat[ch].age;
        this.PrintDoc();
        var ch = input.questionInt("Here is the list of Doctor Select sl.No. to choose for  Appointment: ");
        if(this.AssDoc[ch].count<5)
        {
            var Dname = this.AssDoc[ch].Dname;
            var Did = this.AssDoc[ch].Did;
            var special = this.AssDoc[ch].special;
            var avalible = this.AssDoc[ch].avalible;
            this.AssDoc[ch].count++;
            var Ap = new Apoint(Dname,Did,special,avalible,Pname,Pid,ph,age);
            this.Appoint[this.app++] = Ap;
        }
        else
            console.log("Doctors Appointment is full");
    }

    //To print existing file of Doctor
    PrintDoc()
    {
        console.log("---------------------DOCTORS LIST----------------------")
        console.log("Sl.No.    name    id    Specialization   Availability");
        console.log("-------------------------------------------------------");
        for(let i=0;i<this.AssDoc.length;i++)
        {
            console.log(`${i}         ${this.AssDoc[i].Dname}   ${this.AssDoc[i].Did}    ${this.AssDoc[i].special}        ${this.AssDoc[i].avalible}`);
        }
        console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%\n");
    }

    //To print existing file of Patient
    PrintPat()
    {
        console.log("-----------------PATIENTS LIST--------------------------")
        console.log("Sl.No.    name    id    Mobile No.     age");
        console.log("-------------------------------------------------------");
        for(let i=0;i<this.AssPat.length;i++)
        {
            console.log(`${i}         ${this.AssPat[i].Pname}   ${this.AssPat[i].Pid}    ${this.AssPat[i].ph}    ${this.AssPat[i].age}`);
        }
        console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%\n");
    }

    //To print the appointment Details
    PrintApp()
    {
        console.log("--------------------------Appointnment LIST----------------------------------------------------------")
        console.log("Sl.No.  Availability      Doctor name    id    Specialization    Patient Name    id    Mob No.   age");
        console.log("-----------------------------------------------------------------------------------------------------");
        for(let i=0;i<this.Appoint.length;i++)
        {
            console.log(`${i}         ${this.Appoint[i].avalible}          ${this.Appoint[i].Dname}        ${this.Appoint[i].Did}    ${this.Appoint[i].special}         ${this.Appoint[i].Pname}      ${this.Appoint[i].Pid}  ${this.Appoint[i].ph}  ${this.Appoint[i].age}`);
        }
        console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%\n");
    }

    //To save details of Patient 
    SavePatFile()
    {
        var obj = {
            Patients: []
        }
        for(let i=0;i<this.AssPat.length;i++)
        {
            obj.Patients.push(this.AssPat[i]);
        }
        util.WriteJsonFile('../Files/Patient.json',obj);
    }


    //To save details of Patient 
    SaveDocFile()
    {
        var obj = {
            Doctor: []
        }
        for(let i=0;i<this.AssDoc.length;i++)
        {
            obj.Doctor.push(this.AssDoc[i]);
        }
        util.WriteJsonFile('../Files/Output.json',obj);
    }

    // TO save appintment
    SaveAppFile()
    {
        var obj = {
            AppointMent: []
        }
        for(let i=0;i<this.Appoint.length;i++)
        {
            obj.AppointMent.push(this.Appoint[i]);
        }
        util.WriteJsonFile('../Files/DocApp.json',obj);
    }
}
var change = new DocPat();
change.Doc();
change.Pat();
module.exports = change;