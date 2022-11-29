// debugger

let menu = document.getElementById('menu');
let burger = document.getElementById('burger');
let cl = document.getElementById('close');

let bg = document.getElementById('shadow');



burger.addEventListener('click', function () {
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
        bg.classList.remove('active');
    } else {
        menu.classList.toggle('active');
        bg.classList.toggle('active');
    }
});

cl.addEventListener('click', function () {
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
        bg.classList.remove('active');
    } else {
        menu.classList.toggle('active');
        bg.classList.toggle('active');
    }
});

let swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 66,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper__top-next",
        prevEl: ".swiper__top-prev"
    }
});

if (window.outerWidth < 900) {
    document.querySelector('.swiper-pagination').remove()
    swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 1,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: false,
        navigation: {
            nextEl: ".swiper__top-next",
            prevEl: ".swiper__top-prev"
        }
    });
}
