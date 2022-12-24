let nav_btn = document.querySelector('.nav_open_btn');
let nav_close = document.querySelector('.nav_close');
let mobile_side = document.querySelector('.mobile-navbar');

nav_btn.onclick = () => {
    mobile_side.classList.add('active');
}

nav_close.onclick = () => {
    mobile_side.classList.remove('active');
}