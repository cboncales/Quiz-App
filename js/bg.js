const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const characters = "0101010101010101";
const fontSize = 16;
const columns = canvas.width / fontSize;

const drops = Array.from({ length: columns }).fill(1);

function drawMatrix() {
  ctx.fillStyle = "rgba(13, 13, 13, 0.1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#00ff00";
  ctx.font = `${fontSize}px monospace`;

  drops.forEach((y, index) => {
    const text = characters.charAt(
      Math.floor(Math.random() * characters.length)
    );

    const x = index * fontSize;
    ctx.fillText(text, x, y * fontSize);

    if (y * fontSize > canvas.height && Math.random() > 0.975) {
      drops[index] = 0;
    }
    drops[index]++;
  });
}

setInterval(drawMatrix, 50);
