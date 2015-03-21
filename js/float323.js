// JavaScript Document
var FloatingAd_close323=0;
var d = document;
var ns=(navigator.appName.indexOf("Netscape") != -1 && navigator.userAgent.indexOf("Gecko") == -1);
var iebody=(document.compatMode && document.compatMode != "BackCompat")? document.documentElement : document.body
function FloatingAd_ModiObj323(id){
	// find obj
	var obj = d.getElementById ? d.getElementById(id) : (d.all ? d.all[id] : d.layers[id]);
	//NS	
	if(d.layers) {
		obj.style=obj;
	}
	//Define
	obj.float_to =function(x,y) {
		if (document.all||document.getElementById){
                this.style.left = x+"px";
                this.style.top = y+"px";
		}
	};

	obj.x=startX323;
	obj.y=startY323;
	return obj;
}
function closebar_th323(){
document.getElementById(FloatingAd_Layer323).style.visibility="hidden"
}
function floatingAdClose323(){
	clearTimeout(FloatingAd_Timer323);
	if(d.getElementById){
		d.getElementById(FloatingAd_Layer323).style.display = "none";
		d.getElementById(FloatingAd_Layer323).innerHTML="";
	}
	else if(d.all){
		d.all[FloatingAd_Layer323].style.display = "none";
		d.all[FloatingAd_Layer323].innerHTML="";
	}
	else{
		d.layers[FloatingAd_Layer323].visibility="hide";
	}
	FloatingAd_close323=1;
}
function FloatingAd_Stay323(){
	if(!FloatingAd_close323){
		var  pageY323=document.all? iebody.scrollTop : pageYOffset
		FloatingObj323.y += (pageY323 + startY323 - FloatingObj323.y)/8;
		FloatingObj323.float_to(FloatingObj323.x,FloatingObj323.y);
		setTimeout("FloatingAd_Stay323()",10);
	}
}
function FloatingAd_Start323(){
	FloatingObj323=FloatingAd_ModiObj323(FloatingAd_Layer323);
	if(FloatingAd_Timeout323 !=0 ) FloatingAd_Timer323=setTimeout("floatingAdClose323()",FloatingAd_Timeout323);
	FloatingAd_Stay323();
}
FloatingAd_Start323();