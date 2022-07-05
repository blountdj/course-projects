const items = document.querySelectorAll(".item");

items.forEach(function (item) {
  item.addEventListener("click", toggleClass, false);
});

function toggleClass() {
  this.classList.toggle("open");
}
