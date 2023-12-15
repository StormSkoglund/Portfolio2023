const flipCard1 = document.getElementById("c1");
const flipCard2 = document.getElementById("c2");
const flipCard3 = document.getElementById("c3");
const div1 = document.getElementById("1");
const div2 = document.getElementById("2");
const div3 = document.getElementById("3");
const dropdown = document.getElementById("under");

//Flip cards and change image.

flipCard1.addEventListener("mousedown", function () {
  document.getElementById("c1").style.transform = "rotateY(180deg)"; //CSS Rotation, Available at https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate[viewed Dec 12 2023].
});

//Render other side of card
flipCard1.addEventListener("mouseup", function () {
  div1.innerHTML = `<div class="card-click">
  <img
    src="/Images/GAMEHUB-min.png"
    alt="Screenshot of my first project"
    class="image"
  />
  <div class="text">
    <h2>Game Hub</h2>
    <p>My first project</p>
    <a href="">GitHub</a> <a href="">Netlify</a>
  </div>
</div>`;
});

flipCard2.addEventListener("mousedown", function () {
  document.getElementById("c2").style.transform = "rotateY(180deg)";
  console.log(2);
});

flipCard2.addEventListener("mouseup", function () {
  div2.innerHTML = `<div class="card-click">
  <img
    src="/Images/Comscimus-min.png"
    alt="Screenshot of my second project"
    class="image"
  />
  <div class="text">
    <h2>The Community Science Museum</h2>
    <p>My second project</p>
    <a href="">GitHub</a> <a href="">Netlify</a>
  </div>
</div>`;
});

flipCard3.addEventListener("mousedown", function () {
  document.getElementById("c3").style.transform = "rotateY(180deg)";
  console.log(3);
});

flipCard3.addEventListener("mouseup", function () {
  div3.innerHTML = `<div class="card-click">
  <img
    src="/Images/ProjectExam-min.png"
    alt="Screenshot of my third project"
    class="image"
  />
  <div class="text">
    <h2>The Project Exam</h2>
    <p>My third project</p>
    <a href="">GitHub</a> <a href="">Netlify</a>
  </div>
</div>`;
});

//dropdown menu for bio

dropdown.addEventListener("click", function () {});
