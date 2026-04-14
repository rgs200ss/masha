* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: system-ui, sans-serif;
}

body {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(circle at top, #1b1b2f, #050505);
  overflow: hidden;
  color: white;
}

.bg {
  position: absolute;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle at 30% 30%, rgba(255,80,120,0.08), transparent 40%);
}

canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.card {
  z-index: 2;
  text-align: center;
  padding: 40px 50px;
  border-radius: 24px;
  background: rgba(255,255,255,0.05);
  backdrop-filter: blur(20px);
  box-shadow: 0 0 60px rgba(255,80,120,0.15);
  max-width: 420px;
}

.heart {
  width: 80px;
  fill: #ff4f81;
  margin-bottom: 20px;
  animation: pulse 3s infinite;
}

@keyframes pulse {
  0%,100% { transform: scale(1); }
  50% { transform: scale(1.12); }
}

h1 {
  font-size: 20px;
  margin-bottom: 15px;
  min-height: 50px;
}

.counter {
  font-size: 14px;
  opacity: 0.8;
  margin-bottom: 20px;
}

.counter span {
  color: #ff7aa2;
}

/* КОТЫ */
.cats {
  margin-top: 20px;
}

.cats-svg {
  width: 100%;
}

#cat-left, #cat-right {
  fill: #ff7aa2;
}

#tail-left, #tail-right {
  fill: none;
  stroke: #ff7aa2;
  stroke-width: 10;
  stroke-linecap: round;
}

/* движение */
#cat-left { animation: left 4s forwards ease-out; }
#cat-right { animation: right 4s forwards ease-out; }

@keyframes left {
  from { transform: translateX(-200px); }
  to { transform: translateX(0); }
}

@keyframes right {
  from { transform: translateX(200px); }
  to { transform: translateX(0); }
}

/* хвосты в сердце */
#tail-left {
  animation: tailL 2s forwards ease-out;
  animation-delay: 4s;
}

#tail-right {
  animation: tailR 2s forwards ease-out;
  animation-delay: 4s;
}

@keyframes tailL {
  to {
    d: path("M440 185 C520 30 600 30 500 120");
  }
}

@keyframes tailR {
  to {
    d: path("M560 185 C480 30 400 30 500 120");
  }
}

/* MOBILE */
@media (max-width: 768px) {
  .card {
    width: 90%;
    padding: 25px;
  }

  h1 {
    font-size: 16px;
  }

  .heart {
    width: 60px;
  }
}
