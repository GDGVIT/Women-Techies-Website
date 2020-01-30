const button = document.querySelector(".ham");
const navItems = document.querySelector(".nav-items");
const lines = document.querySelectorAll(".ham div");
let i = 0;
button.addEventListener("click", ()=>{
    navItems.classList.toggle("open");
    lines[0].classList.toggle("merge");
    lines[1].classList.toggle("merge");
});
navItems.addEventListener("click", ()=>{
    setTimeout(()=>{
        navItems.classList.toggle("open");
    }, 900);
})
const nice = document.querySelector(".nice");



let scrollpos = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0);
const vh = window.innerHeight;
nice.style.height = vh + "px";



