let isOpen = false;

function setBurgerMenu() {
    const menu = document.getElementById('burger-menu');
    console.log(menu);
    isOpen = !isOpen;
    if (isOpen) {
        menu.className = 'burger-menu-active';
    } else {
        menu.className = 'burger-menu';
    }
}