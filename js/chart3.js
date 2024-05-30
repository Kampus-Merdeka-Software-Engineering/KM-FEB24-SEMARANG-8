document.addEventListener('DOMContentLoaded', function() {
    let myChart3; // Membuat variabel di luar fungsi

    fetch('data/dataset2.json')
        .then(response => response.json())
        .then(data => {
            console.log("data loaded", data);

            // Fungsi untuk mengupdate chart
            const updateChart = (year) => {
                const filteredData = year !== "All Years" ? data.filter(item => item.Year === year && item.Product_Category === "Bikes") : data.filter(item => item.Product_Category === "Bikes");
                const subCategories = Array.from(new Set(filteredData.map(item => item.Sub_Category)));

                const profits = subCategories.map(subCategory => {
                    const items = filteredData.filter(d => d.Sub_Category === subCategory);
                    return items.reduce((total, item) => total + parseInt(item.Profit), 0);
                });

                // Menghancurkan chart sebelumnya jika ada
                if (myChart3) {
                    myChart3.destroy();
                }

                // Membuat polar area chart
                const ctx = document.getElementById('myChart3').getContext('2d');
                myChart3 = new Chart(ctx, {
                    type: 'polarArea',
                    data: {
                        labels: subCategories,
                        datasets: [{
                            label: 'Bike Sales per Subcategory',
                            data: profits,
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)'
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        responsive: true,
                        plugins: {
                            legend: {
                                position: 'top',
                                labels: {
                                    font: {
                                        family: 'Exo',
                                        size: 12,
                                        style: 'normal'
                                    },
                                    boxWidth: 10, // Mengatur lebar kotak warna di legenda
                                    padding: 10 // Menambah padding untuk memastikan semua item legenda dalam satu baris
                                }
                            },
                            tooltip: {
                                backgroundColor: 'rgba(0, 0, 0, 0.7)', // Menambahkan background tooltip
                                bodyFont: {
                                    size: 12,
                                    // family: 'Exo'
                                },
                                callbacks: {
                                    label: function(context) {
                                        const label = context.label || '';
                                        const value = context.raw || 0;
                                        return `${label}: $${value.toLocaleString()}`;
                                    }
                                }
                            },
                            title: {
                                display: true,
                                text: 'Bike Sales Per Sub Category',
                                color: "#e8af30",
                                font: {
                                    family: 'Exo',
                                    size: 18,
                                    style: 'bold'
                                }
                            }
                        },
                        scales: {
                            r: {
                                ticks: {
                                    beginAtZero: true,
                                    backdropColor: 'rgba(0, 0, 0, 0)' // Menghilangkan background dari satuan angka
                                },
                                grid: {
                                    color: "rgba(211, 211, 211, 0.1)" // Warna grid diubah menjadi lebih transparan
                                }
                            }
                        }
                    }
                });
                console.log("chart created");
            };

            // Menampilkan keseluruhan data sebelum difilter
            updateChart("All Years");

            // Event listener untuk tombol apply
            document.getElementById("apply").addEventListener("click", function() {
                const dropdownYear = document.getElementById("dropdownYear");
                const selectedYear = dropdownYear.value;
                updateChart(selectedYear);
            });
        })
        .catch(error => console.error("Error loading data:", error));
});
