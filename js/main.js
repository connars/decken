// debugger

let menu = document.getElementById('menu');
let burger = document.getElementById('burger');
let cl = document.getElementById('close');
let bg = document.getElementById('shadow');


burger.addEventListener('click', function () {
    if (menu.classList.contains('active')) {
        // menu.style.display = "none"
        menu.classList.remove('active');
        bg.classList.remove('active');
    } else {
        // menu.style.display = "flex";
        menu.classList.toggle('active');
        bg.classList.toggle('active');
    }
});

cl.addEventListener('click', function () {
    if (menu.classList.contains('active')) {
        // menu.style.display = "none"
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


if (window.outerWidth > 900) {
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
} else {
    let swiper2 = new Swiper(".mySwiper2", {
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
            nextEl: ".swiper__bottom-next",
            prevEl: ".swiper__bottom-prev"
        }
    });
}

let form = document.getElementById("form");
let button = document.getElementById('form-btn');

let metersPrice = 39;
let lampsPrice = 200;

let sum;

let errorM = document.getElementById("error__mesg");
let errorMP = document.getElementById("error__mesgP");
let error_length = document.getElementById("error__mesgP-length");



button.addEventListener('click', function () {
    event.preventDefault();
        let phone = document.getElementById("tel").value;
        let color = +document.getElementById('color').value;
        let matherial = +document.getElementById('matherial').value;
        let polotno = +document.getElementById('polotno').value;
        let lamps = +document.getElementById('lamps').value * lampsPrice;
        let meters = +document.getElementById('meters').value * metersPrice;

        var radios = document.getElementsByName("el");
        var selected = Array.from(radios).find(radio => radio.checked);

        if (selected === undefined) {
            errorM.style.display = "block";
            console.log(selected);
        } else if (phone.length === 0){
            errorMP.style.display = "block";
            console.log(phone);
        } else if (phone.length < 10){
            error_length.style.display = "block";
            console.log(phone);
        } else {
            sum = color + matherial + polotno + lamps + meters + Number(selected.value);
            console.log(sum);
            // document.getElementById('form').submit();
        }

});

console.log(sum)


document.querySelector('#rc-phone-icon').addEventListener("click", function(){   
    this.classList.toggle('open');
    document.getElementById('rc-phone').classList.toggle('open');
});