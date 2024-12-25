const themeToggle = document.querySelector('.theme-toggle');
const root = document.documentElement;

themeToggle.addEventListener('click', () => {
    if (root.style.getPropertyValue('--bg-light') === '#f4f4f4') {
        root.style.setProperty('--bg-light', '#1a1a1a');
        root.style.setProperty('--text-dark', '#f4f4f4');
    } else {
        root.style.setProperty('--bg-light', '#f4f4f4');
        root.style.setProperty('--text-dark', '#333333');
    }
});
