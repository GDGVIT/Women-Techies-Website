const button = document.querySelector(".ham");
const navItems = document.querySelector(".nav-items");
const lines = document.querySelectorAll(".ham div");
button.addEventListener("click", ()=>{
    navItems.classList.toggle("open");
    lines[0].classList.toggle("merge");
    lines[1].classList.toggle("merge");
});

let scrollpos = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0);
const vh = window.innerHeight;



