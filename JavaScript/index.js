const flipCard1 = document.getElementById("c1");
const flipCard2 = document.getElementById("c2");
const flipCard3 = document.getElementById("c3");

//Flip cards

flipCard1.addEventListener("click", function () {
  document.getElementById("c1").style.transform = "rotateY(180deg)"; //CSS Rotation, Available at https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate[viewed Dec 12 2023].
  console.log(1);
});

flipCard2.addEventListener("click", function () {
  document.getElementById("c2").style.transform = "rotateY(180deg)";
  console.log(2);
});

flipCard3.addEventListener("click", function () {
  document.getElementById("c3").style.transform = "rotateY(180deg)";
  console.log(3);
});
