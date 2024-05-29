document.addEventListener('DOMContentLoaded', function() {
    // Mendapatkan data JSON dari file
    fetch('/data/3_bike_sales_per_subcategory.json')
        .then(response => response.json())
        .then(data => {
            // Proses data JSON
            const labels = data.map(item => item.Sub_Category);
            const profits = data.map(item => parseInt(item.Jumlah_profit, 10));

            // Membuat polar area chart
            const ctx = document.getElementById('myChart3').getContext('2d');
            const salesChart = new Chart(ctx, {
                type: 'polarArea',
                data: {
                    labels: labels,
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
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});
