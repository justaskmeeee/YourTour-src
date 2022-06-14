function simmplePhoneMask() {
  const phoneInputField = document.getElementById('phone');
  
  phoneInputField.addEventListener('keyup', () => {
    phoneInputField.value = phoneInputField.value.replace(/\D/g, '');
  })
}

simmplePhoneMask();