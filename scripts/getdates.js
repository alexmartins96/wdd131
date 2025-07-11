const yearSpan = document.getElementById("currentyear");
const lastModifiedSpan = document.getElementById("lastModified");

const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

lastModifiedSpan.textContent = `Last Modified: ${document.lastModified}`;