	var background;
	var layer2;
	var layer3;	
	
	var width = 1024;
	var height = 800;
	var x=200;
	var y=5;
	var d=5;
	
	var tank;
	var img_background = new Image();
		img_background.src = "images/path.png";
	var img_map = new Image();
		img_map.src = "images/SizeRef.jpg";
	
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
		tank.paint();
	}
	
	function doKeyDown(evt){				
		switch(evt.keyCode){
			case 38: // Up
				if(!background.checkCollision(x, y-d)) y-=d;
				break;
			case 40: // Down
				if(!background.checkCollision(x, y+d)) y+=d;
				break;
			case 37: // Left
				if(!background.checkCollision(x-d, y)) x-=d;
				break;
			case 39: // Right
				if(!background.checkCollision(x+d, y)) x+=d;
				break;
		}
	}
	
	function init() {
		var group = $("canvasdiv");
		
		background = new Canvas("background", width, height, "background", 0);
			background.setBackgroundImage(img_background);
			
		layer2 = new Canvas("layer2", width, height, "layer", 1);
			layer2.setBackgroundImage(img_map);					
		
		layer3 = new Canvas("layer3", width, height, "layer", 2);
		
		// Creación de enemigos
		tank = new Enemie("tank", 120, 600, layer3);
					
		group.appendChild( background.getObject() );
		group.appendChild( layer2.getObject() );
		group.appendChild( layer3.getObject() );
		
		window.addEventListener('keydown', doKeyDown, true);		
		
		setInterval(draw, 100);
	}
	
	
