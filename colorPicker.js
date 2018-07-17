var color=generateColor(6);
var correctColor=pickCorrectColor(6);
document.querySelector("h1").textContent=color[correctColor];
var box=document.querySelectorAll(".box");
var gameMode="Hard";
 var row2=document.querySelectorAll(".hard");

for(var i=0;i<box.length;i++)
{
 	box[i].style.background=color[i];
 	box[i].addEventListener("click", function(){
 	var clickedColor=this.style.background;
	 if(clickedColor==color[correctColor])
 	{
 		document.querySelector(".header").style.background=color[correctColor];
 		for(var j=0;j<box.length;j++)
 		{
 			box[j].style.background=color[correctColor];
 		}
 			document.querySelector("#playStatus").textContent="You WON!!";
 			document.querySelector("#refresh").textContent="PLAY AGAIN?";
 	}
 	else{
	 this.style.background="rgb(35, 35, 35)";
	 document.querySelector("#playStatus").textContent="TRY AGAIN!!";
	 }
	})
}

var hard=document.getElementById('hd');
  hard.addEventListener('click',function(){
 	document.getElementById('hd').style.color="white";
 	document.getElementById('hd').style.background="rgb(75, 120, 193)";
 	document.getElementById('es').style.color="rgb(75,120,193)";
 	document.getElementById('es').style.background="white";
 	  document.querySelector(".header").style.background="rgb(75, 120, 193)";
 	 color=generateColor(6);
	 correctColor=pickCorrectColor(6);
	 for(var i=0;i<3;i++)
	{
		row2[i].style.display="";
	}
	for(var i=0;i<6;i++)
	{
		box[i].style.background=color[i];
	}
	document.querySelector("h1").textContent=color[correctColor];
	gameMode="Hard";
 })


var easy=document.getElementById('es');
  easy.addEventListener('click',function(){
 	document.getElementById('es').style.color="white";
 	document.getElementById('es').style.background="rgb(75, 120, 193)";
 	document.getElementById('hd').style.color="rgb(75,120,193)";
 	document.getElementById('hd').style.background="white";
 	 document.querySelector(".header").style.background="rgb(75, 120, 193)";
	for(var i=0;i<3;i++)
	{
		row2[i].style.display="none";
	}
	 color=generateColor(3);
	 correctColor=pickCorrectColor(3);
	for(var i=0;i<3;i++)
	{
		box[i].style.background=color[i];
	}
	document.querySelector("h1").textContent=color[correctColor];
	gameMode="Easy";
 })



var reload=document.getElementById('refresh');
reload.addEventListener('click',function(){
 if(gameMode==="Hard")
  {
 	color=generateColor(6);
  	correctColor=pickCorrectColor(6);
  	document.querySelector("h1").textContent=color[correctColor];
  	for(var i=0;i<box.length;i++)
 	{
 	 	box[i].style.background=color[i];
  	}

  }
 if(gameMode==="Easy")
  {
 	color=generateColor(3);
  	correctColor=pickCorrectColor(3);
  	document.querySelector("h1").textContent=color[correctColor];
  	for(var i=0;i<box.length;i++)
 	{
 	 	box[i].style.background=color[i];
  	}
  }
 document.querySelector(".header").style.background="rgb(75, 120, 193)";
 document.querySelector("#playStatus").textContent="";
 document.querySelector("#refresh").textContent="NEW COLORS";
})


function pickCorrectColor(nm)
{
 	return Math.floor(Math.random()*nm);
}


function generateColor(num)
{
 	var arr=[];
 	for(var i=0;i<num;i++)
 	{
 		arr.push(randomColor());
 	}
 	return arr;
}


function randomColor()
{
 	var r=Math.floor(Math.random()*256);
 	var g=Math.floor(Math.random()*256);
 	var b=Math.floor(Math.random()*256);
 	return "rgb(" + r + ", " + g + ", " + b + ")";
}