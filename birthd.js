const linesText = [
  "We learned together once.",
  "Life took us different ways.",
  "Time passed quietly.",
  "And somehow… we found our way back."
];

const linesDiv = document.getElementById("lines");
const startBtn = document.getElementById("startBtn");
const startScreen = document.getElementById("startScreen");
const messageScreen = document.getElementById("messageScreen");
const birthdayText = document.getElementById("birthdayText");
const continueBtn = document.getElementById("continueBtn");
const story = document.getElementById("story");

startBtn.onclick = () => {
  startScreen.style.display = "none";
  messageScreen.classList.remove("hidden");
  typeLines(0);
};

function typeLines(index) {
  if (index >= linesText.length) {
    birthdayText.classList.remove("hidden");
    continueBtn.classList.remove("hidden");
    return;
  }

  const p = document.createElement("p");
  p.id = "line";
  linesDiv.appendChild(p);

  let i = 0;
  const typing = setInterval(() => {
    p.textContent += linesText[index][i];
    i++;
    if (i >= linesText[index].length) {
      clearInterval(typing);
      setTimeout(() => typeLines(index + 1), 700);
    }
  }, 50);
}

continueBtn.onclick = () => {
  messageScreen.style.display = "none";
  continueBtn.style.display = "none";
  story.classList.remove("hidden");

  const intro = document.querySelector(".intro");
  setTimeout(() => intro.style.opacity = 1, 500);

  const cards = document.querySelectorAll(".card");
  cards.forEach((card, i) => {
    setTimeout(() => {
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }, 1500 + i * 1200);
  });
};
