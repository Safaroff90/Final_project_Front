
const box = document.getElementById('search__input');

const btn = document.getElementById('search');

btn.addEventListener('click', function handleClick() {
  if (box.style.opacity === '0') {
    box.style.opacity = '1';
    box.style.transition ='1s';

    
  } else {
    box.style.opacity = '0';

   
  }
});

const toggleButton = document.querySelector(".toggle__button")[0];
const navbarMenu = document.querySelector(".navbar__menu")[0];

toggleButton.addEventListener('click',()=>{
  navbarMenu.classList.toggle('active')
});


