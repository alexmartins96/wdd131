// scripts/footer.js
const yearSpan = document.getElementById("year");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

document.getElementById("searchForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const query = document.getElementById("searchInput").value.trim();
    if (query) {
        alert("You searched for: " + query);
        // Optional: Redirect or filter cookies
    }
});
