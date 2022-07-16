import './styles/style.css';
import './fetch.js';

const main = document.querySelector('.main');
const themeColorDark = document.querySelector('.change-dark');
const themeColorLight = document.querySelector('.change-light');

function toggelClass() {
   let isThemeLight = main.classList.contains('theme-light');
   if (isThemeLight) {
      main.classList.add('theme-dark');
      main.classList.remove('theme-light');
      document.body.style.backgroundColor = '#141D2F';
      themeColorDark.classList.add('hide');
      themeColorLight.classList.add('show');
   } else {
      main.classList.add('theme-light');
      main.classList.remove('theme-dark');
      document.body.style.backgroundColor = '#f2f2f2';
      themeColorDark.classList.remove('hide');
      themeColorLight.classList.remove('show');
   }
}

themeColorDark.addEventListener('click', toggelClass);
themeColorLight.addEventListener('click', toggelClass);
