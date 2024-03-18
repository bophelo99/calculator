function compute()
{
   var p = parseInt(document.getElementById("principal").value);
   var r = parseFloat(document.getElementById("rate").value);
   var y = parseInt(document.getElementById("years").value);
   var interest = p*y*r/100;
   var year = new Date().getFullYear() + y;
   var amount = p+interest;
   var result = document.getElementById("result");
   
   if(p<=0){
    //Add validation for the “Principal” input box. If the user enters zero or a negative value, show an alert which says “Enter a positive number
    alert("Please enter a positive number!");
    //Once the user clicks on the alert “OK” button, take the user back to the “Principal” input box, by setting the focus on this box using the focus method in the code for principal input validation:
     document.getElementById("principal").focus();
}
else {
    result.innerHTML = "If you deposit $" + "<mark>" + p + "</mark>" + ",\<br\> at an interest rate of " + "<mark>" + r + "%" + "</mark>" + "\<br\> You will receive an amount of $" + "<mark>" + amount + "</mark>" + ",\<br\> in the year " + "<mark>" + year + "</mark>" + "\<br\>";
}

}
    
function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}