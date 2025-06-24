document.addEventListener("DOMContentLoaded", function () {
    const searchBox = document.getElementById("searchBox");

    searchBox.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            alert(`Searching for: ${searchBox.value}`);
            // Add search functionality or redirection logic here
        }
    });
});
