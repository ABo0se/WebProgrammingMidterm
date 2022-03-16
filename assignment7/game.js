window.onload = pageLoad;
var gamestate;

function pageLoad()
{
	var start = document.getElementById("start");
	start.onclick = startGame;
	gamestate = false;
}

function startGame()
{
	if (gamestate === false)
	{
		gamestate = true;
		alert("Ready");
		clearScreen();
		addBox();
		timeStart();
	}
	else
	{
		alert("You are still in-game.");
	}
}

function timeStart(){
	var myinterval;
	var TIMER_TICK = 1000;
	var timer = null;
	var min = 0.5/6.0; // 0.5 minute
	var second = min*60; 
	var x = document.getElementById('clock');
	//setting timer using setInterval function
	if (timer === null)
	{
		timer = second;
		x.textContent = timer.toString();
		myinterval = setInterval(timeCount, TIMER_TICK);
	}
	//else
	//{
	//	clearInterval(timer);
	//	timer = null;
	//}


	function timeCount()
	{
		var allbox = document.querySelectorAll("#game-layer div");
		if (allbox.length > 0 && timer > 0)
		{
			timer -= 1;
			x.textContent = timer.toString();
		}
		else if (allbox.length <= 0 && timer != null)
		{
			gamestate = false;
			alert("You win.");
			timer = null;
			x.textContent = "";
			clearInterval(myinterval);
		}
		else if (timer <= 0 && timer != null)
		{
			gamestate = false;
			alert("You lose.");
			clearScreen();
			timer = null;
			x.textContent = "";
			clearInterval(myinterval);
		}
		// จัดการเกี่ยวกับเวลา เช่น ถ้ายังมีกล่องเหลืออยู่ เวลาจะลดลงเรื่อยๆ 
		// ถ้าไม่มีกล่องเหลือแล้ว และเวลายังเหลืออยู่จะขึ้นว่า You win!
		// ถ้าเวลาหมด แต่ยังมีกล่องเหลืออยู่ จะบอกว่า Game over และทำการ clear screen
	}
}

function addBox(){ 
	// สร้างกล่องตาม input ที่เราใส่ 
	var numbox = document.getElementById("numbox").value;
	var gameLayer = document.getElementById("game-layer");
	var colorDrop = document.getElementById("color").value;
	for (var i =0; i<numbox;i++)
	{
		var tempbox = document.createElement("div");
		tempbox.className = "square";
		tempbox.id = "box"+i;
		tempbox.style.left = Math.random() * (500 - 25) + "px";
		tempbox.style.top = Math.random() * (500 - 25) + "px";
		tempbox.classList.add(colorDrop);
		//add element to HTML node
		gameLayer.appendChild(tempbox);
		bindBox(tempbox);
	}
}

function bindBox(box){
	//เมื่อกดแล้ว กล่องจะหายไป
	box.onclick = function()
	{
		box.remove();
	}
}

function clearScreen(){
	// ทำการลบ node ของกล่องทั้งหมด ออกจาก หน้าจอ
	var allbox = document.querySelectorAll("#game-layer div");

	//delete all  div
	for (var i=0;i<allbox.length;i++)
	{
		allbox[i].remove();
	}
}




