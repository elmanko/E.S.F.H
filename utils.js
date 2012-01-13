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
		
		this.getPosition = function(){
			return new Array(x, y);
		}
		
		this.paint = function(){
			this.context.fillStyle="red";
			this.context.beginPath();
			this.context.arc(x, y, 7, 0, Math.PI*2, true);
			this.context.closePath();
			this.context.fill();
		}
		
		this.createRoute = function(){
			/*var p1 = new Array(this.x-5, this.y-5);
			var p2 = new Array(this.x+5, this.y-5);
			var p3 = new Array(this.x-5, this.y+5);
			var p4 = new Array(this.x+5, this.y+5);
			
			console.log(this.canvas.checkCollision(p1[0], p1[1]) );
			console.log(this.canvas.checkCollision(p2[0], p2[1]) );
			console.log(this.canvas.checkCollision(p3[0], p3[1]) );
			console.log(this.canvas.checkCollision(p4[0], p4[1]) );*/
			
		}
	}	 











