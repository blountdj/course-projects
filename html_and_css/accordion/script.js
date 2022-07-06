const items = document.querySelectorAll(".item");

items.forEach(function (item) {
  item.addEventListener("click", toggleClass, false);
});

function toggleClass() {
  this.classList.toggle("open");

  let panel = this.querySelector(".hidden-box");
  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
    panel.style.paddingTop = "0px";
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
    panel.style.paddingTop = "40px";
  }
}
