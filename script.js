alert('Добро пожаловать на сайт о кошках!');

let button = document.createElement('button');
button.innerHTML = '↑ Наверх';
button.style.position = 'fixed';
button.style.bottom = '30px';
button.style.right = '30px';
button.style.padding = '12px 25px';
button.style.background = '#e76f51';
button.style.color = 'white';
button.style.border = 'none';
button.style.borderRadius = '25px';
button.style.fontSize = '1.1em';
button.style.cursor = 'pointer';
button.style.display = 'none';
document.body.appendChild(button);

window.onscroll = function() {
    if (window.scrollY > 300) {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
};

button.onclick = function() {
    window.scrollTo(0, 0);
};

let burger = document.querySelector('.burger-menu');
let nav = document.querySelector('.main-nav');

burger.addEventListener('click', function() {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
});