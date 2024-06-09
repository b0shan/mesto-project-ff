export default class validator {
    constructor (settings, form) {
      this.form = form;
      this.inputSelector = settings.inputSelector;
      this.inputErrorClass = settings.inputErrorClass;
      this.inputList = Array.from(this.form.querySelectorAll(this.inputSelector));
      this.errorClass = settings.errorClass;
      this.submitButtonSelector = settings.submitButtonSelector;
      this.inactiveButtonClass = settings.inactiveButtonClass;
      this.buttonElement = form.querySelector(this.submitButtonSelector);
    }
  
    enableValidation() {
      this.setEventListners(this.form);
    }
  
    resetValidation() {
      this.toggleSubmitButtonState();
      this.inputList.forEach((inputElement) => {
       this.hideInputError(inputElement)
      });
    }
  
    setEventListners() {
      this.toggleSubmitButtonState();
      this.inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
          this.handleField(inputElement);
          this.toggleSubmitButtonState();
        });
      });
    }
  
    handleField(inputElement) {
      if (!inputElement.validity.valid) {
        this.showInputError(inputElement);
      } else {
        this.hideInputError(inputElement);
      }
    }
  
    showInputError(inputElement) {
      const errorElement = this.form.querySelector(`#${inputElement.id}-error`);
      inputElement.classList.add(this.inputErrorClass);
      errorElement.classList.add(this.errorClass);
      errorElement.textContent = inputElement.validationMessage;
    }
  
    hideInputError(inputElement) {
      const errorElement = this.form.querySelector(`#${inputElement.id}-error`);
      inputElement.classList.remove(this.inputErrorClass);
      errorElement.classList.remove(this.errorClass);
      errorElement.textContent = '';
    }
  
    toggleSubmitButtonState() {
      this.buttonElement.disabled = !this.form.checkValidity();
      if (this.buttonElement.disabled) {
        this.buttonElement.classList.add(this.inactiveButtonClass);
      }
      else {
        this.buttonElement.classList.remove(this.inactiveButtonClass);
      }
    }
  }