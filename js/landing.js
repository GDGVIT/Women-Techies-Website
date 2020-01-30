const button = document.querySelector(".ham");
const navItems = document.querySelector(".nav-items");
const lines = document.querySelectorAll(".ham div");
const body = document.querySelector("body");
let i = 0;
button.addEventListener("click", ()=>{
    navItems.classList.toggle("open");
    lines[0].classList.toggle("merge");
    lines[1].classList.toggle("merge");
    body.classList.toggle("overflow");
});
navItems.addEventListener("click", ()=>{
    setTimeout(()=>{
        navItems.classList.toggle("open");
    }, 900);
})
const nice = document.querySelector(".nice");

let scrollpos = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0);
const vh = window.innerHeight;
/* nice.style.height = vh + "px"; */



