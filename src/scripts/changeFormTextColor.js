function changeFormTextColor() {
  const formSelect = document.querySelector('.tour-form__select');
  const formDate = document.querySelectorAll('.tour-form__input_date');

  // for select option
  formSelect.addEventListener('change', () => {
    formSelect.classList.add('tour-form__select_black');
  }); 

  // for input date 
  [...formDate].forEach(input => {
    input.addEventListener('change', () => {
      input.classList.add('tour-form__input_black')
    })
  });
}

changeFormTextColor();
