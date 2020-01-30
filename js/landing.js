gsap.registerPlugin(ScrollToPlugin);
const button = document.querySelector(".ham");
const navItems = document.querySelector(".nav-items");
const lines = document.querySelectorAll(".ham div");
const navlinks = document.querySelectorAll(".nav-items div");
const body = document.querySelector("body");
const ids = ["#one","#two","#three","#four","#five","#six"];
function openclose(){
    navItems.classList.toggle("open");
    lines[0].classList.toggle("merge");
    lines[1].classList.toggle("merge");
    body.classList.toggle("overflow");
}
button.addEventListener("click", ()=>{
    openclose();
});
let scrollpos = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0);
const vh = window.innerHeight;
let width = window.innerWidth;
navlinks[0].addEventListener("click", ()=>{openclose()});
navlinks[1].addEventListener("click", ()=>{openclose()});
navlinks[4].addEventListener("click", ()=>{openclose()});
navlinks[3].addEventListener("click", ()=>{openclose()});
navlinks[2].addEventListener("click", ()=>{openclose()});
navlinks[5].addEventListener("click", ()=>{openclose()});

/* gsap.to(window, {duration: 1, scrollTo:{y:ids[5], offsetY:70}}); */
/* function move(pos){
    gsap.to(window, {duration: 0.1, ease: "power0", scrollTo: ids[pos]});
    
} */



