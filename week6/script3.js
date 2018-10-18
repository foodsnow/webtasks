let cars = [{'brand':'Toyota','model':'Camry','year':1999,'price':20000,'image_url':"https://media.ed.edmunds-media.com/toyota/camry/2016/ot/2016_toyota_camry_LIFE1_ot_902163_1280.jpg"},
			{'brand':'BMW','model':'X6','year':2014,'price':25000,'image_url':"https://media.ed.edmunds-media.com/bmw/x6/2016/oem/2016_bmw_x6_4dr-suv_xdrive50i_fq_oem_5_1280.jpg"},
			{'brand':'Daewoo','model':'Nexia','year':2007,'price':15000,'image_url':"https://s.auto.drom.ru/i24207/c/photos/fullsize/daewoo/nexia/daewoo_nexia_695410.jpg"}];

let add = "basket.png";
let drop = "money.png";

for(let car of cars){
	let div = document.createElement("section");
	let car_name = car['brand'] + " " + car['model'] + " " + car['year'];
	let name = document.createElement("span");
	name.textContent = car_name;
	
	let image = document.createElement("img");
	image.src = car['image_url'];
	image.style.width = "100px";

	let icon = document.createElement("img");
	icon.classList.add("basket");
	icon.style.height = "30px";
	icon.style.width = "30px";
	icon.src = add;
	icon.dataset.price = car['price'];
	icon.dataset.selected = false;
	
	div.appendChild(image);
	div.appendChild(name);
	div.appendChild(icon);
	div.classList.add("card");

	document.querySelector("#cars").appendChild(div);
}


function addOrDelItem(){
	let select = event.currentTarget.dataset.selected;
	console.log(typeof select);
	let total_price = document.querySelector("#insideBasket #sum");
	let total_items = document.querySelector("#insideBasket #items");
	if(select === 'false'){	
		total_price.textContent = parseInt(total_price.textContent) 
									+ parseInt(event.currentTarget.dataset.price);
		total_items.textContent = parseInt(total_items.textContent) + 1;
		select = 'true';
		event.currentTarget.src = drop;
	}
	else{
		total_price.textContent -= event.currentTarget.dataset.price;
		total_items.textContent -= 1;
		select = 'false';
		event.currentTarget.src = add;
	}
	event.currentTarget.dataset.selected = select;
}

let shops = document.querySelectorAll(".card .basket");
for(let shop of shops){
	shop.addEventListener("click", addOrDelItem);
}