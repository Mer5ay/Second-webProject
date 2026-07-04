console.log("Скрипт успешно запустился на странице: ", window.location.pathname);

const modal = document.getElementById('modalOverlay');
const closeBtn = document.getElementById('closeModalBtn');
const orderButtons = document.querySelectorAll('.orderBtn');

function openModalWindow() {
    modal.style.display = 'flex';
}

function closeModalWindow() {
    modal.style.display = 'none';
}

if (orderButtons) {
    orderButtons.forEach(function(button) {
        button.addEventListener('click', openModalWindow);   
    });
}

if (closeBtn) {
    closeBtn.addEventListener('click', closeModalWindow);
}

const themeBtn = document.getElementById('themeBtn');
const bodyElement = document.body;

if (localStorage.getItem('siteTheme') === "dark") {
    bodyElement.classList.add('dark-mode');
    themeBtn.textContent = "☀️";
}

function toggleTheme() {
    bodyElement.classList.toggle('dark-mode');

    if (bodyElement.classList.contains('dark-mode')) {
        themeBtn.textContent = '☀️';
        localStorage.setItem('siteTheme', 'dark');
    } else {
        themeBtn.textContent = '🌙';
        localStorage.setItem('siteTheme', 'light');
    }
}

if (themeBtn) {
    themeBtn.addEventListener('click', toggleTheme)
}
