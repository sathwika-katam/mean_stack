let readlineSync = require('readline-sync');
let fs = require('fs');
const { timeLog, timeStamp } = require('console');


let userscount = 0;
let usersrec = JSON.parse(fs.readFileSync("./data.json").toString());



let usersadd = readlineSync.questionInt("Total users:  ");
userscount = usersadd;


for(let i = 0; i < userscount; i++) {
    console.log("Enter the details of User")

    let firstname = readlineSync.question("First Name:");
   


    let lastname = readlineSync.question("Last Name :");
    debugger;

    
    let email = readlineSync.questionEMail("Email :");
    


    let time = new Date().toLocaleString();
    usersrec.push({
        
        "first-name" : firstname,
        "last-name" : lastname,
        "email" : email,
        "recording-time":time
    });
    console.log("User Saved");
}

console.log(usersrec);
debugger;


fs.writeFileSync("data.json", JSON.stringify(usersrec));
