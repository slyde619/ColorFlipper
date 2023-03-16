// Select btn and color
const btn = document.querySelector("#btn");
const color = document.querySelector(".color");
// Array of fixed colors
const colors = ["red", "#89da11", "#ddd", "#cc212a", "rgb(100, 233, 44)"];
// Add eventListener to btn and generate random indexes of colors
btn.addEventListener("click", function () {
  const randomNum = randomNumber();
  // select body to change bgColor
  document.body.style.backgroundColor = colors[randomNum];
  color.textContent = colors[randomNum];
  //   check if index includes "#"
  if (colors[randomNum].includes("#")) {
    let newStr = color.textContent.toUpperCase();
    color.textContent = newStr;
  }
});

// Random Number Generator
function randomNumber() {
  return Math.floor(Math.random() * colors.length);
}
