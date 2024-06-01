// // Ambil data dari file JSON
// fetch("data/team.json")
//   .then((response) => response.json())
//   .then((data) => {
//     // Lakukan looping melalui data dan buat kartu untuk setiap anggota tim
//     data.forEach((member) => {
//       let teamCard = `
//                 <article class="team__card swiper-slide">
//                     <div class="team__image-content">
//                         <span class="team__image-content-overlay"></span>
//                         <div class="team__card-image">
//                             <img src="${member.img}" alt="" class="team__card-img">
//                         </div>
//                     </div>

//                     <div class="team__card-content">
//                         <h2 class="team__card-content-name">${member.name}</h2>
//                         <h2 class="team__card-content-role">${member.role}</h2>
//                         <p class="team__card-content-desc">
//                             ${member.desc}
//                         </p>
//                         <p class="team__card-content-prodi">
//                             ${member.prodi}
//                         </p>
//                         <a href="${member.linkedin}" class="team__card-content-button">
//                             <i class="ri-linkedin-box-fill"></i>
//                         </a>
//                     </div>
//                 </article>
//             `;

//       // Tambahkan kartu ke dalam DOM
//       document.querySelector("#swiperWrapper").innerHTML += teamCard;
//     });

//     // Inisialisasi Swiper setelah slide ditambahkan
//     let swiperPopular = new Swiper(".team__container", {
//       loop: true,
//       spaceBetween: 24,
//       grabCursor: true,

//       slidesPerView: "auto",
//       pagination: {
//         el: ".swiper-pagination",
//         dynamicBullets: true,
//       },
//       breakpoints: {
//         768: {
//           slidesPerView: 3,
//         },
//         1024: {
//           spaceBetween: 48,
//         },
//       },
//     });
//   })
//   .catch((error) => console.error("Error:", error));

// Ambil data dari file JSON
fetch("data/team.json")
  .then((response) => response.json())
  .then((data) => {
    // Lakukan looping melalui data dan buat kartu untuk setiap anggota tim
    data.forEach((member) => {
      let teamCard = `
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
                        <a href="${member.linkedin}" class="team__card-content-button">
                            <i class="ri-linkedin-box-fill"></i>
                        </a>
                    </div>
                </article>
            `;

      // Tambahkan kartu ke dalam DOM
      document.querySelector("#swiperWrapper").innerHTML += teamCard;
    });

    // Pastikan untuk menunggu semua kartu ditambahkan sebelum menginisialisasi Swiper
    setTimeout(function() {
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
    }, 0);
  })
  .catch((error) => console.error("Error:", error));
