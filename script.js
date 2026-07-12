/*=========================================================
            PRIYANSHI GUPTA PORTFOLIO
=========================================================*/

/*=========================================================
                    LOADER
=========================================================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

    }, 1200);

});


/*=========================================================
                SCROLL PROGRESS BAR
=========================================================*/

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    const scrollTop =
        document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (scrollTop / scrollHeight) * 100;

    progressBar.style.width = progress + "%";

});


/*=========================================================
                    CURSOR GLOW
=========================================================*/

const cursor =
    document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";

    cursor.style.top = e.clientY + "px";

});


/*=========================================================
                    TYPING EFFECT
=========================================================*/

const typingText =
    document.getElementById("typing-text");

const words = [

    "B.Tech IT Student",

    "Web Developer",

    "AI Enthusiast",

    "Creative Learner"

];

let wordIndex = 0;

let charIndex = 0;

let deleting = false;

function typingEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingText.textContent =
            currentWord.substring(0, charIndex++);

        if (charIndex > currentWord.length) {

            deleting = true;

            setTimeout(typingEffect, 1200);

            return;

        }

    }

    else {

        typingText.textContent =
            currentWord.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(
        typingEffect,
        deleting ? 60 : 120
    );

}

typingEffect();


/*=========================================================
                ACTIVE NAVBAR LINKS
=========================================================*/

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/*=========================================================
                HEADER SCROLL EFFECT
=========================================================*/

const header =
    document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background =
            "rgba(9,9,11,.90)";

        header.style.boxShadow =
            "0 10px 30px rgba(0,0,0,.30)";

    }

    else {

        header.style.background =
            "rgba(9,9,11,.65)";

        header.style.boxShadow =
            "none";

    }

});
/*=========================================================
                DARK / LIGHT MODE
=========================================================*/

const themeBtn = document.getElementById("theme-toggle");

const themeIcon = themeBtn.querySelector("i");

if(localStorage.getItem("theme") === "light"){

    document.body.classList.add("light");

    themeIcon.className = "ri-sun-fill";

}

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){

        localStorage.setItem("theme","light");

        themeIcon.className = "ri-sun-fill";

    }

    else{

        localStorage.setItem("theme","dark");

        themeIcon.className = "ri-moon-fill";

    }

});


/*=========================================================
                MOBILE MENU
=========================================================*/

const menuBtn = document.getElementById("menu-btn");

const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click",()=>{

    navbar.classList.toggle("show-menu");

    if(navbar.classList.contains("show-menu")){

        menuBtn.innerHTML='<i class="ri-close-line"></i>';

    }

    else{

        menuBtn.innerHTML='<i class="ri-menu-3-line"></i>';

    }

});

document.querySelectorAll("nav a").forEach(link=>{

    link.addEventListener("click",()=>{

        navbar.classList.remove("show-menu");

        menuBtn.innerHTML='<i class="ri-menu-3-line"></i>';

    });

});


/*=========================================================
                SCROLL REVEAL
=========================================================*/

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.15
});

document.querySelectorAll(".section").forEach(section=>{

    observer.observe(section);

});


/*=========================================================
                SCROLL TO TOP
=========================================================*/

const scrollTopBtn = document.getElementById("scroll-top");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 500){

        scrollTopBtn.style.opacity="1";

        scrollTopBtn.style.pointerEvents="auto";

    }

    else{

        scrollTopBtn.style.opacity="0";

        scrollTopBtn.style.pointerEvents="none";

    }

});

scrollTopBtn.addEventListener("click",(e)=>{

    e.preventDefault();

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/*=========================================================
                SMOOTH NAVIGATION
=========================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


/*=========================================================
                FLOATING BLOBS
=========================================================*/

const blobs=document.querySelectorAll(".blob");

window.addEventListener("mousemove",(e)=>{

    const x=e.clientX/window.innerWidth;

    const y=e.clientY/window.innerHeight;

    blobs.forEach((blob,index)=>{

        const speed=(index+1)*12;

        blob.style.transform=
        `translate(${x*speed}px,${y*speed}px)`;

    });

});


/*=========================================================
                CONTACT FORM
=========================================================*/

const form=document.querySelector("form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank you! Your message has been received.");

form.reset();

});

}


/*=========================================================
                FINISHED
=========================================================*/

console.log("%cPortfolio Loaded Successfully 🚀",
"color:#00d4ff;font-size:18px;font-weight:bold;");