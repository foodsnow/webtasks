function changeImg(e){
	image = document.querySelector('#bigImage img');
	image.src = e.currentTarget.src;
	console.log("success");
}
let l = document.querySelectorAll('#carousel img');

for (let i = 0; i < l.length; i++) {
	l[i].addEventListener("click",changeImg);
}