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
//                         <button class="team__card-content-button"><a href="${member.linkedin}">Go to Linkedin</a></button>
//                     </div>
//                 </article>
//             `;

//       // Tambahkan kartu ke dalam DOM
//       document.querySelector("#swiperWrapper").innerHTML += teamCard;
//     });

//     // Inisialisasi Swiper setelah semua slide telah ditambahkan
//     var swiper = new Swiper(".swiper-container", {
//       // Konfigurasi Swiper Anda di sini
//     });
//   })
//   .catch((error) => console.error("Error:", error));

// --------------------------
// Ambil data dari file JSON
// fetch("data/team.json")
//   .then((response) => response.json())
//   .then((data) => {
//     // Inisialisasi Swiper sebelum slide ditambahkan
//     var swiper = new Swiper(".swiper-container", {
//       // Konfigurasi Swiper Anda di sini
//     });

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
//                         <button class="team__card-content-button"><a href="${member.linkedin}">Go to Linkedin</a></button>
//                     </div>
//                 </article>
//             `;

//       // Tambahkan kartu ke dalam DOM
//       document.querySelector("#swiperWrapper").innerHTML += teamCard;
//     });

//     // Perbarui Swiper setelah semua slide telah ditambahkan
//     swiper.update();
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
                        <button class="team__card-content-button"><a href="${member.linkedin}">Go to Linkedin</a></button>
                    </div>
                </article>
            `;

      // Tambahkan kartu ke dalam DOM
      document.querySelector("#swiperWrapper").innerHTML += teamCard;
    });

    // Inisialisasi Swiper setelah slide ditambahkan
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
