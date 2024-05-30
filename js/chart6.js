document.addEventListener("DOMContentLoaded", function () {
  let myChart6; // Membuat variabel di luar fungsi

  fetch("data/dataset2.json")
    .then((response) => response.json())
    .then((data) => {
      console.log("data loaded", data);

      // Fungsi untuk mengupdate chart
      const updateChart = (year) => {
        const filteredData =
          year !== "All Years"
            ? data.filter(
                (item) =>
                  item.Year === year && item.Product_Category === "Bikes"
              )
            : data.filter((item) => item.Product_Category === "Bikes");
        const countries = Array.from(
          new Set(filteredData.map((item) => item.Country))
        );

        const totalSales = countries.map((country) => {
          const items = filteredData.filter((d) => d.Country === country);
          return items.reduce(
            (total, item) => total + parseInt(item.Order_Quantity),
            0
          );
        });

        // Menghancurkan chart sebelumnya jika ada
        if (myChart6) {
          myChart6.destroy();
        }

        // Membuat grafik dengan Chart.js
        const ctx = document.getElementById("myChart6").getContext("2d");
        myChart6 = new Chart(ctx, {
          type: "bar",
          data: {
            labels: countries,
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
            aspectRatio: 1,
            responsive: true,
            plugins: {
              legend: {
                display: false,
              },
              title: {
                display: true,
                text: "Bike Sales By Country",
                color: "#e8af30",
                font: {
                  family: "Exo",
                  size: 18,
                  style: "bold",
                },
              },
            },
            scales: {
              y: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: "Bike Sales",
                  font: {
                    family: "Exo",
                    size: 16,
                    style: "bold",
                  },
                },
                grid: {
                  color: "rgba(211, 211, 211, 0.1)",
                },
              },
              x: {
                title: {
                  display: true,
                  text: "Country",
                  font: {
                    family: "Exo",
                    size: 16,
                    style: "bold",
                  },
                },
                grid: {
                  color: "rgba(211, 211, 211, 0.1)",
                },
              },
            },
          },
        });
      };

      // Menampilkan keseluruhan data sebelum difilter
      updateChart("All Years");

      // Event listener untuk tombol apply
      document.getElementById("apply").addEventListener("click", function () {
        const dropdownYear = document.getElementById("dropdownYear");
        const selectedYear = dropdownYear.value;
        updateChart(selectedYear);
      });
    })
    .catch((error) => console.error("Error loading data:", error));
});
