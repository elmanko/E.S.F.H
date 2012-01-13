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
	
	var Canvas = function(id, width, height, classname){
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
 		
 		this.setBackgroundImage = function(src){
 			var img = new Image();
				img.src = src;
			this.context.drawImage(img, 0, 0);
 		}
 		
 		this.getContext = function(){
 			return this.context;
 		}
 		
 		this.clear = function(){
 			this.context.clearRect(0, 0, this.width, this.height);	
 		}
	 }
	 
	 
