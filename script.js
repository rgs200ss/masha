// ===== ТЕКСТ (НЕСКОЛЬКО ФРАЗ) =====
const phrases = [
  "Маша, с того дня многое встало на свои места.",
  "Маша, с тобой время ощущается иначе.",
  "Маша, рядом с тобой всё проще.",
  "Маша, ты стала частью моего дня.",
  "Маша, с тобой спокойно.",
  "Маша, рядом с тобой легко быть собой."
];

const textEl = document.getElementById("text");
let phraseIndex = 0;
let charIndex = 0;
const speed = 45;
const pauseBetween = 2200;

function typePhrase() {
  if (charIndex < phrases[phraseIndex].length) {
    textEl.innerHTML += phrases[phraseIndex][charIndex];
    charIndex++;
    setTimeout(typePhrase, speed);
  } else {
    setTimeout(() => {
      textEl.innerHTML = "";
      charIndex = 0;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typePhrase();
    }, pauseBetween);
  }
}

typePhrase();

// ===== СЧЁТЧИК ДНЕЙ =====
const startDate = new Date("2026-02-14");
const now = new Date();
const diffTime = now - startDate;
const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
document.getElementById("days").innerText = days;

// ===== МУЗЫКА (ПО ПЕРВОМУ КЛИКУ) =====
const music = document.getElementById("music");
music.volume = 0.5;
let musicStarted = false;

window.addEventListener("click", () => {
  if (!musicStarted) {
    music.play();
    musicStarted = true;
  }
}, { once: true });

// ===== ЧАСТИЦЫ-СВЕТ =====
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

const particles = [];
const PARTICLE_COUNT = 80;

for (let i = 0; i < PARTICLE_COUNT; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.5 + 0.5,
    speed: Math.random() * 0.6 + 0.2,
    alpha: Math.random() * 0.6 + 0.2
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let p of particles) {
    ctx.beginPath();
    ctx.fillStyle = `rgba(255, 180, 200, ${p.alpha})`;
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();

    p.y += p.speed;
    if (p.y > canvas.height) {
      p.y = -10;
      p.x = Math.random() * canvas.width;
    }
  }

  requestAnimationFrame(draw);
}

draw();