const scriptURL = 'https://script.google.com/macros/s/AKfycbws1lrF333d8SMw993SJSKYggMQiX9Y7NVY3zhW1LEMICTu-FMAk56-33wUK7gVfQTo/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");


var tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-contents")
var sidemenu = document.getElementById("sidemenu")

var typed = new Typed(".auto-type", {
    strings: ["Behzod", "Software Engineer"],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 3000,
    loop: true
})

document.addEventListener("DOMContentLoaded", function () {
    const textBoxes = document.querySelectorAll('.text-box');
    const projects = document.querySelectorAll('.projects-cards');

    if (window.innerWidth <= 600) { 
        textBoxes.forEach(textBox => {
            textBox.setAttribute('data-aos', 'fade-right');  
        });

        projects.forEach(projects => {
            projects.setAttribute('data-aos-delay', '0');  
        });
    }
});

AOS.init({
    duration: 3000,
    once: true,
});

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully"
            setTimeout(function () {
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})


function openmenu() {
    sidemenu.style.right = "0"
}

function closemenu() {
    sidemenu.style.right = "-200px"
}


function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}
