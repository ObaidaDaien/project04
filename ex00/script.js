
const themeToggleBtn = document.getElementById('theme-toggle-btn');


function toggleTheme() {

    document.body.classList.toggle('dark-theme');


    if (document.body.classList.contains('dark-theme')) {
        themeToggleBtn.textContent = 'Switch to Light Theme ☀️';
    } else {
        themeToggleBtn.textContent = 'Switch to Dark Theme 🌙';
    }
}

themeToggleBtn.addEventListener('click', toggleTheme);