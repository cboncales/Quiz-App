const feedbackContainer = document.getElementById("answer-feedback");

let isDown = false;
let startY;
let scrollTop;

feedbackContainer.addEventListener("mousedown", (e) => {
  isDown = true;
  feedbackContainer.classList.add("cursor-grabbing");
  startY = e.pageY - feedbackContainer.offsetTop;
  scrollTop = feedbackContainer.scrollTop;
});

feedbackContainer.addEventListener("mouseleave", () => {
  isDown = false;
  feedbackContainer.classList.remove("cursor-grabbing");
});

feedbackContainer.addEventListener("mouseup", () => {
  isDown = false;
  feedbackContainer.classList.remove("cursor-grabbing");
});

feedbackContainer.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const y = e.pageY - feedbackContainer.offsetTop;
  const walk = (y - startY) * 1; // Adjust scrolling speed
  feedbackContainer.scrollTop = scrollTop - walk;
});
