const container = document.querySelector(".container")
const coffees = [
  { name: "Gatito de la suerte", image: "images/1.jpg" },
  { name: "Vaso animado", image: "images/2.jpg" },
  { name: "Difusor", image: "images/3.png" },
  { name: "Pop", image: "images/4.jpg" },
  { name: "Belleza", image: "images/5.jpg" },
  { name: "Porta Celular", image: "images/6.jpg" },
  { name: "Multicontacto", image: "images/7.jpg" },
  { name: "Disfraz Canino", image: "images/8.png" },
  { name: "Control", image: "images/9.png" },
]

const showCoffees = () => {
    let output = ""
    coffees.forEach(
      ({ name, image }) =>
        (output += `
                <div class="card">
                  <img class="card--avatar" src=${image} />
                  <h1 class="card--title">${name}</h1>
                  <a class="card--link" href="#">Comprar</a>
                </div>
                `)
    )
    container.innerHTML = output
  }
  
  document.addEventListener("DOMContentLoaded", showCoffees)

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }