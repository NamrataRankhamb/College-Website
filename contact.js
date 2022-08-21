function check_form()
{
    let rolln=document.getElementById("rn").value;
    if(rolln>0 && rolln<1000)
    {
        alert("Thanks!! We will contact this Roll Number "+rolln+" soon...");
    }
    else
    {
        alert("Invalid Roll Number..Enter Valid Roll Number");
    }
return false;
}
