
// Automatically update the footer year
const yearElements = document.querySelectorAll(".year");

yearElements.forEach(function(element) {
    element.textContent = new Date().getFullYear();
});
