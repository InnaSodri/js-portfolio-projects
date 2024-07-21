const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');






function imageMode(color) {
  image1.src = `pictures/learning_${color}.svg`;
  image2.src = `pictures/projection_${color}.svg`;
  image3.src = `pictures/undraw_${color}.svg`;
}

function toggleDarkLightMode(isDark){
  nav.style.backgroundColor = isDark ?'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
  textBox.style.backgroundColor = isDark? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
  toggleIcon.children[0].textContent = isDark? 'Dark Mode' : 'Light Mode';
  isDark? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') : 
  toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
  isDark? imageMode('dark') : imageMode('light');
}




function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    toggleDarkLightMode(true);
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    toggleDarkLightMode(false);
  }
}


toggleSwitch.addEventListener('change', switchTheme);


const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
    toggleDarkLightMode();
  }
}
