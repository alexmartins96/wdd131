// ✅ Set current year in footer
const yearSpan = document.querySelector('#currentyear');
if (yearSpan) {
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
}

// ✅ Set last modified date in footer
const lastModified = document.querySelector('#lastModified');
if (lastModified) {
    lastModified.textContent = `Last Modified: ${document.lastModified}`;
}

// ✅ Hamburger menu functionality
const hamburgerBtn = document.querySelector('#hamburgerBtn');
const navMenu = document.querySelector('nav ul');

if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
        navMenu.classList.toggle('open');

        // Toggle icon between ☰ and ✖
        if (hamburgerBtn.textContent === '☰') {
            hamburgerBtn.textContent = '✖';
        } else {
            hamburgerBtn.textContent = '☰';
        }
    });
}
