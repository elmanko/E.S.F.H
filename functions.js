var canvas;
var layer2;//the layer2  dummie 
var ctx;
var ctxl2;//manage the layer 2 background
var dx = 5;
var dy = 5;
var x = 200;
var y = 5;
var WIDTH = 1024;
var HEIGHT = 800;
var img = new Image();
var img2= new Image();
var collision = 0;

function rect(x,y,w,h) {
	ctx.beginPath();
	ctx.rect(x,y,w,h);
	ctx.closePath();
	ctx.fill();
	//exactly the same thing for layer2
	ctxl2.beginPath();
	ctxl2.rect(x,y,w,h);
	ctxl2.closePath();
	ctxl2.fill();
}

function clear() {
	ctx.clearRect(0, 0, WIDTH, HEIGHT);
	ctx.drawImage(img, 0, 0);
	ctxl2.clearRect(0,0,WIDTH,HEIGHT);
	ctxl2.drawImage(img2,0,0);//load de full color graphics
}

function init() {
	canvas = document.getElementById("canvas");
	layer2=document.getElementById("layer2");
	ctx = canvas.getContext("2d");
	ctxl2=layer2.getContext("2d");
	img.src = "images/path.png";
	img2.src = "images/SizeRef.jpg";
	return setInterval(draw, 10);
}

function doKeyDown(evt){
	switch (evt.keyCode) {
		case 38:  /* Up arrow was pressed */
		if (y - dy > 0){
			y -= dy;
			clear();
			checkcollision();
		if (collision == 1){
			y += dy;
			collision = 0;
		}
	}	

	break;
case 40:  /* Down arrow was pressed */
if (y + dy < HEIGHT ){
y += dy;
clear();
checkcollision();
if (collision == 1){
y -= dy;
collision = 0;
}
}

break;
case 37:  /* Left arrow was pressed */
if (x - dx > 0){
x -= dx;
clear();
checkcollision();
if (collision == 1){
x += dx;
collision = 0;
}
}
break;
case 39:  /* Right arrow was pressed */
if ((x + dx < WIDTH)){
x += dx;
clear();
checkcollision();
if (collision == 1){
x -= dx;
collision = 0;
}
}
break;
}
}

function checkcollision() {
var imgd = ctx.getImageData(x, y, 15, 15);
var pix = imgd.data;
for (var i = 0; n = pix.length, i < n; i += 4) {
if (pix[i] == 0) {
collision = 1;
}
}
}

function draw() {
clear();
ctx.fillStyle = "purple";
ctxl2.fillStyle="blue";
rect(x, y, 15,15);
}

init();
window.addEventListener('keydown',doKeyDown,true);
