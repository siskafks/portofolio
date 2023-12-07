//Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}

//Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

//slider
let slideIndex = [1,1,1,1,1];
let slideId = ["slide1", "slide2", "slide3","slide4","slide5"]

function nextSlide(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
    let i;
    let x = document.getElementsByClassName(slideId[no]);

    if (n > x.length) {
        slideIndex[no] = 1
    }    
    
    if (n < 1) {
        slideIndex[no] = x.length
    }

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }

    x[slideIndex[no]-1].style.display = "block";  
}

for (let i = 0; i < slideId.length; i++) {
    showSlides(1, i);
}