// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


// Burger

const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
    const menuBody = document.querySelector('.menu__body');
    iconMenu.addEventListener('click', function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
};

// Капча
// var ct = 0;
// var addCount = document.createElement('input');
//     addCount.type = "hidden";
//     addCount.id = "count";
//     addCount.name = "count";
//     addCount.value = "0";
//     document.getElementById('form').appendChild(addCount);
// function countme() {
//     document.getElementById('count').value = ++ct;
// };