const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

// Dark or Light Images
const imageMode = (color) => {
  image1.src = `img/undraw_proud_coder_${color}.svg`;
  image2.src = `img/undraw_feeling_proud_${color}.svg`;
  image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

// Dark Mode Styles
const darkMode = () => {
  nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
  textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';

  // target children of <span id="toggle-icon"> which is [span.toggle-text, i.fas.fa-sun]
  toggleIcon.children[0].textContent = 'Dark Mode';
  // toggleIcon.children[1].classList.remove('fa-sun');
  // toggleIcon.children[1].classList.add('fa-moon');
  toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
  imageMode('dark');
}

// Light Mode Styles
const lightMode = () => {
  nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
  textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';

  // target children of <span id="toggle-icon"> which is [span.toggle-text, i.fas.fa-sun]
  toggleIcon.children[0].textContent = 'Light Mode';
  // toggleIcon.children[1].classList.remove('fa-moon');
  // toggleIcon.children[1].classList.add('fa-sun');
  toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
  image1.src = 'img/undraw_proud_coder_light.svg';
  image2.src = 'img/undraw_feeling_proud_light.svg';
  image3.src = 'img/undraw_conceptual_idea_light.svg';
  imageMode('light');
}


// Switch Theme Dynamically
const switchTheme = (event) => {
  // Document.documentElement returns the element that is the root of the document(in this case, <html>)
  // setAttribute() takes 1st arg is key, 2nd arg is value

  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    darkMode();
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    lightMode();
  }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Check Local Storage for Theme
const currentTheme = localStorage.getItem('theme');

// check if currentTheme is not Null, then use the currenTheme
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  // if currentTheme is dark
  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
    darkMode();
  }
}