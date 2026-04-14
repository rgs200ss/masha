// ТЕКСТ
const phrases = [
  "Маша, с того дня многое встало на свои места.",
  "Маша, с тобой время ощущается иначе.",
  "Маша, рядом с тобой всё проще.",
  "Маша, ты стала частью моего дня.",
  "Маша, с тобой спокойно.",
  "Маша, рядом с тобой легко быть собой."
];

const textEl = document.getElementById("text");

let i = 0;
let p = 0;

function type() {
  if (i < phrases[p].length) {
    textEl.innerHTML += phrases[p][i];
    i++;
    setTimeout(type, 50);
  } else {
    setTimeout(() => {
      textEl.innerHTML = "";
      i = 0;
      p = (p + 1) % phrases.length;
      type();
    }, 2000);
  }
}

type();

// ДНИ
const start = new Date("2026-02-14");
const now = new Date();
const days = Math.floor((now - start) / (1000*60*60*24));
document.getElementById("days").innerText = days;

// МУЗЫКА
const music = document.getElementById("music");
let started = false;

window.addEventListener("click", () => {
  if (!started) {
    music.play();
    started = true;
  }
});

// ЧАСТИЦЫ
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

let particles = [];

for (let i = 0; i < 80; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2,
    s: Math.random() * 0.6 + 0.2
  });
}

function draw() {
  ctx.clearRect(0,0,canvas.width,canvas.height);

  for (let p of particles) {
    ctx.beginPath();
    ctx.fillStyle = "rgba(255,180,200,0.6)";
    ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
    ctx.fill();

    p.y += p.s;
    if (p.y > canvas.height) p.y = 0;
  }

  requestAnimationFrame(draw);
}

draw();
