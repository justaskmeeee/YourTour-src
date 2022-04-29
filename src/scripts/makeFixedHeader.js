function countValue() {
  const container = document.querySelector('.header__outer-container');
  const tourImage = document.querySelector('.header__logo-image');
  const tourImagePath = '/src/images/header/alt-logo.svg';
  
  let scrollPosition = window.scrollY;
  
  if (scrollPosition > 450) {      
    tourImage.src = tourImagePath;
    container.classList.add('sticky');
  }
}

document.addEventListener('scroll', countValue);