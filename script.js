let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
        menuIcon.classList.toggle('fa-xmark');
        navbar.classList.toggle('active');
}

// remove menubar on click
        menuIcon.classList.remove('fa-xmark');
        navbar.classList.remove('active');


window.onscroll = () => {
let header = document.querySelector('.header');

header.classList.toggle('sticky',window.scrollY > 100);
};



// scroll
ScrollReveal({
     reset: true,
     distance: '80px',
     duration: 2000,
     delay: 200
});

ScrollReveal().reveal('.home-content, .heading',
    { origin: 'top' });


