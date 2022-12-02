// debugger

let menu = document.getElementById('menu');
let burger = document.getElementById('burger');
let cl = document.getElementById('close');
let bg = document.getElementById('shadow');


burger.addEventListener('click', function () {
    if (menu.classList.contains('active')) {
        menu.style.display = "none"
        menu.classList.remove('active');
        bg.classList.remove('active');
    } else {
        menu.style.display = "flex"
        menu.classList.toggle('active');
        bg.classList.toggle('active');
    }
});

cl.addEventListener('click', function () {
    if (menu.classList.contains('active')) {
        menu.style.display = "none"
        menu.classList.remove('active');
        bg.classList.remove('active');
    } else {
        menu.classList.toggle('active');
        bg.classList.toggle('active');
    }
});

if (window.outerWidth > 900) {
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
} else {
    document.querySelector('.swiper-pagination').remove()
    let swiper = new Swiper(".mySwiper", {
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


let swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    spaceBetween: 0,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: ".swiper__bottom-next",
        prevEl: ".swiper__bottom-prev"
    }
});

