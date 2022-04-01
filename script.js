const darkbutton=document.getElementById("dark");
const lightbutton=document.getElementById("light");
const body = document.body;
const menu = document.getElementsByClassName("hamburger")[0];
const navbar = document.getElementById("main-nav");

const nav = document.querySelector("#navigation-bar");
let nav_height = nav.getBoundingClientRect().height;

window.addEventListener('scroll', () => {
    let scroll_height = window.pageYOffset;
    if(scroll_height>nav_height){
        nav.classList.add("navbar-fixed");
    }
    else{
        nav.classList.remove("navbar-fixed");
    }
})

// THEMES
darkbutton.onclick = () => {
    body.classList.replace('light', 'dark');
}

lightbutton.onclick = () => {
    body.classList.replace('dark', 'light');
}


// CLICK EVENT FOR HAMBURGER MENU

menu.addEventListener('click', () => {
    if(navbar.classList.contains("navbar-hidden")){
        body.classList.add('cross');
        navbar.classList.remove("navbar-hidden");
        navbar.classList.add("navbar-visible");
    }
    else{
        body.classList.remove('cross');
        navbar.classList.remove("navbar-visible");
        navbar.classList.add("navbar-hidden");
    }
})

