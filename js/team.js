// Ambil data dari file JSON
fetch('data/team.json')
    .then(response => response.json())
    .then(data => {
        // Lakukan looping melalui data dan buat kartu untuk setiap anggota tim
        data.forEach(member => {
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
            document.querySelector('#swiperWrapper').innerHTML += teamCard;
        });

        // Inisialisasi Swiper setelah semua slide telah ditambahkan
        var swiper = new Swiper('.swiper-container', {
            // Konfigurasi Swiper Anda di sini
        });
    })
    .catch(error => console.error('Error:', error));
