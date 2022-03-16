window.onload = loginLoad;
function loginLoad()
{
	var form = document.getElementById("myLogin");
    form.onsubmit = validateForm;
}

function Goregister()
{
	window.location.replace("register.html");
}
function validateForm()
{
	var rightpw, rightacc;
	const queryString = window.location.search;
	//console.log(queryString);

	const urlParams = new URLSearchParams(queryString);
	const pw = urlParams.get('password');
	const user = urlParams.get('username');
	var password = document.forms["myLogin"]["password"].value;
	var user2 = document.forms["myLogin"]["username"].value;
	if (user != user2)
	{
		rightacc = false;
	}
	else if (pw != password)
	{
		rightpw = false;
	}
	else
	{
		rightacc = true;
		rightpw = true;
	}
	if (rightpw && rightacc)
	{
		alert("Welcome " + user2);
		return true;
	}
	else
	{
		alert("Wrong account name or password");
		return false;
	}
	
	//console.log(firstname);
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
}


			