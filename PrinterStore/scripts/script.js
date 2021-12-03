function formsubmit(){
 var userName= document.getElementById("username1").value;
 var password= document.getElementById("password1").value;
 var errorMessage=document.getElementById("error1");
 var errorMessage1=document.getElementById("error11");
 var errorMessage0=document.getElementById("error0");
 var errorMessage00=document.getElementById("error00");
 var check=true;
 errorMessage.style.display="None";
 if(userName===""){
     errorMessage0.innerText="Error Fill Username before submit";
     errorMessage0.style.color="red";
     errorMessage0.style.display="block";
     errorMessage00.innerText="";
        check=false;
 }else if(userName.length<4){
    errorMessage00.innerText="Error enter at least 4 char in username";
     errorMessage00.style.color="red";
     errorMessage00.style.display="block";
     errorMessage0.innerText="";
     check=false;
 }else{
    errorMessage0.innerText="";
    errorMessage00.innerText="";
 }
 if(password===""){
    errorMessage.innerText="Error Fill password before submit";
    errorMessage.style.color="red";
    errorMessage.style.display="block";
    errorMessage.style.textAlign="center";
    errorMessage1.innerText="";
    check= false;
 }else if(password.length<6){
    errorMessage1.innerText="Error enter at least 6 char in password";
    errorMessage1.style.color="red";
    errorMessage1.style.display="block";
    errorMessage1.style.textAlign="center";
    errorMessage.innerText="";
    check= false;
 }else{
    errorMessage.innerText="";
    errorMessage1.innerText="";
 }

 return check;
    

}
function feedbacksubmitform(){
    var name=document.getElementById("name1").value;
    errorMessage2=document.getElementById("error2");
    errorMessage22=document.getElementById("error22");
    errorMessage222=document.getElementById("error222");

    var check=true;
    
    // condition for name
    if(name===""){
        errorMessage2.innerText="Error Fill name before submit";
        errorMessage2.style.color="red";
        errorMessage2.style.display="none";
        errorMessage22.innerText="";
        check=false;
     }
    else if(name.length<6){
        errorMessage22.innerText="Error enter at least 6 char in name";
        errorMessage22.style.color="red";
        errorMessage22.style.display="none";
        errorMessage2.innerText="";
        check=false;
    } 
    else{
        errorMessage2.innerText="";
        errorMessage22.innerText="";

    }
    if(checknum()===-1){
        check=false;
    }else{
        errorMessage222.innerText="";
    }
    
    // condition for phone number
    var phone=document.getElementById("phone1").value;
    var checkphone=phone.search(/^9665/);
    var errorMessage33= document.getElementById("error33");
    var errorMessage3= document.getElementById("error3");

    if(checkphone===-1){
        errorMessage33.innerText="enter a number begin with (9665)";
        errorMessage33.style.color="red";
        errorMessage33.style.display="none";
        check=false;
    }else{
        errorMessage33.innerText="";
    }
    if(phone.length!==12){
        errorMessage3.innerText="Enter a number that contain only 12 digits";
        errorMessage3.style.color="red";
        errorMessage3.style.display="none";
        check=false;
    }else{
        errorMessage3.innerText="";
    }

    
    // condition for Email Address
    var email=document.getElementById("email1").value;
    errorMessage4=document.getElementById("error4")
    errorMessage44=document.getElementById("error44")

    if(email===""){
        errorMessage44.innerText="Please Fill the Email before submit";
        errorMessage44.style.color="red";
        errorMessage44.style.display="none";
        check=false;
    }else{
        errorMessage44.innerText="";

    }
    if(email.search(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)===-1) {
        errorMessage4.innerText="Email not in formal way";
        errorMessage4.style.color="red";
        errorMessage4.style.display="none";
        check=false;
    }else{
        errorMessage4.innerText="";
    }

    // condition for subject
    var subject=document.getElementById("subject1").value;
    errorMessage5=document.getElementById("error5");
    if(subject===""){
        errorMessage5.innerText="Please Enter Subject before submit";
        errorMessage5.style.color="red";
        errorMessage5.style.display="none";
        check=false;
    }else{
        errorMessage5.innerText="";
    }
    
    //condition for topics
    var topics=document.getElementById("topics1").value;
    errorMessage6=document.getElementById("error6");
    if(topics==="Select a Topics"){
        errorMessage6.innerText="Please select topics from the list";
        errorMessage6.style.color="red";
        errorMessage6.style.display="none";
        check=false;
    }else{
        errorMessage6.innerText="";
    }

    //condition for topics
    var describtion=document.getElementById("describtion1").value;
    errorMessage7=document.getElementById("error7");
    if(describtion===""){
        errorMessage7.innerText="Please enter some info in describtion";
        errorMessage7.style.color="red";
        errorMessage7.style.display="none";
        check=false;
    }else{
        errorMessage7.innerText="";
    }
     finalerror=document.getElementById("finalerror");
     
     finalerror.innerText=errorMessage2.innerText+"\n"
     +errorMessage22.innerText+"\n"+errorMessage222.innerText+"\n"
     +errorMessage3.innerText+"\n"+errorMessage33.innerText
     +"\n"+errorMessage4.innerText+"\n"+errorMessage44.innerText+"\n"
     +errorMessage5.innerText+"\n"+errorMessage6.innerText+"\n"
     +errorMessage7.innerText;

     
    finalerror.style.color="red";
    finalerror.style.textAlign="center";

    return check;
}

function checknum(){
    var name=document.getElementById("name1").value;
    var checknum=name.search(/\d/);
    errorMessage222=document.getElementById("error222");
    if(checknum>=0){
        errorMessage222.innerText="Please Enter valid name without number";
        errorMessage222.style.color="red";
        errorMessage222.style.display="block";
        
        return -1;
    }else{
        errorMessage222.innerText="";
        return 1;
    }
    
}

function inputfocus(theinput){
    theinput.style.backgroundColor="yellow";
}
function inputblur(theinput){
    theinput.style.backgroundColor="white";
}
