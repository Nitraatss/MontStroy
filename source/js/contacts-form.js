const initiateContactsForm = () => {
  const contacts = document.querySelector(`.contacts`);
  const contactsForm = contacts.querySelector(`.contacts__form`);
  const inputName = contactsForm.querySelector(`#name`);
  const inputPhone = contactsForm.querySelector(`#phone`);
  const inputEmail = contactsForm.querySelector(`#email`);
  const submitButton = contactsForm.querySelector(`.contacts__submit `);

  inputName.addEventListener(`keyup`, (evt) => {
    const allowedSymbols = /^[A-Za-zА-Яа-яЁё\s]+$/;
    if (!allowedSymbols.test(evt.target.value)) {
      evt.target.value = evt.target.value.substring(
          0,
          evt.target.value.length - 1
      );
    }
  });

  inputPhone.addEventListener(`keyup`, (evt) => {
    const phonePattern = /7-[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}/;
    const allowedSymbols = /[A-Za-zА-Яа-яЁё]/g;

    if (allowedSymbols.test(evt.target.value)) {
      evt.target.value = evt.target.value.substring(
          0,
          evt.target.value.length - 1
      );
    }

    if (!phonePattern.test(evt.target.value)) {
      inputPhone.setCustomValidity(`Введите номер в формате: 7-999-888-66-55`);
    } else {
      inputPhone.setCustomValidity(``);
    }
  });

  inputEmail.addEventListener(`keyup`, (evt) => {
    const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!emailPattern.test(evt.target.value)) {
      inputEmail.setCustomValidity(`Введите email в формате: myemail@mail.ru`);
    } else {
      inputEmail.setCustomValidity(``);
    }
  });

  submitButton.addEventListener(`click`, (evt) => {
    evt.preventDefault();

    contactsForm.reportValidity();
  });
};

export default initiateContactsForm;
