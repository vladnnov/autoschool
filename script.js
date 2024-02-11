const body = document.querySelector("body");
const menuButton = document.querySelector(".header-nav-button");

menuButton.addEventListener("click", function (evt) {
  body.classList.toggle("opened");
});

const swiper = new Swiper(".swiper-1", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination-1",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    834: {
      slidesPerView: 3,
      spaceBetween: 21,
    },
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  // },
});

const swiper2 = new Swiper(".swiper-2", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination-2",
  },

  breakpoints: {
    834: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const popupButtonClose = document.querySelector(".popup-button-close-btn");
const popup = document.querySelector(".popup");
const headerCtaBtn = document.querySelector(".header-cta-button");
const sectionCtaBtn = document.querySelector(".section-cta-button");

popupButtonClose.addEventListener("click", function (evt) {
  popup.classList.remove("open");
});

headerCtaBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("open");
});

sectionCtaBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("open");
});
