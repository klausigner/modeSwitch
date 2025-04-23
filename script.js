// Connecting variable with ids
const lightMode = document.getElementById("l-m");
const lightButton = document.getElementById("l-b");
const darkMode = document.getElementById("d-m");
const darkButton = document.getElementById("d-b");

// Switch to dark
lightButton.addEventListener('click',
    function() {
    lightMode.style.display = 'none';
    darkMode.style.display = 'flex';
});

// Switch to light
darkButton.addEventListener('click',
    function() {
    lightMode.style.display = 'flex';
    darkMode.style.display = 'none';
});