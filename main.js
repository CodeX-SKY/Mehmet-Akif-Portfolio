let button = document.querySelector(".none-media-block");
let ma = document.querySelector(".site-name");
let tepa = document.querySelector(".top");
let menubox = document.querySelector(".menu");
let menu1 = document.querySelector(".link1");
let menu2 = document.querySelector(".link2");
let menu3 = document.querySelector(".link3");
let menu4 = document.querySelector(".link4");

button.addEventListener('click' , function() {
    menu1.classList.toggle("menu-links2");
    menu2.classList.toggle("menu-links2");
    menu3.classList.toggle("menu-links2");
    menu4.classList.toggle("menu-links2");
    ma.classList.toggle("remove");
    tepa.classList.toggle("top2");
    menubox.classList.toggle("menu2");
})