// Elements
const arrows = document.querySelectorAll(".arrow");
const circles = document.querySelectorAll(".circle");
const slides = document.querySelectorAll(".item");

// Variables
let curSlide = 0;
const maxSlide = slides.length - 1;

//  Functions
function arrowClick() {
  if (this.getAttribute("data_direction") === "left") {
    if (curSlide === 0) {
      curSlide = maxSlide;
    } else {
      curSlide--;
    }
    goToSlide();
  }
  if (this.getAttribute("data_direction") === "right") {
    if (curSlide === maxSlide) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide();
  }
  circles.forEach((circle) => circle.classList.remove("active"));
  circles[curSlide].classList.add("active");
}

function circleClick() {
  curSlide = Number(this.getAttribute("data-id"));
  goToSlide();
  circles.forEach((circle) => circle.classList.remove("active"));
  this.classList.add("active");
}

const goToSlide = function () {
  slides.forEach(function (s, i) {
    s.style.transform = `translateX(${120 * (i - curSlide)}%)`;
  });
};

//   Event Listeners
arrows.forEach(function (arrow) {
  arrow.addEventListener("click", arrowClick);
});

circles.forEach(function (circle) {
  circle.addEventListener("click", circleClick);
});
