const flipCard1 = document.getElementById("c1");
const flipCard2 = document.getElementById("c2");
const flipCard3 = document.getElementById("c3");
const div1 = document.getElementById("1");
const div2 = document.getElementById("2");
const div3 = document.getElementById("3");
const dropdown = document.getElementById("under");
const bioContent = document.querySelector(".bio-click");
const bioStyling = document.getElementById("bio-click");

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
    <p>Made with HTML and CSS, JavaScript was added later on.</p>
    <a href="https://github.com/StormSkoglund/Interaction-Design_CA/tree/CMS/Javascript">Github</a> <a href="https://cms-ca-skoglund.netlify.app/">Netlify</a>
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
    <p>Made exclusively with HTML and CSS, no javascript.</p>
    <a href="https://github.com/StormSkoglund/Semester_Project_1">Github</a> <a href="https://monumental-toffee-0be25e.netlify.app/">Netlify</a>
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
    <p>Made with HTML, CSS and JavaScript.</p>
    <a href="https://github.com/Noroff-FEU-Assignments/project-exam-1-StormSkoglund">Github</a> <a href="https://project-exam-1-fall23.netlify.app/">Netlify</a>
  </div>
</div>`;
});

//dropdown menu for bio

dropdown.addEventListener("click", function () {
  document.getElementById("under").style.display = "none";
  bioStyling.style.display = "block";
  bioContent.innerHTML = `<h2 class="h2-bio">
  Hi, my name is Alex and I’m passionate about Frontend Development.
</h2>
<p class="me-p">
  For the longest time, I felt like I was missing a vital part of my
  life, until I discovered that my urge to be creative wasn't being
  fully fulfilled.
</p>
<p class="me-p">
  I worked as a field archaeologist when I realized that I needed to
  pursue my passion, while I still had the opportunity. Perhaps it was
  the main theme of my job back then, time itself, that triggered me,
  but I don't know for sure.
</p>
<p class="me-p">
  Nevertheless, one thing led to another and I applied for the 2-year
  online Frontend Development course, available through Noroff. So here
  I am, one year in, and you are now looking at my portfolio, which
  demonstrates the creative journey I have been on.
</p>
<h2 class="h2-me-about">About The Projects</h2>
<p class="me-p">
  This portfolio consists of the three main projects I have created
  throughout the one year I have been studying frontend so far.
</p>
<p class="me-p">
  The first two projects consisted solely of HTML and CSS, though I
  added JavaScript to the first project at a later point. The third
  project was the first one where I combined HTML, CSS, and JavaScript
  from the beginning. Therefore, I found it much easier to both design
  and program a site as I originally had intended.
</p>
<p class="me-p">
  The first project lack some of the fine-tuning and attention to
  detail that the other projects received. Some of the features in the
  first project serve only as placeholders for now.
</p>
<img
  src="/Images/mememe-min-min.jpg"
  alt="A profile picture of me"
  class="me"
/>
<a href="https://github.com/StormSkoglund">My Github Profile</a> <a href="https://www.linkedin.com/in/alex-storm-skoglund-13764372/">My LinkedIn Profile</a>`;
});
