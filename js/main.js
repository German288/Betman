const swiper = new Swiper('.main-slider', {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: '.main-slider__arrow',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 2,
      }
    }
});

let burger = document.querySelector('.menu-burger');
let closeMenu = document.querySelector('.header__menu-close');
let menuMobile = document.querySelector('.header');

burger.addEventListener('click', () => {
  menuMobile.style.display = 'block';
});

closeMenu.addEventListener('click', () => {
  menuMobile.style.display = 'none';
});