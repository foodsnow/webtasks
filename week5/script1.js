document.getElementById('determinant').addEventListener("click",deter);
function deter(){
	var x = [];
	var y = ['s11','s12','s13','s21','s22','s23','s31','s32','s33'];
	for (var i = 0; i < 9; i++) {
		x[i] = document.getElementById(y[i]).value;
	}
	var determinant = x[0]*(x[4]*x[8]-x[5]*x[7])
						-x[1]*(x[3]*x[8]-x[5]*x[6])
						+x[2]*(x[3]*x[7]-x[4]*x[6]);
	console.log(determinant);
	document.getElementById("result").innerHTML = determinant.toString();
}
