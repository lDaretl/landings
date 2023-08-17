// menu-burger
const menuButton = document.getElementById('menu-button')

if (menuButton) {
    const menu = document.getElementById('menu');
    const body = document.querySelector('body');

    menuButton.addEventListener('click', () => {
        menuButton.classList.toggle('__active')
        menu.classList.toggle('__active')
        body.classList.toggle('__lock')
    })
}

// mobile-buttons
document.addEventListener('touchstart', (e) => {
    const classes = Array.from(e.target.classList)
    if (classes.includes("button")) {
        e.target.blur()
    }
})