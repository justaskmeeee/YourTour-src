function countValue() {
  const container = document.querySelector('.header__outer-container');
  const tourImage = document.querySelector('.header__logo-image');
  
  let scrollPosition = window.scrollY;
  
  if (scrollPosition > 450) {      
    container.classList.add('sticky');
    tourImage.classList.add('alt-logo');
  } else {
    container.classList.remove('sticky');
    tourImage.classList.remove('alt-logo');
  }
}

document.addEventListener('scroll', countValue);