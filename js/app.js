// Top Navigation
const navMenu = document.getElementById('nav_menu'),
navToggle = document.getElementById('nav_toggle'),
navClose = document.getElementById('nav_close')

if (navToggle) {
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if (navClose) {
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav_link')
const linkAction = () =>{
    const navMenu = document.getElementById('nav_menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// Blur Header
const blurHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 120 ? header.classList.add('blur-header') : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

// Scroll Reveal Animation
const sections = document.querySelectorAll(".section");

document.addEventListener("scroll", function() {
    sections.forEach(section => {
        if (isInView(section)) {
            section.classList.add("section--visible");
        }
    })
})

function isInView(element) {
    const rect = element.getBoundingClientRect();
    return rect.bottom > 0 && rect.top < (window.innerHeight - 150 || document.documentElement.clientHeight - 150)
}

// Counters
const counters = document.querySelectorAll(".counters h1");
const container = document.querySelector(".counters");

let activated = false;

window.addEventListener("scroll", () => {
    if (
        pageYOffset > container.offsetTop - container.offsetHeight - 560 && activated === false
    ) {
        counters.forEach(counter => {
            counter.innerText = 0;
            let count = 0;
            function updateCount() {
                const target = parseInt(counter.dataset.count);
                if (count < target) {
                    count++;
                    counter.innerText = count;
                    setTimeout(updateCount, 2);
                } else {
                    counter.innerText = target;
                }
            }

            updateCount();
            activated = true;
        });
    } else if (
        pageYOffset < container.offsetTop - container.offsetHeight - 800 || pageYOffset === 0
        && activated === true
    ) {
        counters.forEach(counter => {
            counter.innerText = 0;
        });
        activated = false;
    }
});

// Partner Slick
$(document).ready(function() {
    $('#partners').slick({
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 820,
        slidesToShow: 4,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });
});

// Photo Gallery
$('.gallery').slick({
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000
});

// FAQs
const faqs = document.querySelectorAll(".faq");
faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
})

// Show Scroll Up
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)