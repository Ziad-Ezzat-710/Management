let toggle = document.querySelector(".toggle-menu");
let ulist = document.querySelector("ul");
let x = document.querySelector(".close");
x.style.display = "none";
function sub() {
    ulist.style.display = "flex";
    ulist.style.flexDirection = "column-reverse";
    toggle.style.display = "none";
    x.style.display = "block";
}
function hid() {
    ulist.style.display = "none";
    x.style.display = "none";
    toggle.style.display = "block";
}
// (window.matchMedia("(min-width: 768px)").matches)