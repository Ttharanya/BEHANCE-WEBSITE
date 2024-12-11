// Get the dropdown elements
const arrowBtn = document.querySelector('.arrow-btn');
const dropdownContent = document.querySelector('.dropdown-content');

// Toggle the visibility of the dropdown when arrow is clicked
arrowBtn.addEventListener('click', () => {
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
});

// Close the dropdown if clicked outside of it
window.addEventListener('click', (e) => {
    if (!arrowBtn.contains(e.target)) {
        dropdownContent.style.display = "none";
    }
});
