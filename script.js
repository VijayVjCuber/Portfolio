const darkbutton=document.getElementById("dark");
const lightbutton=document.getElementById("light");
const body = document.body;

darkbutton.onclick = () => {
    body.classList.replace('light', 'dark');
}

lightbutton.onclick = () => {
    body.classList.replace('dark', 'light');
}