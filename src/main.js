const main = document.querySelector('.main');
const themeColorDark = document.querySelector('.theme-color-dark');
const themeColorLight = document.querySelector('.theme-color-light');

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
      document.body.style.backgroundColor = '#F6F8FF';
      themeColorDark.classList.remove('hide');
      themeColorLight.classList.remove('show');
   }
}

themeColorDark.addEventListener('click', toggelClass);

themeColorLight.addEventListener('click', toggelClass);
