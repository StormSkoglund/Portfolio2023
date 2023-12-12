const flipCard1 = document.getElementById("c1");
const flipCard2 = document.getElementById("c2");
const flipCard3 = document.getElementById("c3");

flipCard1.addEventListener(onclick, function () {
  flipCard1.style.transform = "rotate3d(0, 1, 0.5, 3.142rad);";
  console.log(1);
});

flipCard2.addEventListener(onclick, function () {
  flipCard1.style.transform = "rotate3d(0, 1, 0.5, 3.142rad);";
  console.log(2);
});

flipCard3.addEventListener(onclick, function () {
  flipCard1.style.transform = "rotate3d(0, 1, 0.5, 3.142rad);";
  console.log(3);
});
