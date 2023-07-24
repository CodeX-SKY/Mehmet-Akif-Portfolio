let clickcolor = document.querySelector(".ccl1");
let clickcolor2 = document.querySelector(".ccl2");
let clickcolor3 = document.querySelector(".ccl3");
let button = document.querySelector(".button");
let st = document.querySelector(".site-name");
let menu = document.querySelector(".menu");
let links1 = document.querySelector(".link1");
let links2 = document.querySelector(".link2");
let links3 = document.querySelector(".link3");
let links4 = document.querySelector(".link4");
let clicktoabout = document.querySelector(".not-active");
let chatbutton = document.querySelector(".page2-link");

button.addEventListener('click' , function(){
    clickcolor.classList.toggle("color-me");
    clickcolor2.classList.toggle("color-me");
    clickcolor3.classList.toggle("color-me");
    st.classList.toggle("remove-st");
    menu.classList.toggle("menu2");
    links1.classList.toggle("menu-links2");
    links2.classList.toggle("menu-links2");
    links3.classList.toggle("menu-links2");
    links4.classList.toggle("menu-links2");
})

chatbutton.addEventListener('click' , function(){
    clicktoabout.classList.toggle("active");
})