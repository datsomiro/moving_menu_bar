let blue = document.querySelector('.aside')
let menu = document.querySelector('.aside_menu--hidden')
blue.addEventListener('mouseover', () => {
    menu.style.display = 'block';
});
blue.addEventListener('mouseout', () => {
    menu.style.display = 'none';
});
