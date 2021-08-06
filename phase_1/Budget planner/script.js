
   function updateusers(){ // Scoping function to avoid creating globals
    var users = JSON.parse(sessionStorage.getItem("users") || "[]"); 
    //console.log(users);
    var myTableDiv = document.getElementById("createTable");
    var sum = 0;
    var table = document.createElement('TABLE');
    table.border='1';
    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);
    var tr = document.createElement('TR');
    tableBody.appendChild(tr);
     headings = ["index","client Name","Project Name","Budget" ];
    for(var i=0;i<headings.length;i++){
    var head = document.createElement("th");
    head.appendChild(document.createTextNode(headings[i]));
    tr.appendChild(head);
    }
    var index =1;
    users.forEach(element => {
        var tr = document.createElement('TR');
       tableBody.appendChild(tr);
       var td = document.createElement("td");
       td.appendChild(document.createTextNode(index++));
       tr.appendChild(td);
       var bud = element.Budget;
       sum+=parseInt(bud.substring(1));
       Object.values(element).forEach( val =>{
        var td = document.createElement('TD');
        td.width='75';
        td.appendChild(document.createTextNode(val));
        tr.appendChild(td);
       } );
        
       
        
    });
    
    myTableDiv.appendChild(table);
    var sp = document.createElement('span');
    sp.innerHTML = sum;
    document.getElementById("budget").appendChild(sp);
    }


    function getData(){
        console.log("adufhe");
        var user ={
        clientName : document.getElementById("cname").value,
        projectName : document.getElementById("pname").value,
        Budget: "$"+document.getElementById("bname").value,
    };
    document.getElementById("cname").value ="";
    document.getElementById("pname").value ="";
    document.getElementById("bname").value ="";
        users = JSON.parse(sessionStorage.getItem("users") || "[]"); 
        users.push(user);
        sessionStorage.setItem("users", JSON.stringify(users));
        console.log(users);
}


