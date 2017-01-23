var canvas;
var ctx;
var xgl
var ygl;

function init() {
	var touchzone = document.getElementById("mycanvas");
	touchzone.addeventlistener("touchmove"), opdatercanvas, false);
	touchzone.addEventListener("touchend", end, false);
	ctx = touchzone.getcontext("2d");
	mycanvas.width = mycanvas.width;
	ctx.fillstyle="yellow";
	ctx.fillrect(0,0, mycanvas.width, mycanvas.height);
}

function end(e) {
	e.preventdefault();
}