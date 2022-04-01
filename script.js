const darkbutton=document.getElementById("dark");
const lightbutton=document.getElementById("light");
const body = document.body;
const menu = document.getElementsByClassName("hamburger")[0];
const navbar = document.getElementById("main-nav");

// Adding navbar fixed after scrolling 
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

// Navigating buttons
const about_btn = document.getElementById("about-btn");
const work_btn = document.getElementById("work-btn");
const contact_btn = document.getElementById("contact-btn");

// Navigating sections
const welcomescreen = document.getElementById("welcome-section");
const projectscreen = document.getElementById("projects");
const contactscreen = document.getElementById("contact");

// Navigating function
about_btn.onclick= () => {
    welcomescreen.scrollIntoView();
}

work_btn.onclick= () => {
    projectscreen.scrollIntoView();
}

contact_btn.onclick= () => {
    contactscreen.scrollIntoView();
}



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
        navbar.classList.replace("navbar-hidden", "navbar-visible");
    }
    else{
        body.classList.remove('cross');
        navbar.classList.replace("navbar-visible","navbar-hidden");
    }
})

