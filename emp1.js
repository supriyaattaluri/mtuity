function display() {

    var emp = [];
    var e = {};
      if (JSON.parse(localStorage.getItem('employee'))) {
        emp = JSON.parse(localStorage.getItem('employee'));
    }

    localStorage.setItem('employee', JSON.stringify(emp));
    var key = "";
    var i = 0;
    var table = "<table>";
    table += "<tr style='color:white;background-color:#024457;'><th>Name</th><th>Email-id</th><th>Gender</th><th>Date of Birth</th><th>Address</th><th>Ph no</th><th>Languages Known</th><th></th></tr>";
    emp = JSON.parse(localStorage.getItem('employee'));
    console.log(emp);
    for (var i = 0; i < emp.length; i++) {
        
        key = emp[i];
        if(key!=null)
        {
        table += "<tr><td>" + key.name + "</td><td>" 
        + key.email + "</td><td>" 
        + key.gender + "</td><td>" 
        + key.dob + "</td><td>" 
        + key.address + "</td><td>" 
        + key.phone + "</td><td>" 
        + key.lan+ "</td><td><input type='button' onclick='edit("+i+")' value='edit'style='border-radius:5px;border-color: #024457; background-color:#02627d; color:white;'></input></td></tr>";
        }
    }
    table += "</table>";
    var section = document.getElementById("sec");
    section.innerHTML = table;
}
function edit(x){

    employee=JSON.parse(localStorage.getItem('employee'));
    var editedItemIndex=x;
    localStorage.setItem('editedItemIndex',editedItemIndex);
    //alert(editedItemIndex);
    //delete employee[x];
    //localStorage.removeItem('employee');
    //localStorage.setItem('employee', JSON.stringify(employee));
    //console.log(employee);
    window.location.reload(true);
    window.open('emp.html', '_blank');
}
