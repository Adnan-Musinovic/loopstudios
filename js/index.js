//Loader and animations
const loader = document.querySelector('.loader');
const header = document.querySelector('.header');

window.addEventListener('load', () => {
    loader.style.transform = 'translateY(-100%)';
    header.style.opacity = '1';
    header.style.transform = 'translateY(0%)';
});

//Menu
const menu = document.querySelector('.menu');
const menuLineTop = document.querySelector('.menu__line--top');
const menuLineMid = document.querySelector('.menu__line--mid');
const menuLineBottom = document.querySelector('.menu__line--bottom');

const nav = document.querySelector('.nav');

menu.addEventListener('click', () => {
    nav.classList.toggle('nav--open');

    menuLineTop.classList.toggle('menu__line--top-open');
    menuLineMid.classList.toggle('menu__line--mid-open');
    menuLineBottom.classList.toggle('menu__line--bottom-open');
});