function randomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

document.getElementById("colorBtn").addEventListener("click", function () {
  const color1 = randomColor();
  const color2 = randomColor();
  document.body.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
});
