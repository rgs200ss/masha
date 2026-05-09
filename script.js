// ПУЛЬС СИСТЕМЫ
const pulseEl = document.getElementById("pulse");

// КИБЕР-ШУМ
const noiseEl = document.getElementById("noise");

let state = false;

const chars = ["@", "#", "$", "%", "&", "*", "0", "1", "x", "+"];

function generateNoise() {
  let str = "";
  for (let i = 0; i < 10; i++) {
    str += chars[Math.floor(Math.random() * chars.length)];
  }
  return str;
}

// пульс (сердцебиение)
setInterval(() => {
  state = !state;
  pulseEl.innerText = state ? "●" : "○";
}, 600);

// шум системы
setInterval(() => {
  noiseEl.innerText = generateNoise();
}, 120);

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
