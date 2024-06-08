document.addEventListener("DOMContentLoaded", function () {
  let myChart5; // Membuat variabel di luar fungsi

  fetch("data/dataset2.json")
  .then(response => response.json())
  .then(data => {
      console.log("data loaded", data);

      // Fungsi untuk mengupdate chart
      const updateChart = (year) => {
          const filteredData = year !== "All Years" ? data.filter(item => item.Year === year && item.Product_Category === "Bikes") : data.filter(item => item.Product_Category === "Bikes");
          const genders = Array.from(new Set(filteredData.map(item => item.Customer_Gender)));

          const quantities = genders.map(gender => {
              const items = filteredData.filter(d => d.Customer_Gender === gender);
              return items.reduce((total, item) => total + parseInt(item.Order_Quantity), 0);
          });

          // Menghancurkan chart sebelumnya jika ada
          if (myChart5) {
              myChart5.destroy();
          }

          // Membuat grafik dengan Chart.js
          const ctx = document.getElementById("myChart5").getContext("2d");
          myChart5 = new Chart(ctx, {
              type: "doughnut",
              data: {
                  labels: genders,
                  datasets: [
                      {
                          label: "Bike Sales by Gender",
                          data: quantities,
                          backgroundColor: [
                              "rgba(255, 99, 132, 0.2)",
                              "rgba(54, 162, 235, 0.2)",
                          ],
                          borderColor: [
                              "rgba(255, 99, 132, 1)",
                              "rgba(54, 162, 235, 1)",
                          ],
                          borderWidth: 1,
                      },
                  ],
              },
              options: {
                  responsive: true,
                  plugins: {
                      title: {
                          display: true,
                          text: "Bike Sales by Gender",
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
