// document.addEventListener("DOMContentLoaded", function () {
//     fetch("data/2_revenue_bike_&_acc_per_country.json")
//     .then(response => response.json())
//     .then(data => {        
//         // Processing json data
//         const countries = Array.from(new Set(data.map(item => item.Country)));

//         const bikesData = countries.map(country => {
//             const item = data.find(d => d.Country === country && d.Product_Category === "Bikes");
//             return item ? parseInt(item.Total_revenue) : null;
//         });

//         const accessoriesData = countries.map(country => {
//             const item = data.find(d => d.Country === country && d.Product_Category === "Accessories");
//             return item ? parseInt(item.Total_revenue) : null;
//         });

//         // Create the chart
//         const ctx = document.getElementById("myChart2").getContext("2d");
//         const myChart2 = new Chart(ctx, {
//             type: "bar",
//             data: {
//                 labels: countries,
//                 datasets: [
//                     {
                    //     label: "Bikes",
                    //     data: bikesData,
                    //     borderColor: "rgba(54, 162, 235, 1)",
                    //     borderWidth: 1,
                    //     stack: 'Stack 0',
                    // },
                    // {
                    //     label: "Accessories",
                    //     data: accessoriesData,
                    //     borderColor: "rgba(255, 99, 132, 1)",
                    //     borderWidth: 1,
                    //     stack: 'Stack 1',
//                     }
//                 ]
//             },
//             options: {
//                 plugins: {
//                   title: {
//                     display: true,
//                     text: 'Total Revenue by Country',
//                     color: "#e8af30",
//                     font: {
//                         family: 'Exo',
//                         size: 18,
//                         style: 'bold'
//                     }
//                   },
//                   legend: {
//                     labels: {
//                         font: {
//                             family: 'Exo',
//                             size: 12,
//                             style: 'normal'
//                         }
//                     }
//                   }
//                 },
//                 responsive: true,
//                 interaction: {
//                   intersect: false,
//                 },
//                 scales: {
//                   x: {
//                     stacked: true,
//                     title: {
//                         display: true,
//                         text: "Country",
//                         font: {
//                             family: 'Exo',
//                             size: 16,
//                             style: 'bold'
//                         }
//                     },
//                     grid: {
//                         color: "rgba(211, 211, 211, 0.1)" // Warna grid diubah menjadi abu-abu muda
//                     }
//                   },
//                   y: {
//                     stacked: true,
//                     beginAtZero: true,
//                     title: {
//                         display: true,
//                         text: "Total Revenue",
//                         font: {
//                             family: 'Exo',
//                             size: 16,
//                             style: 'bold'
//                         }
//                     },
//                     grid: {
//                         color: "rgba(211, 211, 211, 0.1)" // Warna grid diubah menjadi abu-abu muda
//                     }
//                   }
//                 }
//               }
//         });
//         console.log("chart created");
//     })
//     .catch(error => console.error("Error loading data:", error));
// })

// -----------------------------------------------------------
// document.addEventListener("DOMContentLoaded", function () {
//     let myChart2; // Membuat variabel di luar fungsi

//     fetch("data/dataset2.json")
//     .then(response => response.json())
//     .then(data => {
//         console.log("data loaded", data);

//         // Menambahkan opsi unik ke dropdown
//         const years = ["All Years", ...new Set(data.map(item => item.Year))];
//         const dropdownYear = document.getElementById("dropdownYear");
//         years.forEach(year => {
//             const option = document.createElement("option");
//             option.value = year;
//             option.text = year;
//             dropdownYear.add(option);
//         });

//         // Fungsi untuk mengupdate chart
//         const updateChart = (year) => {
//             const filteredData = year !== "All Years" ? data.filter(item => item.Year === year) : data;
//             const countries = Array.from(new Set(filteredData.map(item => item.Country)));

//             const categories = Array.from(new Set(filteredData.map(item => item.Product_Category)));

//             const datasets = categories.map((category, index) => {
//                 const categoryData = countries.map(country => {
//                     const items = filteredData.filter(d => d.Country === country && d.Product_Category === category);
//                     return items.reduce((total, item) => total + parseInt(item.Revenue), 0);
//                 });

//                 return {
//                     label: category,
//                     data: categoryData,
//                     borderColor: index === 0 ? "rgba(54, 162, 235, 1)" : "rgba(255, 99, 132, 1)",
//                     borderWidth: 1,
//                     backgroundColor: index === 0 ? "rgba(54, 162, 235, 0.5)" : "rgba(255, 99, 132, 0.5)"
//                 };
//             });

//             // Menghancurkan chart sebelumnya jika ada
//             if (myChart2) {
//                 myChart2.destroy();
//             }

//             // Membuat grafik dengan Chart.js
//             const ctx = document.getElementById("myChart2").getContext("2d");
//             myChart2 = new Chart(ctx, {
//                 type: "bar",
//                 data: {
//                     labels: countries,
//                     datasets: datasets
//                 },
//                 options: {
//                     plugins: {
//                       title: {
//                         display: true,
//                         text: 'Total Revenue by Country',
//                         color: "#e8af30",
//                         font: {
//                             family: 'Exo',
//                             size: 18,
//                             style: 'bold'
//                         }
//                       },
//                       legend: {
//                         labels: {
//                             font: {
//                                 family: 'Exo',
//                                 size: 12,
//                                 style: 'normal'
//                             }
//                         }
//                       }
//                     },
//                     responsive: true,
//                     interaction: {
//                       intersect: false,
//                     },
//                     scales: {
//                       x: {
//                         title: {
//                             display: true,
//                             text: "Country",
//                             font: {
//                                 family: 'Exo',
//                                 size: 16,
//                                 style: 'bold'
//                             }
//                         },
//                         grid: {
//                             color: "rgba(211, 211, 211, 0.1)" // Warna grid diubah menjadi abu-abu muda
//                         }
//                       },
//                       y: {
//                         beginAtZero: true,
//                         title: {
//                             display: true,
//                             text: "Total Revenue",
//                             font: {
//                                 family: 'Exo',
//                                 size: 16,
//                                 style: 'bold'
//                             }
//                         },
//                         grid: {
//                             color: "rgba(211, 211, 211, 0.1)" // Warna grid diubah menjadi abu-abu muda
//                         }
//                       }
//                     }
//                   }
//             });
//             console.log("chart created");
//         };

//         // Menampilkan keseluruhan data sebelum difilter
//         updateChart("All Years");

//         // Event listener untuk tombol apply
//         document.getElementById("apply").addEventListener("click", function() {
//             const selectedYear = dropdownYear.value;
//             updateChart(selectedYear);
//         });
//     })
//     .catch(error => console.error("Error loading data:", error));
// });

// document.addEventListener("DOMContentLoaded", function () {
//     let myChart2; // Membuat variabel di luar fungsi

//     fetch("data/dataset2.json")
//     .then(response => response.json())
//     .then(data => {
//         console.log("data loaded", data);

//         // Menambahkan opsi unik ke dropdown
//         const years = [...new Set(data.map(item => item.Year))];
//         const dropdownYear = document.getElementById("dropdownYear");

//         // Menambahkan opsi "All Years"
//         const allOption = document.createElement("option");
//         allOption.value = "All Years";
//         allOption.text = "All Years";
//         dropdownYear.add(allOption);

//         years.forEach(year => {
//             const option = document.createElement("option");
//             option.value = year;
//             option.text = year;
//             dropdownYear.add(option);
//         });

//         // Fungsi untuk mengupdate chart
//         const updateChart = (year) => {
//             const filteredData = year !== "All Years" ? data.filter(item => item.Year === year) : data;
//             const countries = Array.from(new Set(filteredData.map(item => item.Country)));

//             const categories = Array.from(new Set(filteredData.map(item => item.Product_Category)));

//             const datasets = categories.map((category, index) => {
//                 const categoryData = countries.map(country => {
//                     const items = filteredData.filter(d => d.Country === country && d.Product_Category === category);
//                     return items.reduce((total, item) => total + parseInt(item.Revenue), 0);
//                 });

//                 return {
//                     label: category,
//                     data: categoryData,
//                     borderColor: index === 0 ? "rgba(54, 162, 235, 1)" : "rgba(255, 99, 132, 1)",
//                     borderWidth: 1,
//                     backgroundColor: index === 0 ? "rgba(54, 162, 235, 0.5)" : "rgba(255, 99, 132, 0.5)"
//                 };
//             });

//             // Menghancurkan chart sebelumnya jika ada
//             if (myChart2) {
//                 myChart2.destroy();
//             }

//             // Membuat grafik dengan Chart.js
//             const ctx = document.getElementById("myChart2").getContext("2d");
//             myChart2 = new Chart(ctx, {
//                 type: "bar",
//                 data: {
//                     labels: countries,
//                     datasets: datasets
//                 },
//                 options: {
//                     plugins: {
//                       title: {
//                         display: true,
//                         text: 'Total Revenue by Country',
//                         color: "#e8af30",
//                         font: {
//                             family: 'Exo',
//                             size: 18,
//                             style: 'bold'
//                         }
//                       },
//                       legend: {
//                         labels: {
//                             font: {
//                                 family: 'Exo',
//                                 size: 12,
//                                 style: 'normal'
//                             }
//                         }
//                       }
//                     },
//                     responsive: true,
//                     interaction: {
//                       intersect: false,
//                     },
//                     scales: {
//                       x: {
//                         title: {
//                             display: true,
//                             text: "Country",
//                             font: {
//                                 family: 'Exo',
//                                 size: 16,
//                                 style: 'bold'
//                             }
//                         },
//                         grid: {
//                             color: "rgba(211, 211, 211, 0.1)" // Warna grid diubah menjadi abu-abu muda
//                         }
//                       },
//                       y: {
//                         beginAtZero: true,
//                         title: {
//                             display: true,
//                             text: "Total Revenue",
//                             font: {
//                                 family: 'Exo',
//                                 size: 16,
//                                 style: 'bold'
//                             }
//                         },
//                         grid: {
//                             color: "rgba(211, 211, 211, 0.1)" // Warna grid diubah menjadi abu-abu muda
//                         }
//                       }
//                     }
//                   }
//             });
//             console.log("chart created");
//         };

//         // Menampilkan keseluruhan data sebelum difilter
//         updateChart("All Years");

//         // Event listener untuk tombol apply
//         document.getElementById("apply").addEventListener("click", function() {
//             const selectedYear = dropdownYear.value;
//             updateChart(selectedYear);
//         });
//     })
//     .catch(error => console.error("Error loading data:", error));
// });

document.addEventListener("DOMContentLoaded", function () {
    let myChart2; // Membuat variabel di luar fungsi

    fetch("data/dataset2.json")
    .then(response => response.json())
    .then(data => {
        console.log("data loaded", data);

        // Fungsi untuk mengupdate chart
        const updateChart = (year) => {
            const filteredData = year !== "All Years" ? data.filter(item => item.Year === year) : data;
            const countries = Array.from(new Set(filteredData.map(item => item.Country)));

            const categories = Array.from(new Set(filteredData.map(item => item.Product_Category)));

            const datasets = categories.map((category, index) => {
                const categoryData = countries.map(country => {
                    const items = filteredData.filter(d => d.Country === country && d.Product_Category === category);
                    return items.reduce((total, item) => total + parseInt(item.Revenue), 0);
                });

                return {
                    label: category,
                    data: categoryData,
                    borderColor: index === 0 ? "rgba(54, 162, 235, 1)" : "rgba(255, 99, 132, 1)",
                    borderWidth: 1,
                    backgroundColor: index === 0 ? "rgba(54, 162, 235, 0.5)" : "rgba(255, 99, 132, 0.5)"
                };
            });

            // Menghancurkan chart sebelumnya jika ada
            if (myChart2) {
                myChart2.destroy();
            }

            // Membuat grafik dengan Chart.js
            const ctx = document.getElementById("myChart2").getContext("2d");
            myChart2 = new Chart(ctx, {
                type: "bar",
                data: {
                    labels: countries,
                    datasets: datasets
                },
                options: {
                    aspectRatio: 1,
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