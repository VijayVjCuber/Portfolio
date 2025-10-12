const darkbutton=document.getElementById("dark");
const lightbutton=document.getElementById("light");
const body = document.body;
const menu = document.getElementsByClassName("hamburger")[0];
const navbar = document.getElementById("main-nav");

// Adding navbar fixed after scrolling 
const nav = document.querySelector("#navigation-bar");
const goto_top = document.querySelector("#go-to-top");
let nav_height = body.getBoundingClientRect().height;
let screen_height = document.getElementById("contact").offsetTop;

window.addEventListener('scroll', () => {
    let scroll_height = window.pageYOffset;
    if(scroll_height>nav_height){
        nav.classList.add("navbar-fixed");
    }
    else{
        nav.classList.remove("navbar-fixed");
    }
    if(scroll_height>(screen_height)){
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

// // Typing animation for Work experience
// var typed = new Typed('#typing-old-experience', {
//   strings: [
//     "<h1>Tata Consultancy Services - India</h1><div class='work-title'><h3>Assistant Systems Engineer</h3><h4>FEB, 2020 - SEP, 2023</h4></div><ul><li>Managed and renewed digital signing certificates on build machines, ensuring secure, compliant, and uninterrupted software releases</li><li>Executed software testing and validations in ATM monitoring systems, enhancing reliability and reducing post-release defects</li><li>Creation of high quality test cases for Developer Integrations tests which made sure zero to very few bugs/errors reported after SIT testing</li><li>Creation of high quality and clear Standard Operation Procedure documentation of new tools to ensure easier knowledge transfer for new employees</li><li>Configuring and managing nodes in ATM monitoring software.</li></ul>"
//             ],
//   typeSpeed: 5,
//   showCursor: false, // Hide the cursor after typing
// });


// Line animation while scrolling

// const observerOptions = {
//   root: null, // This is almost always correct for viewport scrolling
//   threshold: 1, // Use a small value to test if it works at all
// };


// const observer = new IntersectionObserver((entries, observer) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       // Add the 'active' class to your line to trigger the animation
//       document.querySelector('.vertical-line').classList.add('active');
//       console.log('Intersection Observer triggered!'); // Check the console
//       observer.unobserve(entry.target);
//     }
//   });
// }, observerOptions);

// const workExperienceSection = document.querySelector('#work-experience-section');
// if (workExperienceSection) {
//   observer.observe(workExperienceSection);
// }


document.addEventListener('DOMContentLoaded', function() {
    const workExperienceSection = document.querySelector('#work-experience-section');
    const oldExperienceElement = document.getElementById('typing-old-experience');
    const recentExperienceElement = document.getElementById('typing-recent-experience');
    const verticalLine = document.querySelector('.vertical-line');

    const observerOptions = {
        threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 1. Start the old experience typing animation
                new Typed(oldExperienceElement, {
                    strings: [
                        "<h1>Tata Consultancy Services - India</h1><div class='work-title'><h3>Assistant Systems Engineer</h3><h4>FEB, 2020 - SEP, 2023</h4></div><ul><li>Managed and renewed digital signing certificates on build machines, ensuring secure, compliant, and uninterrupted software releases</li><li>Executed software testing and validations in ATM monitoring systems, enhancing reliability and reducing post-release defects</li><li>Creation of high quality test cases for Developer Integrations tests which made sure zero to very few bugs/errors reported after SIT testing</li><li>Creation of high quality and clear Standard Operation Procedure documentation of new tools to ensure easier knowledge transfer for new employees</li><li>Configuring and managing nodes in ATM monitoring software.</li></ul>"
                    ],
                    typeSpeed: 5,
                    showCursor: false,
                    onComplete: (self) => {
                        // 2. After old experience is typed, start the line animation
                        verticalLine.classList.add('active');

                        // 3. After the line animation, start the recent experience typing
                        // We use a setTimeout to wait for the CSS animation to finish
                        setTimeout(() => {
                            new Typed(recentExperienceElement, {
                                strings: [
                                    "<h1>Tata Consultancy Services - Mexico</h1><div class='work-title'><h3>Systems Engineer</h3><h4>SEP, 2023 - PRESENT</h4></div><ul><li>Handled build and release processes using Bitbucket, Git Bash, Jenkins, and AWS S3, ensuring reliable software packaging and timely delivery</li><li>Delivered L3 production support by troubleshooting and resolving critical incidents, ensuring maximum system uptime in ATM.</li><li>Led daily client calls, driving clear communication and faster issue resolution, improving stakeholder satisfaction and trust.</li><li>Cross-functional Collaboration with development, QA and operations teams, ensuring smooth end-to-end delivery</li><li>Software Testing and Validation using ATM monitoring systems, ensuring stability and reliability in mission-critical environments(UAT and PRODUCTION).</li></ul>"
                                ],
                                typeSpeed: 5,
                                showCursor: false,
                            });
                        }, 2800); // This delay should match your CSS transition duration
                    }
                });

                // Stop observing once it's triggered
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    if (workExperienceSection) {
        observer.observe(workExperienceSection);
    }
});