var i = 0;
var path = new Array();

// List of images
path[0] = "image/01.jpg";
path[1] = "image/02.jpg";
path[2] = "image/03.jpg";
path[3] = "image/04.jpg";
path[4] = "image/05.jpg";
path[5] = "image/06.jpg";
path[6] = "image/07.jpg";
path[7] = "image/08.jpg";
path[8] = "image/09.jpg";
path[9] = "image/10.jpg";
path[10] = "image/11.jpg";
path[11] = "image/12.jpg";
path[12] = "image/13.jpg";
path[13] = "image/14.jpg";
path[14] = "image/15.jpg";
path[15] = "image/16.jpg";
path[16] = "image/17.jpg";
path[17] = "image/18.jpg";
path[17] = "image/19.gif";

function swapImage()
{
	document.slide.src = path[i]; 
	if(i < path.length - 1) i++; else i=0;
	setTimeout("swapImage()", 2500);
}

window.onload=swapImage;

// 3000 equals 3 seconds