var loading = document.querySelector("#loading");

function onSuccess(response){
  response.json().then( (data) => {
    loading.style.display = "none";
    let cards = document.querySelector("#cards");
    data.forEach((card) => {
      let div = document.createElement("div");
      div.classList.add("card");

      let title = document.createElement("a");
      title.classList.add("title");
      title.textContent = card.maker + " " + card.model;

      let price = document.createElement("div");
      price.textContent = card.price;
      price.classList.add("price");

      div.appendChild(title);
      div.appendChild(price);
      cards.appendChild(div);
    })
  });
}

function onError(error){
  console.log(error);
}

function load(){
  loading.style.display = "block";
  fetch("http://demo4296963.mockable.io/listCars").then(onSuccess, onError);
}

document.querySelector("button").addEventListener("click", load);