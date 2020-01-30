
const button = document.querySelector(".ham");
const navItems = document.querySelector(".nav-items");
const navInner = document.querySelectorAll(".nav-inner a")
const lines = document.querySelectorAll(".ham div");
const navlinks = document.querySelectorAll(".nav-items a");
const body = document.querySelector("body");
const ids = ["#one","#two","#three","#four","#five","#six"];
const colors = ["orange","rgb(164,27,228)","rgb(252,37,126)","rgb(164,27,228)","rgb(252,37,126)","rgb(164,27,228)"]
const t1 = gsap.timeline();
let i = 0;
function openclose(){
    navItems.classList.toggle("open");
    lines[0].classList.toggle("merge");
    lines[1].classList.toggle("merge");
    body.classList.toggle("overflow");
    if(i == 9){
        i = 0;
    }
    else{
        for(i = 0; i < 9; i++){
            t1.fromTo(navlinks[i],{
                opacity: 0
            },{
                opacity: 1,
                duration: 0.10
            })
        }
    }
}
button.addEventListener("click", ()=>{
    openclose();
});

let vh = window.innerHeight;
let width = window.innerWidth;
navlinks[0].addEventListener("click", ()=>{setTimeout(()=>{openclose()},1400)});
navlinks[1].addEventListener("click", ()=>{setTimeout(()=>{openclose()},1400)});
navlinks[4].addEventListener("click", ()=>{setTimeout(()=>{openclose()},1400)});
navlinks[3].addEventListener("click", ()=>{setTimeout(()=>{openclose()},1400)});
navlinks[2].addEventListener("click", ()=>{setTimeout(()=>{openclose()},1400)});
navlinks[5].addEventListener("click", ()=>{setTimeout(()=>{openclose()},1400)});
k = 0;
if(width > 850){
    window.addEventListener("scroll", (e)=>{
        let scrollpos = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0);
        scrollpos += 0.5*vh;
        if(scrollpos > (k+1)*vh){
            navInner[k].style.color = "black";
            k++;
            navInner[k].style.color = colors[k];
        }
        if(scrollpos < (k)*vh){
            navInner[k].style.color = "black";
            k--;
            navInner[k].style.color = colors[k];
        }
    })
}
else{
    let vh = window.innerHeight;
    window.addEventListener("scroll", (e)=>{
        let scrollpos = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0);
        scrollpos += 0.4*vh;
        if(scrollpos > (k+1)*vh){
            navlinks[k].style.color = "black";
            k++;
            navlinks[k].style.color = colors[k];
        }
        if(scrollpos < (k)*vh){
            navlinks[k].style.color = "black";
            k--;
            navlinks[k].style.color = colors[k];
    
        }
    })
}




