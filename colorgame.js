var colors = generateRandomColors(6);

var square = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay =document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");
var numbSquares = 6;
easybtn.addEventListener("click",function()
{
	hardbtn.classList.remove("selected");
	easybtn.classList.add("selected");
	numbSquares=3;
	colors = generateRandomColors(numbSquares);
	pickedColor=pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i=0;i<square.length;i++)
	{
		if(colors[i])
		{
			square[i].style.background = colors[i];
		}
		else
		{
			square[i].style.display = "none";
		}
	}
});

hardbtn.addEventListener("click",function()
{
	hardbtn.classList.add("selected");
	easybtn.classList.remove("selected");
	numbSquares=6;
	colors = generateRandomColors(numbSquares);
	pickedColor=pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i=0;i<square.length;i++)
	{
		square[i].style.background = colors[i];
		square[i].style.display = "block";
		
	}
});
resetButton.addEventListener("click", function(){
	colors = generateRandomColors(numbSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	this.textContent="New Colors";
	messageDisplay.textContent = " ";
	for (var i=0; i<square.length; i++){
		square[i].style.background = colors[i];
	}
	h1.style.background = "#232323";
});
colorDisplay.textContent = pickedColor;
for(var i=0;i<square.length;i++)
{

	square[i].style.background=colors[i];
	square[i].addEventListener("click",function()
	{
		var clickedColor = this.style.background;
		if(clickedColor === pickedColor)
		{
			messageDisplay.textContent ="Correct";
			resetButton.textContent="play Again?";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
		}
		else
		{
			this.style.background ="#232323";
			messageDisplay.textContent = "Try Again";
		}
	});

}

function changeColors(color){
	for( var i=0;i<square.length;i++){
		square[i].style.background = color;
	}
}


function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];
	 for (var i=0;i<num;i++)
	 {
	 	arr.push(randomColor());
	 }
	return arr;
}
function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}