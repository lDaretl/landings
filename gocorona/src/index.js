import './styles/index.scss'

// menu-burger
const body = document.body
const menu = document.getElementById('menu')
const after = document.querySelector('.menu__body::after')
const burger = document.getElementById('burger')

if (burger) {
    burger.addEventListener('click', burgerHandler)

    function burgerHandler() {
        body.classList.toggle('_lock')
        menu.classList.toggle('_active')
        burger.classList.toggle('_active')
    }
}