let selector = document.querySelector('#theme-select');
let content = document.querySelector('body');
let text = document.querySelectorAll('h1, p, li');
let logo = document.querySelector('img')

selector.addEventListener('change', changeMode);

function changeMode() {
    let current = selector.value;
    if (current === 'dark') {
        content.style.backgroundColor = '#333';
        text.forEach(el => el.style.color = 'white');
        logo.src = 'byui-logo-white.png'
    } else {
        content.style.backgroundColor = 'white';
        text.forEach(el => el.style.color = 'black');
        logo.src = 'byui-logo-blue.webp'
    }
}