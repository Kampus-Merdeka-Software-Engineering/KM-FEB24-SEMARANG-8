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

/*-----------show scroll up-------------*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);