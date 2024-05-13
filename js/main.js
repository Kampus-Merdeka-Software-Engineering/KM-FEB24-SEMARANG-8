// -----show navbar-----
const navbarMenu = document.getElementById("navbar-menu");
const navbarOpen = document.getElementById("navbar-open");
const navbarClose = document.getElementById("navbar-close");

// -----show menu-----
if (navbarOpen) {
  navbarOpen.addEventListener("click", () => {
    navbarMenu.classList.add("show-menu");
  });
}

//-----hide menu-----
if (navbarClose) {
  navbarClose.addEventListener("click", () => {
    navbarMenu.classList.remove("show-menu");
  });
}

// -----hide menu setelah klik salah satu item
const navbarLink = document.querySelectorAll(".navbar__link");

function linkAction() {
  const navbarMenu = document.getElementById("navbar-menu");
  navbarMenu.classList.remove("show-menu");
}
navbarLink.forEach((n) => n.addEventListener("click", linkAction));

// -----show header while scroll >= 50% screen-----
function scrollHeader() {
  const header = document.getElementById("header");
  if (this.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

// -----swiper js-----
let swiperPopular = new Swiper(".popular__container", {
  loop: true,
  spaceBetween: 24,
  grabCursor: true,

  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    1024: {
      spaceBetween: 48,
    },
  },
});