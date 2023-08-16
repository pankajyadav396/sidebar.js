let button = document.querySelector("button");
let sidebar = document.querySelector(".sidebar");
let row = document.querySelector(".row")
let overlay = document.querySelector(".overlay")
let svg = document.querySelector("svg")

button.addEventListener("click", () => {
    sidebar.style.left = 0;
    overlay.style.display = "block";
});

overlay.addEventListener("click", () => {
    sidebar.style.left = "-300px";
    overlay.style.display = "none";
});

svg.addEventListener("click", () => {
    sidebar.style.left = "-300px";
    overlay.style.display = "none";
});
