function addStudent(){
	var studentName = document.getElementById('name').value;
	var studentSurname = document.getElementById('surname').value;
	var select = document.getElementById('faculty');
	var faculty = select.options[select.selectedIndex].text;

	if (studentSurname != "" && studentName != "" && select.selectedIndex != 0) {
		var table = document.getElementById('students');
		var row = table.insertRow();
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		cell3.setAttribute("style","font-weight: bold;");

		cell1.innerHTML = studentName;
		cell2.innerHTML = studentSurname;
		cell3.innerHTML = faculty;

		document.getElementById('name').value = '';
		document.getElementById('surname').value = '';
		document.getElementById('faculty').value = -1;
	}
	else{
		if (studentName == "") {
			document.getElementById('name').className = "error";
		}
		if (studentSurname == "") {
			document.getElementById('surname').className = "error";
		}
		if (select.selectedIndex == 0) {
			document.getElementById('faculty').className = "error";
		}
	}
}

function clear(){
	this.className = "";
}

var button = document.getElementById('addStudent');
button.addEventListener("click",addStudent);
document.getElementById('name').addEventListener("focus",clear);
document.getElementById('surname').addEventListener("focus",clear);
document.getElementById('faculty').addEventListener("focus",clear);