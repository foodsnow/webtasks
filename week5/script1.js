document.querySelector('#determinant').addEventListener("click",deter);
function deter(){
	let list1 = document.querySelectorAll("input");
	let list = [];
	for(let i = 0; i < list1.length; i++){
		list.push(parseInt(list1[i].value));
	}
	let determinant = list[0]*(list[4]*list[8]-list[5]*list[7])
						-list[1]*(list[3]*list[8]-list[5]*list[6])
						+list[2]*(list[3]*list[7]-list[4]*list[6]);
	console.log(determinant);
	document.querySelector("#result").innerHTML = determinant.toString();
}
