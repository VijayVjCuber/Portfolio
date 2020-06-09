const darkbutton=document.getElementById("dark");
const lightbutton=document.getElementById("light");
const body = document.body;
const menu = document.getElementsByClassName("hamburger")[0];
const navbar = document.getElementsByClassName("main-nav")[0];

// THEMES
darkbutton.onclick = () => {
    body.classList.replace('light', 'dark');
}

lightbutton.onclick = () => {
    body.classList.replace('dark', 'light');
}


// CLICK EVENT FOR HAMBURGER MENU
menu.addEventListener('click', () => {
    if(navbar.style.display === "flex"){
        navbar.style.display = "none";
    }
    else{
        navbar.style.display = "flex";
    }
})