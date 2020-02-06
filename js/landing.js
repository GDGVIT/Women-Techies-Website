if (location.hash) {
    setTimeout(function () {
        window.scrollTo(0, 0);
    }, 1);
}
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const inner = document.querySelector(".inner");
z = 0;
let hea = document.querySelector(".timeline").clientWidth;
let width_svg = hea - 0.8 * window.innerWidth;
function move(t) {
    if (t == 0) {
        z += 200;
        if (z > width_svg) {
            z -= 200;
        }
        inner.style.transform = "translateX(-" + z + "px)";
    }
    if (t == 1) {
        z -= 200;
        if (z < 0) {
            z = 0;
        }
        inner.style.transform = "translateX(-" + z + "px)";
    }
}
right.addEventListener("click", move(0));
right.addEventListener("touchstart", move(0));
left.addEventListener("click", move(1));
left.addEventListener("touchstart", move(1));

const button = document.querySelector(".ham");
const navItems = document.querySelector(".nav-items");
const navInner = document.querySelectorAll(".nav-inner a")
const lines = document.querySelectorAll(".ham div");
const navlinks = document.querySelectorAll(".nav-items a");
const body = document.querySelector("body");
const colors = ["rgb(255, 167, 87)", "rgb(164,27,228)", "rgb(252,37,126)", "rgb(164,27,228)", "rgb(252,37,126)", "rgb(164,27,228)", "rgb(255, 167, 87)", "rgb(252,37,126)", "rgb(164,27,228)"]
const t1 = gsap.timeline();
let heights = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
heights[0] = 0;
heights[1] = document.querySelector("#one").clientHeight;
heights[2] = document.querySelector("#two").clientHeight;
heights[3] = document.querySelector("#three").clientHeight;
heights[4] = document.querySelector("#four").clientHeight;
heights[5] = document.querySelector("#five").clientHeight;
heights[6] = document.querySelector("#six").clientHeight;
heights[7] = document.querySelector("#seven").clientHeight;
heights[8] = document.querySelector("#eight").clientHeight;
heights[9] = document.querySelector("#nine").clientHeight;
let height_color = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let height_openclose = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let height_color_desk = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
for (j = 0; j <= 9; j++) {
    for (o = 0; o <= j; o++) {
        if (o == 9) {
            height_color_desk[o] += 3 * heights[j];
            height_color[o] += 4 * heights[j];
        }
        else {
            height_color_desk[j] += heights[o];
            height_color[j] += heights[o];
        }
        if (o == j) {
            height_openclose[j] += 0.8 * heights[o];
        }
        else {
            height_openclose[j] += heights[o];
        }
    }
}
let i = 0;
let a = -1;
function openclose() {
    navItems.classList.toggle("open");
    lines[0].classList.toggle("merge");
    lines[1].classList.toggle("merge");
    body.classList.toggle("overflow");
    if (i == 9) {
        i = 0;
    }
    else {
        for (i = 0; i < 9; i++) {
            t1.fromTo(navlinks[i], {
                opacity: 0
            }, {
                opacity: 1,
                duration: 0.10
            })
        }
    }
}
button.addEventListener("click", () => {
    openclose();
});

let vh = window.innerHeight;
let width = window.innerWidth;
function assign(b) {
    a = b;
}
k = 0;
window.addEventListener("scroll", () => {
    if (width > 850) {
        let scrollpos = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0);
        scrollpos += 0.5 * vh;
        if (scrollpos > height_color_desk[k + 1]) {
            navInner[k].style.color = "black";
            k++;
            navInner[k].style.color = colors[k];

        }
        if (scrollpos < height_color_desk[k]) {
            navInner[k].style.color = "black";
            k--;
            navInner[k].style.color = colors[k];

        }

    }
    else {
        let scrollpos = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0);
        scrollpos += 0.4 * vh;
        if (scrollpos > height_color[k + 1]) {
            navlinks[k].style.color = "black";
            k++;
            navlinks[k].style.color = colors[k];
        }
        if (scrollpos < height_color[k]) {
            navlinks[k].style.color = "black";
            k--;
            navlinks[k].style.color = colors[k];

        }
        if (a != -1) {
            if (scrollpos < height_openclose[a + 1] && scrollpos > height_color[a]) {
                openclose();
                a = -1;
            }
        }
    }
});
var acc = document.getElementsByClassName("accordion");
var q;

for (q = 0; q < acc.length; q++) {
    acc[q].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}




