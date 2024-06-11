// Ambil data dari file JSON
fetch("data/team.json")
  .then((response) => response.json())
  .then((data) => {
    const teamCards = data.map((member) => {
      return `
        <article class="team__card swiper-slide">
          <div class="team__image-content">
            <span class="team__image-content-overlay"></span>
            <div class="team__card-image">
              <img src="${member.img}" alt="" class="team__card-img">
            </div>
          </div>

          <div class="team__card-content">
            <h2 class="team__card-content-name">${member.name}</h2>
            <h2 class="team__card-content-role">${member.role}</h2>
            <p class="team__card-content-desc">
              ${member.desc}
            </p>
            <p class="team__card-content-prodi">
              ${member.prodi}
            </p>
            <a href="${member.linkedin}" class="team__card-content-button" target="_blank">
              <i class="ri-linkedin-box-fill"></i>
            </a>
          </div>
        </article>
      `;
    });

    const swiperWrapper = document.querySelector("#swiperWrapper");
    swiperWrapper.innerHTML = teamCards.join(""); // Efficiently join card HTML

    return new Promise((resolve) => {
      // Wait for elements to be added to DOM (optional)
      if (document.readyState === "complete") {
        resolve();
      } else {
        window.addEventListener("DOMContentLoaded", resolve);
      }
    });
  })
  .then(() => {
    let swiperPopular = new Swiper(".team__container", {
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
  })
  .catch((error) => console.error("Error:", error));
