
const navbar = document.getElementsByClassName("navbar")[0];
const menu = document.getElementsByClassName("menu")[0];

menu.addEventListener("click",(e)=>{
    console.log("clicked");
    navbar.classList.toggle("navbar-menu");
})