// ✅ Review Counter using localStorage
let count = localStorage.getItem("reviewCount") || 0;
count++;
localStorage.setItem("reviewCount", count);
document.getElementById("review-count").textContent = `You have submitted ${count} review${count > 1 ? 's' : ''}.`;

// ✅ Footer Info
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;