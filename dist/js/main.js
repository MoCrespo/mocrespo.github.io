const menuBtn = document.querySelector('.menu-btn')
const hambuger = document.querySelector('.menu-btn__burger')

let showMenu = false

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        hambuger.classList.add('open');

        showMenu = true;
    } else {
        hambuger.classList.remove('open')

        showMenu = false
    }
}