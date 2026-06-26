const raceDate = new Date("2026-08-15T06:00:00");
const daysElement = document.getElementById("days");

function updateCountdown() {
  const today = new Date();
  const difference = raceDate - today;
  const days = Math.max(0, Math.ceil(difference / (1000 * 60 * 60 * 24)));

  daysElement.textContent = String(days).padStart(2, "0");
}

updateCountdown();

const routes = {
  25: {
    title: "Ruta 25 km",
    description: "Ideal para principiantes o ciclistas recreativos. Recorrido urbano con baja dificultad.",
    difficulty: "Baja",
    water: "2",
    elevation: "250 m"
  },
  50: {
    title: "Ruta 50 km",
    description: "Ruta intermedia para ciclistas con experiencia básica. Combina zonas urbanas y subidas moderadas.",
    difficulty: "Media",
    water: "4",
    elevation: "620 m"
  },
  100: {
    title: "Ruta 100 km",
    description: "Ruta competitiva para ciclistas avanzados. Incluye mayor distancia, ascensos fuertes y mayor exigencia física.",
    difficulty: "Alta",
    water: "6",
    elevation: "1,250 m"
  }
};

const buttons = document.querySelectorAll(".route-btn");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const selectedRoute = routes[button.dataset.route];

    document.getElementById("route-title").textContent = selectedRoute.title;
    document.getElementById("route-description").textContent = selectedRoute.description;
    document.getElementById("difficulty").textContent = selectedRoute.difficulty;
    document.getElementById("water").textContent = selectedRoute.water;
    document.getElementById("elevation").textContent = selectedRoute.elevation;
  });
});

const form = document.querySelector(".form");

form.addEventListener("submit", event => {
  event.preventDefault();
  alert("Inscripción enviada correctamente. Pronto recibirás más información por correo.");
});