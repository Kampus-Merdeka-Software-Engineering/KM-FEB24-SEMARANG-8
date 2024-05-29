// // document.addEventListener("DOMContentLoaded", function () {
// //     fetch("data/dataset.json")
// //     .then(response => response.json())
// //     .then(data => {
// //         console.log("data loaded", data);
        
// //         // Mengelompokkan data berdasarkan tahun dan menghitung total revenue per tahun
// //         const revenuePerYear = data.reduce((acc, item) => {
// //             if (acc[item.Year]) {
// //                 acc[item.Year] += parseInt(item.Revenue);
// //             } else {
// //                 acc[item.Year] = parseInt(item.Revenue);
// //             }
// //             return acc;
// //         }, {});

// //         const years = Object.keys(revenuePerYear);
// //         const totalRevenue = Object.values(revenuePerYear);

// //         console.log("years", years);
// //         console.log("totalRevenue", totalRevenue);

// //         // Membuat grafik dengan Chart.js
// //         const ctx = document.getElementById("myChart1").getContext("2d");
// //         const myChart1 = new Chart(ctx, {
// //             type: "line",
// //             data: {
// //                 labels: years,
// //                 datasets: [
// //                     {
// //                         label: "Total Revenue",
// //                         data: totalRevenue,
// //                         borderColor: "rgba(54, 162, 235, 1)",
// //                         borderWidth: 1,
// //                         fill: false
// //                     }
// //                 ]
// //             },
// //             options: {
// //                 plugins: {
// //                     title: {
// //                       display: true,
// //                       text: 'Total Revenue per Year',
// //                       color: "#e8af30",
// //                       font: {
// //                           size: 18,
// //                           family: 'Exo',
// //                           style: 'bold',
// //                           lineHeight: 1.2,
// //                       }
// //                     },
// //                     legend: {
// //                         labels: {
// //                             font: {
// //                                 size: 12,
// //                                 family: 'Exo',
// //                                 style: 'normal',
// //                             }
// //                         }
// //                     }
// //                 },
// //                 responsive: true,
// //                 interaction: {
// //                     intersect: false,
// //                 },
// //                 scales: {
// //                     y: {
// //                         beginAtZero: true,
// //                         title: {
// //                             display: true,
// //                             text: "Total Revenue",
// //                             font: {
// //                                 size: 16,
// //                                 family: 'Exo',
// //                                 style: 'bold'
// //                             }
// //                         },
// //                         grid: {
// //                             color: "rgba(211, 211, 211, 0.1)" // Warna grid diubah menjadi lebih transparan
// //                         }
// //                     },
// //                     x: {
// //                         title: {
// //                             display: true,
// //                             text: "Year",
// //                             font: {
// //                                 size: 16,
// //                                 family: 'Exo',
// //                                 style: 'bold'
// //                             }
// //                         },
// //                         grid: {
// //                             color: "rgba(211, 211, 211, 0.1)" // Warna grid diubah menjadi lebih transparan
// //                         }
// //                     }
// //                 }
// //             }
// //         });
// //         console.log("chart created");
// //     })
// //     .catch(error => console.error("Error loading data:", error));
// // })

// document.addEventListener("DOMContentLoaded", function () {
//     fetch("data/dataset.json")
//     .then(response => response.json())
//     .then(data => {
//         console.log("data loaded", data);

//         // Menambahkan opsi unik ke dropdown
//         const categories = [...new Set(data.map(item => item.Product_Category))];
//         const dropdown = document.getElementById("dropdown");
//         categories.forEach(category => {
//             const option = document.createElement("option");
//             option.value = category;
//             option.text = category;
//             dropdown.add(option);
//         });

//         // Fungsi untuk mengupdate chart
//         const updateChart = (category) => {
//             const filteredData = data.filter(item => item.Product_Category === category);
//             const revenuePerYear = filteredData.reduce((acc, item) => {
//                 if (acc[item.Year]) {
//                     acc[item.Year] += parseInt(item.Revenue);
//                 } else {
//                     acc[item.Year] = parseInt(item.Revenue);
//                 }
//                 return acc;
//             }, {});

//             const years = Object.keys(revenuePerYear);
//             const totalRevenue = Object.values(revenuePerYear);

//             console.log("years", years);
//             console.log("totalRevenue", totalRevenue);

//             // Membuat grafik dengan Chart.js
//             const ctx = document.getElementById("myChart1").getContext("2d");
//             const myChart1 = new Chart(ctx, {
//                 type: "line",
//                 data: {
//                     labels: years,
//                     datasets: [
//                         {
//                             label: "Total Revenue",
//                             data: totalRevenue,
//                             borderColor: "rgba(54, 162, 235, 1)",
//                             borderWidth: 1,
//                             fill: false
//                         }
//                     ]
//                 },
//                 options: {
//                     plugins: {
//                         title: {
//                           display: true,
//                           text: 'Total Revenue per Year',
//                           color: "#e8af30",
//                           font: {
//                               size: 18,
//                               family: 'Exo',
//                               style: 'bold',
//                               lineHeight: 1.2,
//                           }
//                         },
//                         legend: {
//                             labels: {
//                                 font: {
//                                     size: 12,
//                                     family: 'Exo',
//                                     style: 'normal',
//                                 }
//                             }
//                         }
//                     },
//                     responsive: true,
//                     interaction: {
//                         intersect: false,
//                     },
//                     scales: {
//                         y: {
//                             beginAtZero: true,
//                             title: {
//                                 display: true,
//                                 text: "Total Revenue",
//                                 font: {
//                                     size: 16,
//                                     family: 'Exo',
//                                     style: 'bold'
//                                 }
//                             },
//                             grid: {
//                                 color: "rgba(211, 211, 211, 0.1)" // Warna grid diubah menjadi lebih transparan
//                             }
//                         },
//                         x: {
//                             title: {
//                                 display: true,
//                                 text: "Year",
//                                 font: {
//                                     size: 16,
//                                     family: 'Exo',
//                                     style: 'bold'
//                                 }
//                             },
//                             grid: {
//                                 color: "rgba(211, 211, 211, 0.1)" // Warna grid diubah menjadi lebih transparan
//                             }
//                         }
//                     }
//                 }
//             });
//             console.log("chart created");
//         };

//         // Event listener untuk tombol apply
//         document.getElementById("apply").addEventListener("click", function() {
//             const selectedCategory = dropdown.value;
//             updateChart(selectedCategory);
//         });
//     })
//     .catch(error => console.error("Error loading data:", error));
// });

// -----------------------------
// document.addEventListener("DOMContentLoaded", function () {
//     let myChart1; // Membuat variabel di luar fungsi

//     fetch("data/dataset.json")
//     .then(response => response.json())
//     .then(data => {
//         console.log("data loaded", data);

//         // Menambahkan opsi unik ke dropdown
//         const categories = [...new Set(data.map(item => item.Product_Category))];
//         const dropdown = document.getElementById("dropdown");
//         categories.forEach(category => {
//             const option = document.createElement("option");
//             option.value = category;
//             option.text = category;
//             dropdown.add(option);
//         });

//         // Fungsi untuk mengupdate chart
//         const updateChart = (category) => {
//             const filteredData = data.filter(item => item.Product_Category === category);
//             const revenuePerYear = filteredData.reduce((acc, item) => {
//                 if (acc[item.Year]) {
//                     acc[item.Year] += parseInt(item.Revenue);
//                 } else {
//                     acc[item.Year] = parseInt(item.Revenue);
//                 }
//                 return acc;
//             }, {});

//             const years = Object.keys(revenuePerYear);
//             const totalRevenue = Object.values(revenuePerYear);

//             console.log("years", years);
//             console.log("totalRevenue", totalRevenue);

//             // Menghancurkan chart sebelumnya jika ada
//             if (myChart1) {
//                 myChart1.destroy();
//             }

//             // Membuat grafik dengan Chart.js
//             const ctx = document.getElementById("myChart1").getContext("2d");
//             myChart1 = new Chart(ctx, {
//                 type: "line",
//                 data: {
//                     labels: years,
//                     datasets: [
//                         {
//                             label: "Total Revenue",
//                             data: totalRevenue,
//                             borderColor: "rgba(54, 162, 235, 1)",
//                             borderWidth: 1,
//                             fill: false
//                         }
//                     ]
//                 },
//                 options: {
//                     plugins: {
//                         title: {
//                           display: true,
//                           text: 'Total Revenue per Year',
//                           color: "#e8af30",
//                           font: {
//                               size: 18,
//                               family: 'Exo',
//                               style: 'bold',
//                               lineHeight: 1.2,
//                           }
//                         },
//                         legend: {
//                             labels: {
//                                 font: {
//                                     size: 12,
//                                     family: 'Exo',
//                                     style: 'normal',
//                                 }
//                             }
//                         }
//                     },
//                     responsive: true,
//                     interaction: {
//                         intersect: false,
//                     },
//                     scales: {
//                         y: {
//                             beginAtZero: true,
//                             title: {
//                                 display: true,
//                                 text: "Total Revenue",
//                                 font: {
//                                     size: 16,
//                                     family: 'Exo',
//                                     style: 'bold'
//                                 }
//                             },
//                             grid: {
//                                 color: "rgba(211, 211, 211, 0.1)" // Warna grid diubah menjadi lebih transparan
//                             }
//                         },
//                         x: {
//                             title: {
//                                 display: true,
//                                 text: "Year",
//                                 font: {
//                                     size: 16,
//                                     family: 'Exo',
//                                     style: 'bold'
//                                 }
//                             },
//                             grid: {
//                                 color: "rgba(211, 211, 211, 0.1)" // Warna grid diubah menjadi lebih transparan
//                             }
//                         }
//                     }
//                 }
//             });
//             console.log("chart created");
//         };

//         // Event listener untuk tombol apply
//         document.getElementById("apply").addEventListener("click", function() {
//             const selectedCategory = dropdown.value;
//             updateChart(selectedCategory);
//         });
//     })
//     .catch(error => console.error("Error loading data:", error));
// });

document.addEventListener("DOMContentLoaded", function () {
    let myChart1; // Membuat variabel di luar fungsi

    fetch("data/dataset2.json")
    .then(response => response.json())
    .then(data => {
        console.log("data loaded", data);

        // Menambahkan opsi unik ke dropdown
        const categories = [...new Set(data.map(item => item.Product_Category))];
        const dropdown = document.getElementById("dropdown");

        // Menambahkan opsi "All Categories"
        const allOption = document.createElement("option");
        allOption.value = "All Categories";
        allOption.text = "All Categories";
        dropdown.add(allOption);

        categories.forEach(category => {
            const option = document.createElement("option");
            option.value = category;
            option.text = category;
            dropdown.add(option);
        });

        // Fungsi untuk mengupdate chart
        const updateChart = (category) => {
            const filteredData = category !== "All Categories" ? data.filter(item => item.Product_Category === category) : data;
            const revenuePerYear = filteredData.reduce((acc, item) => {
                if (acc[item.Year]) {
                    acc[item.Year] += parseInt(item.Revenue);
                } else {
                    acc[item.Year] = parseInt(item.Revenue);
                }
                return acc;
            }, {});

            const years = Object.keys(revenuePerYear);
            const totalRevenue = Object.values(revenuePerYear);

            console.log("years", years);
            console.log("totalRevenue", totalRevenue);

            // Menghancurkan chart sebelumnya jika ada
            if (myChart1) {
                myChart1.destroy();
            }

            // Membuat grafik dengan Chart.js
            const ctx = document.getElementById("myChart1").getContext("2d");
            myChart1 = new Chart(ctx, {
                type: "line",
                data: {
                    labels: years,
                    datasets: [
                        {
                            label: "Total Revenue",
                            data: totalRevenue,
                            borderColor: "rgba(54, 162, 235, 1)",
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
        };

        // Menampilkan keseluruhan data sebelum difilter
        updateChart("All Categories");

        // Event listener untuk tombol apply
        document.getElementById("apply").addEventListener("click", function() {
            const selectedCategory = dropdown.value;
            updateChart(selectedCategory);
        });
    })
    .catch(error => console.error("Error loading data:", error));
});
