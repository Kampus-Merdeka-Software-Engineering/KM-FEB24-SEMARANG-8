document.addEventListener("DOMContentLoaded", function () {
    fetch("data/1_revenue bike & acc over year.json")
    .then(response => response.json())
    .then(data => {
        console.log("data loaded", data);
        
        // Mengelompokkan data berdasarkan kategori
        const years = Array.from(new Set(data.map(item => item.Year)));
        console.log("years", years);

        const bikesData = years.map(year => {
            const item = data.find(d => d.Year === year && d.Product_Category === "Bikes");
            return item ? parseInt(item.Total_revenue) : null;
        });
        console.log("bikesData", bikesData);

        const accessoriesData = years.map(year => {
            const item = data.find(d => d.Year === year && d.Product_Category === "Accessories");
            return item ? parseInt(item.Total_revenue) : null;
        });
        console.log("accessoriesData", accessoriesData);

        // Membuat grafik dengan Chart.js
        const ctx = document.getElementById("myChart1").getContext("2d");
        const myChart1 = new Chart(ctx, {
            type: "line",
            data: {
                labels: years,
                datasets: [
                    {
                        label: "Bikes",
                        data: bikesData,
                        borderColor: "rgba(54, 162, 235, 1)",
                        borderWidth: 1,
                        fill: false
                    },
                    {
                        label: "Accessories",
                        data: accessoriesData,
                        borderColor: "rgba(255, 99, 132, 1)",
                        borderWidth: 1,
                        fill: false
                    }
                ]
            },
            options: {
                plugins: {
                    title: {
                      display: true,
                      text: 'Total Revenue per Year',
                      color: "#e8af30",
                      font: {
                          size: 18,
                          family: 'Exo',
                          style: 'bold',
                          lineHeight: 1.2,
                      }
                    },
                    legend: {
                        labels: {
                            // color: "#",
                            font: {
                                size: 12,
                                family: 'Exo',
                                style: 'normal',
                            }
                        }
                    }
                },
                responsive: true,
                interaction: {
                    intersect: false,
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: "Total Revenue",
                            font: {
                                size: 16,
                                family: 'Exo',
                                style: 'bold'
                            }
                        },
                        grid: {
                            color: "rgba(211, 211, 211, 0.1)" // Warna grid diubah menjadi lebih transparan
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: "Year",
                            font: {
                                size: 16,
                                family: 'Exo',
                                style: 'bold'
                            }
                        },
                        grid: {
                            color: "rgba(211, 211, 211, 0.1)" // Warna grid diubah menjadi lebih transparan
                        }
                    }
                }
            }
        });
        console.log("chart created");
    })
    .catch(error => console.error("Error loading data:", error));
})