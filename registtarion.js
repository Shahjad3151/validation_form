function validate(){
       
    var x1=document.getElementById("t0").value.trim();//trim remove extra space
    var cod=/^([A-Za-z])+$/;//ye batata hai name me kia kia ho skta h
    if(x1==""){
        document.getElementById("msg").innerHTML="**please enter name";
        document.getElementById("t0").style.border='2px solid red' ;
        document.getElementById("msg").style.color='red ';
        document.getElementById("msg").style.display='block ';
        return false;
    }
    else if(x1.length<3 || x1.length>20){
        document.getElementById("msg").innerHTML="**length should be 3-20";
        document.getElementById("t0").style.border='2px solid red' ;
        document.getElementById("msg").style.color='red ';
        document.getElementById("msg").style.display='block ';
        return false;
    }
    else if(!x1.match(cod)){
        document.getElementById("msg").innerHTML="**only character";
        document.getElementById("t0").style.border='2px solid red' ;
        document.getElementById("msg").style.color='red ';
        document.getElementById("msg").style.display='block ';
        return false;
    }
    else{
        document.getElementById("t0").style.border='3px solid green' ; 
        document.getElementById("msg").style.display='none';
    }
    // name
    var x1=document.getElementById("t1").value.trim();//trim remove extra space
    var cod=/^[A-Za-z]+$/;//ye batata hai name me kia kia ho skta h
    if(x1==""){
        document.getElementById("msg1").innerHTML="**please enter name";
        document.getElementById("t1").style.border='2px solid red' ;
        document.getElementById("msg1").style.color='red ';
        document.getElementById("msg1").style.display='block ';
        return false;
    }
    else if(x1.length<2 || x1.length>20){
        document.getElementById("msg1").innerHTML="**length should be 2-20";
        document.getElementById("t1").style.border='2px solid red' ;
        document.getElementById("msg1").style.color='red ';
        document.getElementById("msg1").style.display='block ';
        return false;
    }
    else if(!x1.match(cod)){
        document.getElementById("msg1").innerHTML="**only character";
        document.getElementById("t1").style.border='2px solid red' ;
        document.getElementById("msg1").style.color='red ';
        document.getElementById("msg1").style.display='block ';
        return false;
    }
    else{
        document.getElementById("t1").style.border='2px solid green' ;
        document.getElementById("msg1").style.display='none ';
    }
    //var 2 ke liye
    var x2=document.getElementById("t2").value;
    var codd=/^([A-Za-z ])+$/;//space diya hua hai
    if(x2==""){
        document.getElementById("msg2").innerHTML="**please enter name";
        document.getElementById("t2").style.border='2px solid red' ;
        document.getElementById("msg2").style.color='red ';
        document.getElementById("msg2").style.display='block ';
        return false;
    }
    else if(!x2.match(codd)){
        document.getElementById("msg2").innerHTML="**only characater";
        document.getElementById("t2").style.border='2px solid red' ;
        document.getElementById("msg2").style.color='red ';
        document.getElementById("msg2").style.display='block ';
        return false;
    }
    else{
        document.getElementById("t2").style.border='2px solid green' ;
        document.getElementById("msg2").style.display='none ';
    }
    //phone
    var x1=document.getElementById("t3").value.trim();
    var cod=/^([6-9]{1})+([0-9]{9})+$/;
    if(x1==""){
            document.getElementById("msg3").innerHTML="**please enter number";
            document.getElementById("t3").style.border='2px solid red' ;
            document.getElementById("msg3").style.color='red ';
            document.getElementById("msg3").style.display='block ';
            return false;
        }
    else if(x1.length<10 || x1.length>10){
            document.getElementById("msg3").innerHTML="**length should be 10";
            document.getElementById("t3").style.border='2px solid red' ;
            document.getElementById("msg3").style.color='red ';
            document.getElementById("msg3").style.display='block ';
            return false;
        }
   
    else if(cod.test(x1)==0){
            document.getElementById("msg3").innerHTML="**only number & 1st letr 6-9";
            document.getElementById("t3").style.border='2px solid red' ;
            document.getElementById("msg3").style.color='red ';
            document.getElementById("msg3").style.display='block ';
            return false;
        }
    else{
            document.getElementById("t3").style.border='2px solid green' ;
            document.getElementById("msg3").style.display='none';
        }
    // email
    var x1=document.getElementById("t4").value.trim();
    var cod=/^([A-Za-z0-9\.\-_])+\@+([A-Za-z0-9])+\.+([A-Za-z]{2,3})+$/;
//amir123@gmail.com  // amir.alam @       123.               com 
            
    if(x1==""){
            document.getElementById("msg4").innerHTML="**please enter email";
            document.getElementById("t4").style.border='2px solid red' ;
            document.getElementById("msg4").style.color='red ';
            document.getElementById("msg4").style.display='block ';
            return false;
        }
    else if(cod.test(x1)==0){
            document.getElementById("msg4").innerHTML="**email like this amir@123.in";
            document.getElementById("t4").style.border='2px solid red' ;
            document.getElementById("msg4").style.color='red ';
            document.getElementById("msg4").style.display='block ';
            return false;
        }
    else{
            document.getElementById("t4").style.border='2px solid green' ;
            document.getElementById("msg4").style.display='none ';
           
        }
    //password
    var x1=document.getElementById("t5").value.trim();
    var cod= /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@.#$!%?&^])[A-Za-z\d@.#$!%?&]{8,15}$/;
   // Geeks@123    lwr case    numbr     special chrctr   upr case   
    if(x1==""){
        document.getElementById("msg5").innerHTML="**please enter password";
        document.getElementById("t5").style.border='2px solid red' ;
        document.getElementById("msg5").style.color='red ';
        document.getElementById("msg5").style.display='block ';
        return false;
    }
    else if(x1.length<8 || x1.length>15){
        document.getElementById("msg5").innerHTML="**length be 8-20 character";
        document.getElementById("t5").style.border='2px solid red' ;
        document.getElementById("msg5").style.color='red ';
        document.getElementById("msg5").style.display='block ';
        return false;
    }
    else if(cod.test(x1)){
        document.getElementById("msg5").innerHTML="**password like Aamir@777";
        document.getElementById("t5").style.border='2px solid red' ;
        document.getElementById("msg5").style.color='red ';
        document.getElementById("msg5").style.display='block ';
        return false;
    } 
    else{
        document.getElementById("t5").style.border='2px solid green' ; 
        document.getElementById("msg5").style.display='none'; 
        alert("Thanks Successflly Submitted");
    }
    
}