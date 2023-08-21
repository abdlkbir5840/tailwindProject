let btn = document.querySelector('#menu-toggle')
let menu = document.querySelector('#mobile-menu')

btn.addEventListener("click", function() {
    menu.classList.toggle('hidden');
});