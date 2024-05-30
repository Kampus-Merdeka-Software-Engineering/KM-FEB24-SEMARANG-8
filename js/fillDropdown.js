document.addEventListener('DOMContentLoaded', function() {
    fetch('data/dataset2.json')
        .then(response => response.json())
        .then(data => {
            console.log("data loaded", data);

            // Menambahkan opsi unik ke dropdown
            const years = [...new Set(data.map(item => item.Year))];
            const dropdownYear = document.getElementById("dropdownYear");

            // Menambahkan opsi "All Years"
            const allOption = document.createElement("option");
            allOption.value = "All Years";
            allOption.text = "All Years";
            dropdownYear.add(allOption);

            years.forEach(year => {
                const option = document.createElement("option");
                option.value = year;
                option.text = year;
                dropdownYear.add(option);
            });
        })
        .catch(error => console.error("Error loading data:", error));
});