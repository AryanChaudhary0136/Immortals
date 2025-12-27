const startBtn = document.getElementById("startBtn");
const yearInput = document.getElementById("yearInput");

const inputScreen = document.getElementById("inputScreen");
const incidentScreen = document.getElementById("incidentScreen");
const finalScreen = document.getElementById("finalScreen");

const textEl = document.getElementById("text");

let filteredIncidents = [];
let index = 0;

startBtn.addEventListener("click", () => {
  const birthYear = parseInt(yearInput.value);

  if (isNaN(birthYear)) {
    alert("Please enter a valid year");
    return;
  }

  // filter incidents from birth year
  filteredIncidents = incidents.filter(i => i.year >= birthYear);

  inputScreen.classList.remove("active");
  incidentScreen.classList.add("active");

  showNextIncident();
});

function showNextIncident() {
  if (index >= filteredIncidents.length) {
    incidentScreen.classList.remove("active");
    finalScreen.classList.add("active");
    return;
  }

  const incident = filteredIncidents[index];
  const message = `${incident.year} — ${incident.text}`;

  typeText(message, () => {
    setTimeout(() => {
      textEl.innerHTML = "";
      index++;
      showNextIncident();
    }, 2000); // text stays before disappearing
  });
}

function typeText(text, callback) {
  let i = 0;
  textEl.innerHTML = "";

  const typing = setInterval(() => {
    textEl.innerHTML += text.charAt(i);
    i++;

    if (i >= text.length) {
      clearInterval(typing);
      callback();
    }
  }, 50); // typing speed
}