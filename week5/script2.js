function changeImg(e){
	var div = document.getElementById('bigImage');
	div.getElementsByTagName('img')[0].src = e.currentTarget.src;
	console.log("success");
}
var l = document.getElementsByTagName('img');

for (var i = 0; i < l.length; i++) {
	l[i].addEventListener("click",changeImg,false);
}