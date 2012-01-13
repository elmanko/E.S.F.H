	var background;
	var layer2;
	var layer3;	
	
	var width = 1024;
	var height = 800;
	var x=200;
	var y=5;
	var dx = 5;
	var dy = 5;
	
	function rect(x,y,w,h){
		layer3.context.fillStyle="blue";
		layer3.context.beginPath();
		layer3.context.rect(x,y,w,h);
		layer3.context.closePath();
		layer3.context.fill();
	}
	
	function draw(){
		layer3.clear();
		rect(x, y, 15,15);
	}
	
	function doKeyDown(evt){
		switch(evt.keyCode){
			case 38: // Up
				y-=5;
				break;
			case 40: // Down
				y+=5;
				break;
			case 37: // Left
				x-=5;
				break;
			case 39: // Right
				x+=5;
				break;
		}
	}
	
	function init() {
		var group = $("canvasdiv");
		
		background = new Canvas("background", width, height, "background", 0);
			background.setBackgroundImage("images/path.png");
			
		layer2 = new Canvas("layer2", width, height, "layer", 1);			
			layer2.setBackgroundImage("images/SizeRef.jpg");					
		
		layer3 = new Canvas("layer3", width, height, "layer", 2);
			
		
		group.appendChild( background.getObject() );
		group.appendChild( layer2.getObject() );
		group.appendChild( layer3.getObject() );
		
		window.addEventListener('keydown', doKeyDown, true);
		return setInterval(draw, 100);
	}
	
	
