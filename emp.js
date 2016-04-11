
function show() {

    var emp = [];
    var e = {};
    e.name = document.getElementById("name").value;
    e.email = document.getElementById("email").value;
    
    e.dob = document.getElementById("dob").value;
    e.address = document.getElementById("address").value;
    
    e.phone = document.getElementById("phone").value;
    e.gender="" ;
    if(document.getElementById("male").checked==true){
        e.gender+="male";
    }
    else
    {
        e.gender+="female";
    }
    
    e.lan="";
    if(document.getElementById("eng").checked==true){
    e.lan+="english";}
    if(document.getElementById("tam").checked==true){
    e.lan+=" tamil";}
    if(document.getElementById("hin").checked==true){
    e.lan+=" hindi";}
    if(document.getElementById("mar").checked==true){
    e.lan+=" marati";}

    if (JSON.parse(localStorage.getItem('employee'))) {
        emp = JSON.parse(localStorage.getItem('employee'));
    }

    emp.push(e);

    localStorage.setItem('employee', JSON.stringify(emp));
    window.location.reload(true);
    window.open('emp1.html', '_blank');
}
function name1(){
    var a=document.getElementById("name").value;
    if(!(a.length>=9 &&a.length<=30))
    {
     document.getElementById("name").value="";
     document.getElementById("name").focus();
     document.getElementById("name").placeholder="9-30 characters";
    }
    else {document.getElementById("address").focus();}

}
function address1() {
     var x = document.getElementById("address").value;
    if (x.length<=1) {
        document.getElementById("address").value="";
        document.getElementById("address").focus();
        document.getElementById("address").placeholder="enter address";
        
    }
     else{ document.getElementById("email").focus();}
}
function email1() {
    var x = document.getElementById("email").value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        document.getElementById("email").value="";
        document.getElementById("email").focus();
        document.getElementById("email").placeholder="Not a valid e-mail address";
        
    }
     else {document.getElementById("phone").focus();}
}
function phone1() {
    var x = document.getElementById("phone").value;
    var flag=true;
    for(var i=0;i<x.length;i++)
    {
        
        if(!(x[i]<='9'&&x[i]>='0'))
        {
            flag=false;
            break;
        }
    }
    if(!flag)
    {
            document.getElementById("phone").value="";
            document.getElementById("phone").focus();
            document.getElementById("phone").placeholder="enter 10 digits";
    }
        if ((x.length!=10)||(x[0]<'7')) {
            document.getElementById("phone").value="";
            document.getElementById("phone").focus();
            document.getElementById("phone").placeholder="enter 10 digits";
        
        }
        else {document.getElementById("dob").focus(); }
}


function date1()
{
  var a=document.getElementById("dob").value;
  if(a==null||a=="")
  {
    document.getElementById("dob").value="";
    document.getElementById("dob").focus();
  }
  else {
    document.getElementById("eng").focus();
     }
  
}

function validateForm()
{

var c=0;
var x=document.getElementById("address").value;
var y=document.getElementById("name").value;
var z=document.getElementById("email").value;
var a=document.getElementById("dob").value;
var b=document.getElementById("phone").value;
if(document.getElementById("eng").checked==true){
    c++;}
    if(document.getElementById("tam").checked==true){
    c++;}
    if(document.getElementById("hin").checked==true){
    c++;}
    if(document.getElementById("mar").checked==true){
    c++;}
if (!(a==null || a=="") && !(c<=0)&& !(z==null || z=="") && !(x==null || x=="")&& !(y==null || y=="")&& !(b==null || b==""))
  {
  document.getElementById('save').disabled = false;

  }
  else
    alert("please fill all values");
      
}
function load(){
    document.getElementById("name").focus();
    var editedItemIndex=localStorage.getItem('editedItemIndex');
    var employee=JSON.parse(localStorage.getItem('employee'));
    if(editedItemIndex!=null && editedItemIndex!=undefined && editedItemIndex!="")
    {
    document.getElementById("update").style.visibility="visible";
    document.getElementById("save").style.visibility="hidden";
    document.getElementById("name").value=employee[editedItemIndex].name;
    document.getElementById("address").value=employee[editedItemIndex].address;
    document.getElementById("dob").value=employee[editedItemIndex].dob;
    document.getElementById("email").value=employee[editedItemIndex].email;
    document.getElementById("phone").value=employee[editedItemIndex].phone;
    if(employee[editedItemIndex].gender=="male"){
       document.getElementById("male").checked=true; 
    }else{document.getElementById("female").checked=true; }
 var a=employee[editedItemIndex].lan.split(" ");
for(var i=0;i<=a.length;i++){
if(a[i]=="english"){
       document.getElementById("eng").checked=true; 
    }

if(a[i]=="hindi"){
       document.getElementById("hin").checked=true; 
    }
    if(a[i]=="marati"){
       document.getElementById("mar").checked=true; 
    }
    if(a[i]=="tamil"){
       document.getElementById("tam").checked=true; 
    }
         }


    }
    
}
function update1()
{

var editedItemIndex=localStorage.getItem('editedItemIndex');
var employee=JSON.parse(localStorage.getItem('employee'));
for(var i=0;i<=employee.length;i++)
{
    if(employee[editedItemIndex].name==employee[i].name)
    {
    employee[editedItemIndex].gender="" ;
    employee[editedItemIndex].lan="";
    if(document.getElementById("eng").checked==true){
    employee[editedItemIndex].lan+="english";}
    if(document.getElementById("tam").checked==true){
    employee[editedItemIndex].lan+=" tamil";}
    if(document.getElementById("hin").checked==true){
    employee[editedItemIndex].lan+=" hindi";}
    if(document.getElementById("mar").checked==true){
    employee[editedItemIndex].lan+=" marati";}
    if(document.getElementById("male").checked==true){
         employee[editedItemIndex].gender+="male";
    }
    else
    {
         employee[editedItemIndex].gender+="female";
    }
    employee[editedItemIndex].name=document.getElementById("name").value;
    employee[editedItemIndex].address=document.getElementById("address").value;
    employee[editedItemIndex].dob=document.getElementById("dob").value;
    employee[editedItemIndex].email=document.getElementById("email").value;
    employee[editedItemIndex].phone=document.getElementById("phone").value;
    localStorage.setItem('employee', JSON.stringify(employee));
    break;
    }

}
localStorage.setItem('editedItemIndex', "");
window.location.reload(true);
window.open('emp1.html', '_self');
}