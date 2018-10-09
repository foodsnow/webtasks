function addStudent(){
	let Name = document.querySelector('#name');
	let Surname = document.querySelector('#surname');
	let faculty = document.querySelector('#faculty');

	let studentName = Name.value;
	let studentSurname = Surname.value;
	let index = faculty.selectedIndex;
	let fac = faculty.options[index].text;

	if (studentSurname != "" && studentName != "" && index != 0) {
		let table = document.querySelector('#students');
		let row = table.insertRow();
		let cell1 = row.insertCell(0);
		let cell2 = row.insertCell(1);
		let cell3 = row.insertCell(2);

		let str = document.createElement('strong');
		str.textContent = fac;

		cell1.textContent = studentName;
		cell2.textContent = studentSurname;
		cell3.appendChild(str);

		Name.value = '';
		Surname.value = '';
		faculty.value = -1;
	}
	else{
		if (studentName === "") {
			Name.classList.add("error");
		}
		if (studentSurname === "") {
			Surname.classList.add("error");;
		}
		if (index == 0) {
			faculty.classList.add("error");;
		}
	}
}

function clear(){
	this.classList.remove("error");
}

var button = document.querySelector('#addStudent');
button.addEventListener("click",addStudent);
document.querySelector('#name').addEventListener("focus",clear);
document.querySelector('#surname').addEventListener("focus",clear);
document.querySelector('#faculty').addEventListener("focus",clear);