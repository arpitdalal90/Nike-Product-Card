const container = document.querySelector(".container");
const Color1 = document.querySelector(".color1");
const Color2 = document.querySelector(".color2");
const Color1Scale = document.querySelector(".color1");
const Color2Scale = document.querySelector(".color2");
 
Color2.addEventListener("click", () => {
  container.classList.add("change");
});

Color1.addEventListener("click", () => {
  container.classList.remove("change");
});

Color1Scale.addEventListener("click", () => {
  container.classList.add("changeColor");
});

Color2Scale.addEventListener("click", () => {
  container.classList.remove("changeColor");
});



