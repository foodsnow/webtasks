function doLines(){
	let box = event.currentTarget.parentNode;
	box.dataset.status = 'done';
}

let buttons = document.querySelectorAll("button");
for(let button of buttons){
	button.addEventListener("click", doLines);
}