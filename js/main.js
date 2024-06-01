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

// -----------------popup chart Description-----------------

function onClickPopUpc1() {
  Swal.fire({
    title: "Revenue Bike And Accecoris Over year",
    width: '50%',
    html: `
    <p style="font-size: large; text-align: justify;"> Looking at the annual revenue data, it shows that the total accessories revenue is quite far apart from bikes, in addition to more sales and lower prices and accessories sales figures, even in 2015, where the trend was high, revenue from accessories only touched 4,128,261 compared to with 14,742,208 bikes less than a third of the number, this figure shows the disparity between the revenue value between accessories and bikes.<p>
  `,
    padding: "2em",
    showClass: {
      popup: `
        animate__animated
        animate__fadeInUp
        animate__faster
      `,
    },
    hideClass: {
      popup: `
        animate__animated
        animate__fadeOutDown
        animate__faster
      `,
    },
  });
}

function onClickPopUpc2() {
  Swal.fire({
    title: "Revenue Bike And Accecoris By Country",
    width: '50%',
    html: `
    <p style="font-size: large; text-align: justify;"> The data above shows the amount of total revenue from each country, the largest revenue is America with a total revenue of 19,409,654 bikes and accessories of 5,251,088, while the country with the smallest total revenue of bikes is Canada with a total revenue of bikes of 4,262,618. The smallest accessories revenue is France with a figure of 1,337,060. The difference in the amount of revenue is influenced by various reasons, including: trends, services and supplies, behavioral patterns, and etc.<p>
  `,
    padding: "2em",
    showClass: {
      popup: `
        animate__animated
        animate__fadeInUp
        animate__faster
      `,
    },
    hideClass: {
      popup: `
        animate__animated
        animate__fadeOutDown
        animate__faster
      `,
    },
  });
}
