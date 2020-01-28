const button = document.querySelector(".ham");
const navItems = document.querySelector(".nav-items");
button.addEventListener("click", ()=>{
    navItems.classList.toggle("open");
});