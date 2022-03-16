window.onload = pageLoad;
function pageLoad()
{
	var form = document.getElementById("myForm");
    form.onsubmit = validateForm;
    confirm_password = document.getElementsByName("passwordretype");
}
function validateForm() 
{
    var errorMsg = document.getElementById("errormsg");
    var gender = document.forms["myForm"]["gender"].value;
    var passwordsame = false;
    var gender1 = false;
    var password = document.forms["myForm"]["password"].value;
    var passwordretype = document.forms["myForm"]["passwordretype"].value;
    if (password === passwordretype)
    {
        passwordsame = true;
    }
    if (gender != "")
    {
        gender1 = true;
    }
    if (passwordsame == false && gender1 == false)
    {  
        errorMsg.innerHTML = "Your password and password-retype is not the same and gender is not filled, please verify again.";
        errorMsg.style.color = "red";
        return false;
    }
    else if (gender1 == false)
    {
        errorMsg.innerHTML = "Your gender is not filled, please fill.";
        errorMsg.style.color = "red";
        return false;
    }
    else if (passwordsame == false)
    {
        errorMsg.innerHTML = "Your password and password-retype is not the same, please verify again.";
        errorMsg.style.color = "red";
        return false;
    }
    else
    {
        alert("Register Completed.");
        return true;
    }
}