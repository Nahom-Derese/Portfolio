const swup = new Swup();

const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const allNavLinks = document.querySelectorAll('.nav-links ul');

burger.addEventListener("click", () => {
    // navbar animation
    navLinks.classList.toggle('nav-active');

    // navlinks animation
    allNavLinks.forEach((navLinkss, index) => {
        console.log(navLinkss.style.animation);
        if (navLinkss.style.animation) {
            navLinkss.style.animation = '';
        } else {
            navLinkss.style.animation = `fadeIn 0.5s ease-in-out forwards ${index/5 + 0.3}s`;
        }
    });

    // BurgerBtn Animation
    burger.classList.toggle('toggle');
});

window.addEventListener('scroll', function () {
    const header = document.querySelector('.nav-bar');
    const logo = document.querySelector('.Logo-svg');
    const navLink = document.querySelectorAll('.nav-links li');
    header.classList.toggle('scrolling-active', window.scrollY > 0);
    navLink.forEach(link => {
        link.children[0].classList.toggle('scrolling-active-link', window.scrollY > 0);
    });
    navLink[0].classList.toggle('scrolling-active-link', window.scrollY > 0);
    logo.classList.toggle('scrolling-active-link', window.scrollY > 0);
})