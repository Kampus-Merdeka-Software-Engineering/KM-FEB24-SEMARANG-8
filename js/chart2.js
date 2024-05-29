document.addEventListener("DOMContentLoaded", function () {
    fetch("data/2_revenue_bike_&_acc_per_country.json")
    .then(response => response.json())
    .then(data => {        
        // Processing json data
        const countries = Array.from(new Set(data.map(item => item.Country)));

        const bikesData = countries.map(country => {
            const item = data.find(d => d.Country === country && d.Product_Category === "Bikes");
            return item ? parseInt(item.Total_revenue) : null;
        });

        const accessoriesData = countries.map(country => {
            const item = data.find(d => d.Country === country && d.Product_Category === "Accessories");
            return item ? parseInt(item.Total_revenue) : null;
        });

        // Create the chart
        const ctx = document.getElementById("myChart2").getContext("2d");
        const myChart2 = new Chart(ctx, {
            type: "bar",
            data: {
                labels: countries,
                datasets: [
                    {
                        label: "Bikes",
                        data: bikesData,
                        borderColor: "rgba(54, 162, 235, 1)",
                        borderWidth: 1,
                        stack: 'Stack 0',
                    },
                    {
                        label: "Accessories",
                        data: accessoriesData,
                        borderColor: "rgba(255, 99, 132, 1)",
                        borderWidth: 1,
                        stack: 'Stack 1',
                    }
                ]
            },
            options: {
                plugins: {
                  title: {
                    display: true,
                    text: 'Total Revenue by Country',
                    color: "#e8af30",
                    font: {
                        family: 'Exo',
                        size: 18,
                        style: 'bold'
                    }
                  },
                  legend: {
                    labels: {
                        font: {
                            family: 'Exo',
                            size: 12,
                            style: 'normal'
                        }
                    }
                  }
                },
                responsive: true,
                interaction: {
                  intersect: false,
                },
                scales: {
                  x: {
                    stacked: true,
                    title: {
                        display: true,
                        text: "Country",
                        font: {
                            family: 'Exo',
                            size: 16,
                            style: 'bold'
                        }
                    },
                    grid: {
                        color: "rgba(211, 211, 211, 0.1)" // Warna grid diubah menjadi abu-abu muda
                    }
                  },
                  y: {
                    stacked: true,
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: "Total Revenue",
                        font: {
                            family: 'Exo',
                            size: 16,
                            style: 'bold'
                        }
                    },
                    grid: {
                        color: "rgba(211, 211, 211, 0.1)" // Warna grid diubah menjadi abu-abu muda
                    }
                  }
                }
              }
        });
        console.log("chart created");
    })
    .catch(error => console.error("Error loading data:", error));
})