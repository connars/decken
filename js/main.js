// debugger

let menu = document.getElementById('menu');
let burger = document.getElementById('burger');
let cl = document.getElementById('close');

let bg = document.getElementById('shadow');



burger.addEventListener('click', function(){
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
        bg.classList.remove('active');
    } else {
        menu.classList.toggle('active');
        bg.classList.toggle('active');
        bg.style.transition = "0.5s";
    }
});

cl.addEventListener('click', function(){
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
        bg.classList.remove('active');
    } else {
        menu.classList.toggle('active');
        bg.classList.toggle('active');
    }
});


