function changeFormSelectColor(event) {
  const formSelect = document.querySelector('.tour-form__select');
  
  formSelect.addEventListener('change', () => {
    formSelect.classList.add('tour-form__select_black');
  })  
}

changeFormSelectColor();
