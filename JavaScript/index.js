const flipCard1 = document.getElementById("c1");
const flipCard2 = document.getElementById("c2");
const flipCard3 = document.getElementById("c3");
const div1 = document.getElementById("1");
const div2 = document.getElementById("2");
const div3 = document.getElementById("3");

//Flip cards and change image.

flipCard1.addEventListener("click", function () {
  document.getElementById("c1").style.transform = "rotateY(180deg)"; //CSS Rotation, Available at https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate[viewed Dec 12 2023].
  div1.innerHTML = `<img
  class="card 1"
  id="c1"
  src="/Images/GAMEHUB-min.jpg"
  alt="A screenshot of my first website"`;
  console.log(1);
});

flipCard2.addEventListener("click", function () {
  document.getElementById("c2").style.transform = "rotateY(180deg)";
  div2.innerHTML = `<img
  class="card 2"
  id="c2"
  src="/Images/Comscimus-min.jpg"
  alt="A screenshot of my second website"`;
  console.log(2);
});

flipCard3.addEventListener("click", function () {
  document.getElementById("c3").style.transform = "rotateY(180deg)";
  div3.innerHTML = `<img
  class="card 3"
  id="c3"
  src="/Images/ProjectExam-min.jpg"
  alt="A screenshot of my third website"`;
  console.log(3);
});
