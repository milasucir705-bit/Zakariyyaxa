// =====================================
// SMOOTH SCROLL
// =====================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({ behavior:"smooth" });
    });
});

// =====================================
// NAVBAR SCROLL EFFECT
// =====================================
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
    if(window.scrollY > 50){
        navbar.style.background = "rgba(0,0,0,0.85)";
        navbar.style.backdropFilter = "blur(20px)";
        navbar.style.boxShadow = "0 0 20px rgba(77,166,255,.15)";
    } else {
        navbar.style.background = "rgba(0,0,0,.35)";
        navbar.style.boxShadow = "none";
    }
});

// =====================================
// SCROLL REVEAL & HERO FADE
// =====================================
const revealElements = document.querySelectorAll(".glass-card, .card, .skill-card, .portfolio-card, .contact-item");
const hero = document.querySelector(".hero");

const revealOnScroll = () => {
    revealElements.forEach(element => {
        const windowHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;
        const revealPoint = 120;
        if(revealTop < windowHeight - revealPoint){
            element.classList.add("active");
        }
    });
};

window.addEventListener("scroll", () => {
    revealOnScroll();
    const scroll = window.pageYOffset;
    hero.style.backgroundPositionY = scroll * 0.4 + "px";
});
revealOnScroll();

// =====================================
// TYPING EFFECT HERO TITLE
// =====================================
const title = document.querySelector(".hero h1");
const originalText = title.innerText;
title.innerText = "";
let index = 0;

function typeText(){
    if(index < originalText.length){
        title.innerText += originalText.charAt(index);
        index++;
        setTimeout(typeText, 80);
    }
}
window.addEventListener("load", typeText);

// =====================================
// GLOW FOLLOW MOUSE
// =====================================
document.addEventListener("mousemove", (e) => {
    document.documentElement.style.setProperty("--mouse-x", e.clientX + "px");
    document.documentElement.style.setProperty("--mouse-y", e.clientY + "px");
});

// =====================================
// MODAL DETAIL SYSTEM (FIXED & BEAUTIFIED)
// =====================================
const detailInfo = {
    "Hasil Tugas": "Keberhasilan tugas sekolah jurusan TKJ, dari tugas coding portofolio ini.",
    "Karya Desain": "Eksperimen desain grafis dan editing foto dengan gaya Y2K dan Brutalism, termasuk render otomotif yang saya kerjakan.",
    "Foto Kegiatan": "Dokumentasi aktivitas di sekolah, kegiatan kelas XA, hingga hobi car spotting saya di waktu luang.",
    "Project Sekolah": "Dokumentasi teknis project TKJ seperti coding, perakitan PC, instalasi jaringan lokal, dan konfigurasi server.",
    "Sertifikat": "Penghargaan dan sertifikat kompetensi yang diraih sebagai bukti kemampuan saya di bidang teknologi dan kreatif."
};

const modal = document.getElementById('modalDetail');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');

// Fungsi buka modal
document.querySelectorAll('.portfolio-content button').forEach(btn => {
    btn.addEventListener('click', () => {
        const cardTitle = btn.parentElement.querySelector('h3').innerText;
        modalTitle.innerText = cardTitle;
        modalDesc.innerText = detailInfo[cardTitle] || "Detail project belum ditambahkan.";
        modal.style.display = 'flex';
    });
});

// Fungsi tutup modal
function closeModal() {
    modal.style.display = 'none';
}

// Tutup modal kalau klik area luar kotak
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}
