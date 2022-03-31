const darkbutton=document.getElementById("dark");
const lightbutton=document.getElementById("light");
const body = document.body;
const menu = document.getElementsByClassName("hamburger")[0];
const navbar = document.getElementById("main-nav");
const logo = document.getElementById("logo");

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
        logo.classList.remove("navbar-hidden");
        logo.classList.add("navbar-visible");
    }
    else{
        body.classList.remove('cross');
        navbar.classList.remove("navbar-visible");
        navbar.classList.add("navbar-hidden");
        logo.classList.remove("navbar-visible");
        logo.classList.add("navbar-hidden");
    }
})

