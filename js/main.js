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
    width: 700,
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
    width: 700,
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

function onClickPopUpc3() {
  Swal.fire({
    title: "Bike Sales per Subcategory",
    width: 700,
    html: `
    <p style="font-size: large; text-align: justify;"> Sales in the bikes category always show significant figures, namely road bikes have the highest sales, then mountain bikes, and the smallest are touring bikes. The highest sales of road bikes occurred in 2015 with 4,180 units and the lowest in 2013 with 2,756 units. Then the highest sales of mountain bikes occurred in 2015 with 3,114 units and the lowest in 2012 with 1,228 units. Then the highest sales of touring bikes occurred in 2016 with 1,565 units. units and the lowest in 2011 and 2012 with 0 unit sales. The sales volume of bikes is based on the function obtained. Road bikes have models that are popular, especially for mountain bikes for use in the highlands, while touring bikes are more suitable for people to use motorized vehicles.<p>
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

function onClickPopUpc4() {
  Swal.fire({
    title: "Bike Sales by Age Group",
    width: 700,
    html: `
    <p style="font-size: large; text-align: justify;"> The chart above shows the amount of bicycle sales based on age group. It is known that the largest sales were obtained by adults (35-64) 48.3% with the number 17,482, then young adults (25-34) 37.7% with the number 13,642, then youth (<25) with a figure of 4,997, and seniors (64+) 0.2% with only 80The average number of bicycle users in the workforce can be based on the fact that it can be reached at a very cheap price, bicycles also reduce traffic jams, save fuel, reduce pollution, and make the body healthy, while seniors experience difficulties in using bicycles and safety when using them.<p>
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

function onClickPopUpc5() {
  Swal.fire({
    title: "Bike Sales by Gender",
    width: 700,
    html: `
    <p style="font-size: large; text-align: justify;"> Gender comparison in bicycle sales per year in the chart above shows the largest accumulated comparison of bicycle sales, namely male at 18,262 and female at 15,250 compared to 3,012. or 1/15 on the scale shows that men are more demanding in the use of bicycles and the identification of bicycles with male.<p>
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

function onClickPopUpc6() {
  Swal.fire({
    title: "Bike Sales by Country",
    width: 700,
    html: `
    <p style="font-size: large; text-align: justify;"> Bikes sales per country are the same as the total revenue between bikes and accessories in the previous chart where the highest sales are the United States with total sales revenue of 24,661,062 and the lowest is Canada at 6,258,387. In increasing sales levels from the previous 5 years according to the data above So various applications are needed, including providing various new additional models per sub category with analysis according to age and gender in each country, maintaining relationships with customers, implementing cross selling, providing a credible and efficient online sales platform, offering free shipping, reviews and feedback. , attractive promotions, and always developing ways to increase sales by knowing the market and the ability to analyze existing data.<p>
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


// Anime JS

var textWrapper = document.querySelector('.team_title');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.team_title .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.team_title .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 30 * i
  });


  // Wrap every letter in a span
var textWrapper = document.querySelector('.anime_footer');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.anime_footer .letter',
    translateY: [-100,0],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 30 * i
  }).add({
    targets: '.anime_footer',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });



  // Loading

  onload = function() {
    let id = document.getElementById("loading-element")
    let loading = document.createElement("div")

    loading.innerHTML = `
<h2 class="loading-text">Loading Content</h2>
<h2 class="loading-text2">Wait a seconds</h2>
<div class="spinner">
  <div class="bounce1"></div>
  <div class="bounce2"></div>
  <div class="bounce3"></div>
</div>
<h2 class="loading-text3">Presented by Team 8 Section Semarang</h2>
`;

    id.appendChild(loading)

    let loaded = setInterval(() => {

    }, 1000)

    setTimeout(() => {
        clearInterval(loaded)
        loading.style.display = 'none'; 
        document.getElementById('main-content').style.display = 'block';
    }, 4000)
}