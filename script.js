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
    nextEl: ".swiper-button-next-1",
    prevEl: ".swiper-button-prev-1",
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 21,
    },

    1440: {
      slidesPerView: 3,
      spaceBetween: 65,
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
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },

    1440: {
      slidesPerView: 3,
      spaceBetween: 24,
      centeredSlides: true,
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next-2",
    prevEl: ".swiper-button-prev-2",
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
