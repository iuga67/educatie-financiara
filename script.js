let scor = 0;

const butonStart = document.getElementById("start");
const zonaScor = document.getElementById("scor");
const zonaIntrebare = document.getElementById("intrebare");
const zonaRaspunsuri = document.getElementById("raspunsuri");
const zonaMesaj = document.getElementById("mesaj");

const intrebare = {
  text: "Ce înseamnă să economisești bani?",
  variante: [
    "Să cheltuiești toți banii",
    "Să păstrezi bani pentru viitor",
    "Să împrumuți bani"
  ],
  corect: 1
};

butonStart.addEventListener("click", function () {
  butonStart.style.display = "none";
  afiseazaIntrebare();
});

function afiseazaIntrebare() {
  zonaIntrebare.textContent = intrebare.text;

  for (let i = 0; i < intrebare.variante.length; i++) {
    const buton = document.createElement("button");
    buton.textContent = intrebare.variante[i];

    buton.addEventListener("click", function () {
      verifica(i);
    });

    zonaRaspunsuri.appendChild(buton);
  }
}

function verifica(alegere) {
  if (alegere === intrebare.corect) {
    scor = scor + 10;
    zonaMesaj.textContent = "Corect! +10 puncte";
  } else {
    zonaMesaj.textContent =
      "Nu chiar. Răspunsul corect era: " +
      intrebare.variante[intrebare.corect];
  }

  zonaScor.textContent = "⭐ Scor: " + scor;
}