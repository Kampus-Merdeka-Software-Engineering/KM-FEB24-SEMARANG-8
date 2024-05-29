document.addEventListener("DOMContentLoaded", function () {
  fetch("data/5_bike_sales_by_gender.json")
    .then((response) => response.json())
    .then((salesData) => {
      // Convert sales from string to number
      salesData.forEach((item) => (item.Sales = Number(item.Sales)));

      // Filter data for "Bikes" category
      const bikeSalesData = salesData.filter(
        (item) => item.Product_Category === "Bikes"
      );

      // Aggregate sales by gender
      const salesByGender = bikeSalesData.reduce((acc, item) => {
        if (!acc[item.Customer_Gender]) {
          acc[item.Customer_Gender] = 0;
        }
        acc[item.Customer_Gender] += item.Sales;
        return acc;
      }, {});

      // Prepare data and labels for the chart
      const labels = Object.keys(salesByGender);
      const data = Object.values(salesByGender);

      // Create the chart
      const ctx = document.getElementById("myChart5").getContext("2d");
      new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: labels,
          datasets: [
            {
              data: data,
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
              ],
              borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: "Bike Sales By Gender",
              color: "#e8af30",
              font: {
                family: "Exo",
                size: 18,
                style: "bold",
              },
            },
            legend: {
              position: "top",
              labels: {
                font: {
                  size: 12, // Ukuran font legend dikecilkan
                  family: 'Exo',
                  style: 'normal'
                }
              }
            },
            tooltip: {
              callbacks: {
                label: function (context) {
                  const label = context.label || "";
                  const value = context.raw || 0;
                  return `${label}: ${value}`;
                },
              },
            },
          },
        },
      });
    })
    .catch((error) => console.error("Error:", error));
});
