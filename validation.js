var alphabet=/^[a-z|A-Z]*$/;
var numberFormat=/^[0-9]*$/;
var mailFormat=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

//validating firstname
function ValidateName()
{
  var name=document.getElementById("firstname").value;
  if(name.length ===0)
  {
    ErrorDisplayer("* FirstName cannot be empty","firstNameErrorBox");   
  }
  else if(!(alphabet.test(name)))
  {
    ErrorDisplayer("* Enter Valid Name","firstNameErrorBox"); 
  }
  else
    ErrorDisplayer("","firstNameErrorBox")
}

//validating lastname
function ValidateLastName()
{
   var name=document.getElementById("LastName").value;
   if(name.length === 0)
    {
      ErrorDisplayer("* FirstName cannot be empty","lastNameErrorBox");    
    } 
    else if(!(alphabet.test(name)))
    {
      ErrorDisplayer("* Enter Valid Name","lastNameErrorBox"); 
    }
    else
      ErrorDisplayer("","lastNameErrorBox")
}
//error handler function for firstname and lastname
function ErrorDisplayer(message,Location)
{ 
    document.getElementById(Location).value=message;
    console.log(document.getElementById(Location).innerHTML);
    document.getElementById(Location).style.color="red";
}
//validating contact number
function ValidateNumber()
{
        var number=document.getElementById("ContactNumber").value;
        document.getElementById("NumberErrorBox").style.color="red";
        if(number.length===0)
        {
            document.getElementById("NumberErrorBox").value="Enter A Valid Number";
        }
        else if(number.length!=10 || !(numberFormat.test(number)))
        {
            document.getElementById("NumberErrorBox").value="Enter A Valid Number";
        }
     else
       document.getElementById("NumberErrorBox").value="";
}
//validating mail
function ValidateMail()
{
     var mailId=document.getElementById("emailId").value;
     document.getElementById("MailErrorBox").style.color="red";
     if(mailId.length===0)
     {
         document.getElementById("MailErrorBox").value="Enter A Valid Mail-Id";    
     }
     else if(!(mailFormat.test(mailId)))
     {
        document.getElementById("MailErrorBox").value="Enter A Valid Mail-Id";       
     }    
    else
         document.getElementById("MailErrorBox").value="";
}
//validating city
function ValidateCity()
{
   document.getElementById("CityErrorBox").style.color="red";
    var cities = document.getElementsByName("city");
    if(cities[0].value=="None")
    {
    document.getElementById("CityErrorBox").value="Select a City";
    }
    else
      document.getElementById("CityErrorBox").value="";   
}

function finalCheck()
{
    ValidateName(); 
    ValidateLastName(); 
    ValidateNumber(); 
    ValidateMail(); 
    ValidateCity();
    var fname=document.getElementById("firstNameErrorBox").value;
    var lname=document.getElementById("lastNameErrorBox").value;
    var num=document.getElementById("NumberErrorBox").value;
    var mail=document.getElementById("MailErrorBox").value;
    var city=document.getElementById("CityErrorBox").value;
    if(fname=="" && lname=="" && num=="" && mail=="" && city=="")
        {
            return true;
        }
    else
        {
            alert("Enter All required Input")
            return false;
        }    
}


