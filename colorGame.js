var numSquares = 6;
var colors = [];
var pickedColor;
var boxes = document.querySelectorAll(".box");
var colorDisplay = document.getElementById("RGB");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#newColor");
var modeButtons = document.querySelectorAll(".mode");



init();

function init(){
	setUpBottoms();
	setUpSquares();
	reset();
}

function setUpBottoms(){
	for (var i = 0; i <modeButtons.length; i++){
		modeButtons[i].addEventListener("click",function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			if(this.textContent === "Easy"){
				 numSquares = 3 ;
			} else numSquares = 6;	
		});
			}
}

function setUpSquares(){
	for (var i = 0; i < boxes.length; i++) {
		//add click listeners to the boxes
		boxes[i].addEventListener("click",function(){
			//grab color of the clicked box
			var clickedColor=this.style.backgroundColor;
			//compare color to the piucked color
			if(clickedColor ===pickedColor){
				messageDisplay.textContent="Correct!!";
				resetButton.textContent="Play Again?";
				changeColor(clickedColor);
				h1.style.backgroundColor=clickedColor;
			}
			else{
				this.style.backgroundColor="#232323";
				messageDisplay.textContent="Try Again!"
			}
		});
	}
}

function reset(){
	colors=generateRandomColors(numSquares);
	//pick a random color from the array
	pickedColor=pickColor();
	//change colcor display to match the picked color
	colorDisplay.textContent=pickedColor;
	resetButton.textContent="New Color";
	messageDisplay.textContent="";
	//change colors of the boxes
	for (var i = 0; i < boxes.length; i++) {
		if(colors[i]){
			boxes[i].style.display = "block"
			boxes[i].style.background = colors[i];
		} else {
			boxes[i].style.display = "none";
		}
	}
		h1.style.background = "steelblue";
}


resetButton.addEventListener("click", function(){
	reset();
})

function changeColor(color){
	//loop through all squares
	for(var i = 0; i < boxes.length; i++){
		//change each color to match given color
		boxes[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = []
	//repeat num times
	for(var i = 0; i < num; i++){
		//get random color and push into arr
		arr.push(randomColor())
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from  0 -255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from  0 -255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}




