const button = document.querySelector(".ham");
const navItems = document.querySelector(".nav-items");
const lines = document.querySelectorAll(".ham div");
console.log(lines[0]);
button.addEventListener("click", ()=>{
    navItems.classList.toggle("open");
    lines[0].classList.toggle("merge");
    lines[1].classList.toggle("merge");
});