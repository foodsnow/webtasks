let countries = ["Kazakhstan","Russia","England","France"];
let cities_by_country = {"Kazakhstan":["Almaty","Astana","Karagandy"],"Russia":["Moscow","Saint-Petersburg","Kazan"],"England":["London","Manchester","Liverpool"],"France":["Paris","Lyon","Marseille"]};


function changeCities(){
	let cities = document.querySelector("#cities");
	let options = document.querySelectorAll("#cities option");
	for(let item of options){
		item.remove();
	}
	let ev = event.currentTarget.value;
	if(ev != "Select country"){
		let items = cities_by_country[ev];
		console.log(items);
		for(let item of items){
			let city = document.createElement("option");
			city.textContent = item;
			cities.appendChild(city);
		}
	}
	else{
		let no = document.createElement("option");
		no.textContent = "Select city";
		cities.appendChild(no);
	}
}


let country_selector = document.querySelector("#countries");
for(let item of countries){
	let country = document.createElement("option");
	country.textContent = item;
	country_selector.appendChild(country);
}

country_selector.addEventListener("change", changeCities);