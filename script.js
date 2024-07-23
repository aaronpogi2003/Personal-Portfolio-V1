var nav = document.getElementById("navl");

function showMenu() {
  nav.style.right = "0";
}
function hideMenu() {
  nav.style.right = "-200px";
}

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      // Fixed the condition here
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });
      document
        .querySelector("header nav a[href*=" + id + "]")
        .classList.add("active");
    }
  });
};

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

const vid_baroque = document.querySelector(".card-baroque video");
const vid_classical = document.querySelector(".card-classical video");
const vid_romantic = document.querySelector(".card-romantic video");
const vid_modern = document.querySelector(".card-modern video");

function playRandomAudio() {
  const randomTime = Math.random() * audio.duration;
  audio.currentTime = randomTime;
  audio.play();
}

// Baroque
vid_baroque.addEventListener("mouseenter", () => {
  vid_baroque.play();
  audio.play();
  playRandomAudio();
});

vid_baroque.addEventListener("mouseleave", () => {
  vid_baroque.pause();
  audio.pause();
});

// Classical

vid_classical.addEventListener("mouseenter", () => {
  vid_classical.play();
  audio.play();
  playRandomAudio();
});

vid_classical.addEventListener("mouseleave", () => {
  vid_classical.pause();
  audio.pause();
});

// Romantic

vid_romantic.addEventListener("mouseenter", () => {
  vid_romantic.play();
  audio.play();
  playRandomAudio();
});

vid_romantic.addEventListener("mouseleave", () => {
  vid_romantic.pause();
  audio.pause();
});

// Modern

vid_modern.addEventListener("mouseenter", () => {
  vid_modern.play();
  audio.play();
  playRandomAudio();
});

vid_modern.addEventListener("mouseleave", () => {
  vid_modern.pause();
  audio.pause();
});
