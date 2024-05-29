document.addEventListener("DOMContentLoaded", function () {
    // Mendapatkan data JSON dari file
    fetch("data/6_bike_sales_by_country.json")
      .then((response) => response.json())
      .then((data) => {
        // Processing JSON data
        const labels = data.map((item) => item.Country);
        const totalSales = data.map((item) => parseInt(item.Sales, 10));
  
        // Chart
        const ctx = document.getElementById("myChart6").getContext("2d");
        const myChart6 = new Chart(ctx, {
          type: "bar",
          data: {
            labels: labels,
            datasets: [
              {
                label: "Bike Sales by Country",
                data: totalSales,
                backgroundColor: "rgba(54, 162, 235, 0.2)",
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 1,
              },
            ],
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                display: false
              },
              title: {
                display: true,
                text: 'Bike Sales By Country',
                color: "#e8af30",
                font: {
                  family: 'Exo',
                  size: 18,
                  style: 'bold'
                }
              }
            },
            scales: {
              y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: "Bike Sales",
                    font: {
                      family: 'Exo',
                      size: 16,
                      style: 'bold'
                    }
                },
                grid: {
                  color: "rgba(211, 211, 211, 0.1)"
                }
              },
              x: {
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
                  color: "rgba(211, 211, 211, 0.1)"
                }
              }
            },
          },
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  });
