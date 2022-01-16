function compute()
{
    
    var p = document.getElementById("principal").value;
    var r = document.getElementById("rate").value;
    var y = document.getElementById("years").value;

    var interest = p * y * r /100;

    var year = new Date().getFullYear()+parseInt(y);
   
    
 
    if(p == 0 || p < 0){
      alert("Enter a Positive Number !!");
      document.getElementById("principal").focus();
    }
    else{
     document.getElementById("result").innerHTML="If you deposit "+p+",\<br\>at an interest rate of "+r+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>"
    }
 
 }



function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
        
