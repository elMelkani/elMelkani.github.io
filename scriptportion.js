// JavaScript Document
/*window.onload=function(){ 
var abc = document.getElementById("paintings");
var def = document.getElementById("paintingsbig");
var a = abc.style.top;
def.style.top = "40px";
abc.style.top = "50px";
//var widthv = abc.style.width;
//def.style.width = widthv;
}
/*window.onload=function(){ 
  // Alert the position with jQuery
var ca = document.getElementById("cave");
var oi = document.getElementById("oil");
ca.style.position="absolute";
var y =oi.style.top;
ca.style.top = y;
}*/
function slideup1(){
	$('#hiddenbuttons1').slideUp();
	a=0;
	document.getElementById('divinfluence').style.backgroundColor='#1D8FBA';
}
function slidedown1(){
	a=1;
	$('#hiddenbuttons1').slideDown();
	document.getElementById('divinfluence').style.backgroundColor='#155499';
}
function slidedown2(){
	b=1;
	$('#hiddenbuttons2').slideDown();
	document.getElementById('divsomeinnovations').style.backgroundColor='#155499';
	}
function slideup2(){
	$('#hiddenbuttons2').slideUp(); 
	b=0;
	document.getElementById('divsomeinnovations').style.backgroundColor='#1D8FBA';
	}
	function ckinfluence(){
	if(a==1) slideup1();
	else if(a==0) slidedown1();
	if(b==1) slideup2();
}
	function cksomeinnovations(){
	if(b==1) slideup2();
	else if(b==0) slidedown2();
	if(a==1) slideup1();
}
//home
function mnhome(){
	document.getElementById('home').style.color='#fff';
}
function mthome(){
	document.getElementById('home').style.color='#DAD3E7';
}

//history
function mnhistory(){
	document.getElementById('history').style.color='#fff';
}
function mthistory(){
	document.getElementById('history').style.color='#DAD3E7';
}

//influence
function mninfluence(){
	document.getElementById('influence').style.color='#fff';
}
function mtinfluence(){
	document.getElementById('influence').style.color='#DAD3E7';
}

//hiddenbuttons1 start
//art
function mnart(){
	document.getElementById('art').style.color='#fff';
}
function mtart(){
	document.getElementById('art').style.color='#DAD3E7';
}

//slavery
function mnslavery(){
	document.getElementById('slavery').style.color='#fff';
}
function mtslavery(){
	document.getElementById('slavery').style.color='#DAD3E7';
}

//peace
function mnpeace(){
	document.getElementById('peace').style.color='#fff';
}
function mtpeace(){
	document.getElementById('peace').style.color='#DAD3E7';
}
//hiddenbuttons1 ends

//innovations
function mnsomeinnovations(){
	document.getElementById('someinnovations').style.color='#fff';
}
function mtsomeinnovations(){
	document.getElementById('someinnovations').style.color='#DAD3E7';
}

//hiddenbuttons2 starts
//television
function mntelevision(){
	document.getElementById('television').style.color='#fff';
}
function mttelevision(){
	document.getElementById('television').style.color='#DAD3E7';
}

//digital camera
function mndigitalcamera(){
	document.getElementById('digitalcamera').style.color='#fff';
}
function mtdigitalcamera(){
	document.getElementById('digitalcamera').style.color='#DAD3E7';
}

//telescope
function mntelescope(){
	document.getElementById('telescope').style.color='#fff';
}
function mttelescope(){
	document.getElementById('telescope').style.color='#DAD3E7';
}
//microscope
function mnmicroscope(){
	document.getElementById('microscope').style.color='#fff';
}
function mtmicroscope(){
	document.getElementById('microscope').style.color='#DAD3E7';
}
//hiddenbuttons2 ends
