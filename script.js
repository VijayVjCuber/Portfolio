const darkbutton=document.getElementById("dark");
const lightbutton=document.getElementById("light");
const body = document.body;
const menu = document.getElementsByClassName("hamburger")[0];
const navbar = document.getElementById("main-nav");

// Adding navbar fixed after scrolling 
const nav = document.querySelector("#navigation-bar");
const goto_top = document.querySelector("#go-to-top");
let nav_height = nav.getBoundingClientRect().height;
window.addEventListener('scroll', () => {
    let scroll_height = window.pageYOffset;
    console.log(scroll_height);
    if(scroll_height>nav_height){
        nav.classList.add("navbar-fixed");
    }
    else{
        nav.classList.remove("navbar-fixed");
    }
    if(scroll_height>1650){
        goto_top.classList.add("go-to-btn-visible");
    }
    else{
        goto_top.classList.remove("go-to-btn-visible");
    }
})

// Dropdown menu for Theme
const has_dropdown = document.getElementsByClassName("has-dropdown")[0];
const dropdown = document.getElementsByClassName("dropdown")[0];

has_dropdown.onclick = () => {
    if(dropdown.classList.contains("drop-hidden")){
        dropdown.classList.replace("drop-hidden","drop-visible");
    }
    else{
        dropdown.classList.replace("drop-visible","drop-hidden");
    }
}

// THEMES
darkbutton.onclick = () => {
    body.classList.replace('light', 'dark');
}

lightbutton.onclick = () => {
    body.classList.replace('dark', 'light');
}


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

goto_top.onclick = () =>{
    welcomescreen.scrollIntoView();
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

