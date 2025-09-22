const contactInfoFormName = document.querySelector('input[type="Name"]');
const contactInfoFormEmail = document.querySelector('input[type="Email"]');
const biggerInputForm = document.querySelector(".biggerInputForm");
const buttonForForms = document.querySelector(".buttonForForms");

buttonForForms.addEventListener('click', () => {
  const fullDataObject = {
    formName: contactInfoFormName.value,
    formEmail: contactInfoFormEmail.value,
    messageForm: biggerInputForm.value
  };
  
  console.log(fullDataObject);
});