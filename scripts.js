const hamburger = document.querySelector(".hamburger");
const lines = document.querySelectorAll(".line");
const mobileNav = document.querySelector(".links");
let toggle = 0;
function toggleNav() {
  if (toggle === 0) {
    lines[0].classList.remove("animate-toggleFirstReversed");
    lines[0].classList.add("animate-toggleFirst");
    lines[2].classList.remove("animate-toggleSecondReversed");
    lines[2].classList.add("animate-toggleSecond");
    lines[1].classList.remove("animate-shrinkReversed");
    lines[1].classList.add("animate-shrink");
    mobileNav.classList.toggle("-translate-x-full");

    toggle = 1;
  } else {
    lines[0].classList.remove("animate-toggleFirst");
    lines[0].classList.add("animate-toggleFirstReversed");
    lines[2].classList.remove("animate-toggleSecond");
    lines[2].classList.add("animate-toggleSecondReversed");
    lines[1].classList.remove("animate-shrink");
    lines[1].classList.add("animate-shrinkReversed");
    mobileNav.classList.toggle("-translate-x-full");
    toggle = 0;
  }
}
hamburger.addEventListener("click", toggleNav);

// image-slide

const buttons = document.querySelectorAll(".button");

buttons.forEach((button) =>
  button.addEventListener("click", () => {
    const offset = button.dataset.button === "next" ? 1 : -1;

    const slides = button
      .closest("[data-carousel")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]"); // to choose the element that currently has the data-active

    let newActive = [...slides.children].indexOf(activeSlide) + offset;
    console.log(newActive);

    if (newActive < 0) newActive = slides.children.length - 1;
    if (newActive >= slides.children.length) newActive = 0;

    slides.children[newActive].dataset.active = true;
    delete activeSlide.dataset.active;
  })
);

// shop counter

const buttonsShop = document.querySelectorAll(".btn-shop");
const shopCounter = document.querySelector("[data-number]");
const shopError = document.querySelector("[data-error]");
const mainBtn = document.querySelector("[data-mainBtn]");
console.log(mainBtn);
let counter = 0;

buttonsShop.forEach((button) =>
  button.addEventListener("click", function () {
    const offset = this.dataset.btn === "plus" ? 1 : -1;
    counter += offset;
    console.log(counter);
    counter < 0 ? (counter = 0) : counter;
    shopCounter.innerHTML = counter;
  })
);

mainBtn.addEventListener("click", () => {
  if (counter === 0) {
    window.navigator.vibrate(300);
    shopError.classList.remove("hidden");
  } else {
    shopError.classList.add("hidden");
  }
});
