const toggle = document.getElementById('dark-mode-toggle');
const body = document.body;

// Check if dark mode was previously enabled
if (localStorage.getItem('dark-mode') === 'enabled') {
  body.classList.add('dark-mode');
  toggle.checked = true; // Keep the toggle checked if dark mode is active
}

toggle.addEventListener('change', () => {
  if (toggle.checked) {
    body.classList.add('dark-mode');
    localStorage.setItem('dark-mode', 'enabled'); // Save dark mode preference
  } else {
    body.classList.remove('dark-mode');
    localStorage.setItem('dark-mode', 'disabled'); // Save light mode preference
  }
});
