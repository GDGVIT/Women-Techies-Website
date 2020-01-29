const button = document.querySelector(".ham");
const navItems = document.querySelector(".nav-items");
const lines = document.querySelectorAll(".ham div");
let i = 0;
button.addEventListener("click", ()=>{
    navItems.classList.toggle("open");
    lines[0].classList.toggle("merge");
    lines[1].classList.toggle("merge");
    i++;
});
window.addEventListener("resize", () => {
    if (window.innerWidth < 992 && i%2 == 1) {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
});
navItems.addEventListener("click", ()=>{
    setTimeout(()=>{
        navItems.classList.toggle("open");
    }, 900);
})


let scrollpos = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0);
const vh = window.innerHeight;



