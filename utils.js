	/*
		autor: lesthack
		description: utils.js
	*/
	
	function $(id){		
		if(typeof(id) == "string")
			return document.getElementById(id);		
		else if(typeof(id) == "object")
			return id;
	}
	
	function trim (myString){
		return myString.replace(/^\s+/g,'').replace(/\s+$/g,'')
	}
	
	Object.prototype.addStyle = function(style, value){
		var _style = this.getAttribute("style");		
		if(_style!=null){		
			var attributes = _style.split(" ").join("").split(";");
			var _attributes = new Array();
			var unadd = true;
		
			for(var i=0; i<attributes.length; i++){
				var element = attributes[i].split(":");
				if( element[0] == style ){
					element[1] = value;
				}
				if( element[0].length>0)
					_attributes.push(element.join(":"))
			}
		
			if(unadd) _attributes.push(style+":"+value);
		
			this.setAttribute("style", _attributes.join(";"));
		}
		else{
			this.setAttribute("style", style+":"+value);
		}
	}
	
	Object.prototype.delStyle = function(style){
		var _style = this.getAttribute("style");		
		if(_style!=null){		
			var attributes = _style.split(" ").join("").split(";");
			var _attributes = new Array();
			
			for(var i=0; i<attributes.length; i++){
				var element = attributes[i].split(":");
				if( element[0].length>0 && element[0] != style)
					_attributes.push(element.join(":"))
			}
			
			this.setAttribute("style", _attributes.join(";"));
		}
	}
	
	var Canvas = function(id, width, height, classname, zindex){
		this.width = width;
		this.height = height;
		this.obj = document.createElement("canvas");
			this.obj.setAttribute("id", id);
			this.obj.setAttribute("width", width);
			this.obj.setAttribute("height", height);
			this.obj.setAttribute("class", classname);			
				 		
	 	this.context = this.obj.getContext("2d");
	 	
 		this.setZIndex = function(index){ 
 			if( typeof(index) == "number" ){ 				
 				this.obj.addStyle("z-index", index);
 			}
 		}
 		
 		this.getObject = function(){
 			return this.obj;
 		}
 		
 		this.setBackgroundImage = function(img){
			this.context.drawImage(img, 0, 0);			
 		}
 		
 		this.getContext = function(){
 			return this.context;
 		}
 		
 		this.clear = function(){
 			this.context.clearRect(0, 0, this.width, this.height);	
 		}
 		
 		this.checkCollision = function(x, y){
 			var imgbin = this.context.getImageData(x, y, 15, 15);
 			for(var i=0; i < imgbin.data.length; i++){
 				if(imgbin.data[i] == 0) return true;
 			}
 			return false;
 		}
 		
 		if(zindex != null) this.setZIndex(zindex);
	 }
	 
	var Enemie = function(nombre, x, y, canvas){
		this.nombre = nombre;		
		this.x = x;
		this.y = y;
		this.canvas = canvas;
		this.context = this.canvas.context;
		this.route = new Array(
			new Array(300, 605),
			new Array(0, 0),
			new Array(1020, 700)
		);
		this.pointer = 0;
		this.velocity = 2;
		
		this.getPosition = function(){
			return new Array(x, y);
		}
		
		this.paint = function(){
			if(this.pointer < this.route.length){							
				this.move(this.route[this.pointer]);
			}
			this.context.fillStyle="red";
			this.context.beginPath();
			this.context.arc(this.x, this.y, 5, 0, Math.PI*2, true);
			this.context.closePath();
			this.context.fill();
		}
		
		this.move = function(point){								
			var xo = point[0];
			var yo = point[1];
			var xv = false;
			var yv = false;
			
			if(this.y > yo + this.velocity || this.y < yo + this.velocity){
				if(this.y > yo)
					this.y-=this.velocity;
				else
					this.y+=this.velocity;
			}
			else
				yv = true;
				
			if(this.x > xo + this.velocity || this.x < xo - this.velocity){
				if(this.x > xo)
					this.x-=this.velocity;
				else
					this.x+=this.velocity;
			}
			else
				xv = true;
				
			if(xv && yv)
				this.pointer++;
		}
		
		this.createRoute = function(){			
			
		}
		
		
	}	 











