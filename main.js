let openMenuButton = document.querySelector('.nav_toggler');
let closeMenuButton = document.querySelector('.menu_close');
let menu = document.querySelector('.menu');
let menuOverlay = document.querySelector('.menu_overlay');



openMenuButton.onclick = function() {
    menu.classList.add('menu_show');
    menuOverlay.classList.add('menu_overlay_show');
};

closeMenuButton.onclick = function() {
    menu.classList.remove('menu_show');
    menuOverlay.classList.remove('menu_overlay_show');
};