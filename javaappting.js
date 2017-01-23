var canvas;
var ctx;
var xgl;
var ygl;
var lastPt;

function init() {
	var touchzone = document.getElementById("mycanvas");
	touchzone.addEventListener("touchmove", draw, false);
	touchzone.addEventListener("touchend", end, false);
	ctx = touchzone.getContext("2d");
	mycanvas.width = mycanvas.width;
	ctx.fillStyle="white";
	ctx.fillRect(0,0, mycanvas.width, mycanvas.height);
	lastPt = {x:999, y:999};	
}

function end(e) {
	e.preventDefault();
	lastPt.x=999;
	lastPt.y=999;
	
}




function draw(e) {
	e.preventDefault();
	if(lastPt.x!=999){
		ctx.beginPath();
		ctx.moveTo(lastPt.x, lastPt.y);
		ctx.lineTo(e.touches[0].pageX, e.touches[0].pageY);
	ctx.stroke();}
	
lastPt = {x:e.touches[0].pageX, y:e.touches[0].pageY};	
	
}



function Red(){
	ctx.strokeStyle="Red";
}





