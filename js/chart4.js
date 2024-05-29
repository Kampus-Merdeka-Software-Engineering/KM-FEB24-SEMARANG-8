document.addEventListener("DOMContentLoaded", function () {
  // Mendapatkan data JSON dari file
  fetch("data/4_bike_sales_by_age_group.json")
    .then((response) => response.json())
    .then((data) => {
      // Proses data JSON
      const labels = data.map((item) => item.Age_Group);
      const quantities = data.map((item) => parseInt(item.Sum_quantity, 10));

      // Create the chart
      const ctx = document.getElementById("myChart4").getContext("2d");
      const salesChart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Bike Sales by Age Group",
              data: quantities,
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
              text: 'Bike Sales by Age Group',
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
                text: "Age Group",
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
