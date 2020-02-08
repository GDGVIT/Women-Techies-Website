
window.onload = function () {

    const preloader = document.querySelector(".preloader");
    const main = document.querySelector(".main");
    const desktopNav = document.querySelector(".desktop-nav");
    const mobile = document.querySelector(".mobile");
    if (window.innerWidth > 850) {
        main.classList.remove("display-none");
        main.classList.add("display");
        desktopNav.classList.remove("display-none");
        desktopNav.classList.add("display");
        preloader.classList.remove("display");
        preloader.classList.add("display-none")
    }
    else {
        main.classList.remove("display-none");
        main.classList.add("display");
        mobile.classList.remove("display-none");
        mobile.classList.add("display");
        preloader.classList.remove("display");
        preloader.classList.add("display-none")
    }
    function lochasChanged(){
        console.log("using hash")
        var elId = location.hash.replace('#', '');
        var scrollToEl = document.getElementById(elId);
        scrollToEl.scrollIntoView(true);
    }
    window.onhashchange = lochasChanged;
    const button = document.querySelector(".ham");
    const navItems = document.querySelector(".nav-items");
    const navInner = document.querySelectorAll(".nav-inner a")
    const lines = document.querySelectorAll(".ham div");
    const navlinks = document.querySelectorAll(".nav-items a");
    const body = document.querySelector("body");
    const colors = ["rgb(255, 167, 87)", "rgb(164,27,228)", "rgb(252,37,126)", "rgb(164,27,228)", "rgb(252,37,126)", "rgb(164,27,228)", "rgb(255, 167, 87)", "rgb(252,37,126)", "rgb(164,27,228)"];
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
                height_color[o] += 5 * heights[j];
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
    window.addEventListener("resize", ()=>{
        if (window.innerWidth > 850) {
            main.classList.remove("display-none");
            main.classList.add("display");
            desktopNav.classList.remove("display-none");
            desktopNav.classList.add("display");
            preloader.classList.remove("display");
            preloader.classList.add("display-none");
            mobile.classList.remove("display");
            mobile.classList.add("display-none");
        }
        else {
            main.classList.remove("display-none");
            main.classList.add("display");
            mobile.classList.remove("display-none");
            mobile.classList.add("display");
            desktopNav.classList.remove("display")
            desktopNav.classList.add("display-none")
            preloader.classList.remove("display");
            preloader.classList.add("display-none")
        }
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
        height_color = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        height_openclose = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        height_color_desk = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (j = 0; j <= 9; j++) {
            for (o = 0; o <= j; o++) {
                if (o == 9) {
                    height_color_desk[o] += 3 * heights[j];
                    height_color[o] += 5 * heights[j];
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
        console.log(height_color)
        console.log(height_openclose)
        console.log(height_color_desk)
    })
    function openclose() {
        navItems.classList.toggle("open");
        lines[0].classList.toggle("merge");
        lines[1].classList.toggle("merge");
        body.classList.toggle("overflow");
    }
    button.addEventListener("click", () => {
        openclose();
    });
    let k = 0;
    window.addEventListener("scroll", () => {
        if (window.innerWidth > 850) {
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
                panel.classList.remove("black-border")
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
                panel.classList.add("black-border")
            }
        });
    }
    const rest = document.querySelector(".rest");
    const showmore = document.querySelector(".showmore")
    let r = 0;
    showmore.addEventListener("click", () => {
        r++;
        rest.classList.toggle("display");
        if (r % 2 == 1) {
            showmore.innerHTML = "Show Less";
        }
        else {
            showmore.innerHTML = "Show More";
        }
    });

}

let a = -1;
function assign(b) {
    a = b;
}


