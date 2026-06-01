// =====================================
// SMOOTH SCROLL
// =====================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target =
        document.querySelector(
        this.getAttribute("href")
        );

        target.scrollIntoView({
            behavior:"smooth"
        });

    });

});


// =====================================
// NAVBAR SCROLL EFFECT
// =====================================

const navbar =
document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.style.background =
        "rgba(0,0,0,0.85)";

        navbar.style.backdropFilter =
        "blur(20px)";

        navbar.style.boxShadow =
        "0 0 20px rgba(77,166,255,.15)";

    }

    else{

        navbar.style.background =
        "rgba(0,0,0,.35)";

        navbar.style.boxShadow =
        "none";

    }

});


// =====================================
// SCROLL REVEAL
// =====================================

const revealElements =
document.querySelectorAll(
".glass-card, .card, .skill-card, .portfolio-card, .contact-item"
);

const revealOnScroll = () => {

    revealElements.forEach(element => {

        const windowHeight =
        window.innerHeight;

        const revealTop =
        element.getBoundingClientRect().top;

        const revealPoint = 120;

        if(revealTop < windowHeight - revealPoint){

            element.classList.add("active");

        }

    });

};

window.addEventListener(
"scroll",
revealOnScroll
);

revealOnScroll();


// =====================================
// HERO FADE EFFECT
// =====================================

const hero =
document.querySelector(".hero");

window.addEventListener("scroll", () => {

    const scroll =
    window.pageYOffset;

    hero.style.backgroundPositionY =
    scroll * 0.4 + "px";

});


// =====================================
// TYPING EFFECT HERO TITLE
// =====================================

const title =
document.querySelector(".hero h1");

const originalText =
title.innerText;

title.innerText = "";

let index = 0;

function typeText(){

    if(index < originalText.length){

        title.innerText +=
        originalText.charAt(index);

        index++;

        setTimeout(typeText, 80);

    }

}

window.addEventListener(
"load",
typeText
);


// =====================================
// GLOW FOLLOW MOUSE
// =====================================

document.addEventListener(
"mousemove",
(e) => {

    document.documentElement.style.setProperty(
    "--mouse-x",
    e.clientX + "px"
    );

    document.documentElement.style.setProperty(
    "--mouse-y",
    e.clientY + "px"
    );

});


// =====================================
// PORTFOLIO BUTTON DEMO
// =====================================

const buttons =
document.querySelectorAll(
".portfolio-content button"
);

buttons.forEach(button => {

    button.addEventListener("click", () => {

        alert(
        "Kumpulan dokumentasi akademik dan eksplorasi kreatif dalam dunia teknologi"
        );

    });

});