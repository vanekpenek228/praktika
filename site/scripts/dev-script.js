"use strict";
// плавный скролл до якоря
const anchors = [].slice.call(document.querySelectorAll('a[href^="#"]')),
  animationTime = 300,
  framesCount = 20;

anchors.forEach(function (item) {
  item.addEventListener("click", function (e) {
    e.preventDefault();

    let coordY =
      document.querySelector(item.getAttribute("href")).getBoundingClientRect()
        .top + window.pageYOffset;

    let scroller = setInterval(function () {
      let scrollBy = coordY / framesCount;

      if (
        scrollBy > window.pageYOffset - coordY &&
        window.innerHeight + window.pageYOffset < document.body.offsetHeight
      ) {
        window.scrollBy(0, scrollBy);
      } else {
        window.scrollTo(0, coordY);
        clearInterval(scroller);
      }
    }, animationTime / framesCount);
  });
});

let burger = document.querySelector(".st-burger");
let menu = document.querySelector(".st-header__nav");
let menuLinks = menu.querySelectorAll(".st-header__nav ul li");

burger.addEventListener("click", function () {
    burger.classList.toggle("burger--active");
    menu.classList.toggle("st-header__nav--active");
    document.body.classList.toggle("stop-scroll");
  }
);

menuLinks.forEach(function (el) {
  el.addEventListener("click", function () {
    burger.classList.remove("burger--active");
    menu.classList.remove("st-header__nav--active");
    document.body.classList.remove("stop-scroll");
  });
});
