import '../src/pages/index.css';
import { initialCards } from './scripts/cards.js'
import { places } from './components/card.js'
import { createCard,
  likeCard,
  deleteCard,
} from './components/card.js'
import { openModal, closeModal} from './components/modal.js'
import { validator } from './components/validator.js';
import { config } from './components/constants.js';


//переменные
const viewImage = document.querySelector(".popup_type_image");
const popupImage = viewImage.querySelector(".popup__image");  
const popupText = viewImage.querySelector(".popup__caption");  
const editBtn = document.querySelector(".profile__edit-button");
const editWindow = document.querySelector(".popup_type_edit");
const addBtn = document.querySelector(".profile__add-button");
const newCard = document.querySelector(".popup_type_new-card");
const profileForm = document.querySelector(".popup__form");
const inputName = profileForm.querySelector(".popup__input_type_name");
const inputJob = profileForm.querySelector(".popup__input_type_description");
const textName = document.querySelector(".profile__title");
const textJob = document.querySelector(".profile__description");
const handleFormSubmit = document.querySelector(".popup_type_new-card .popup__form");
const placeInputName = handleFormSubmit.querySelector(".popup__input_type_card-name");
const placeUrlInput = handleFormSubmit.querySelector(".popup__input_type_url");
const popups = document.querySelectorAll(".popup");

const buttonProfileAdd = document.querySelector('.profile__add-button');
const cardForm = document.querySelector('#form-card');
const profileFormValidator = new validator(config, profileForm);
const cardFormValidator = new validator(config, cardForm);

const config = {
  formSelector: '.form',
  inputSelector: '.form__item',
  inputErrorClass: 'form__item_type_error',
  errorClass: 'form__error_visible',
  submitButtonSelector: '.form__save-button',
  inactiveButtonClass: 'form__save-button_disabled',
}



// @todo: Вывести карточки на страницу
initialCards.forEach((item) => {
  renderCard(item, 'append') 
});


function renderCard(item, method = "prepend") {
    const card = createCard(item.name, item.link, likeCard, deleteCard, handleImageClick);
    places[ method ](card);
}
  

editBtn.addEventListener("click", () => {
    inputName.value = textName.textContent;
    inputJob.value = textJob.textContent;
    profileFormValidator.toggleSubmitButtonState(profileForm, config);
    profileFormValidator.resetValidation(profileForm, config);
    openModal(editWindow);
});
  
addBtn.addEventListener("click", () => {
    openModal(newCard);
});


//новая карточка
handleFormSubmit.addEventListener("submit", function (event) {
    event.preventDefault();
    const placeName = placeInputName.value;
    const placeLink = placeUrlInput.value;
    const item = {
      name: placeName,
      link: placeLink
    }
    renderCard(item)
    handleFormSubmit.reset();
    closeModal(newCard);
});

popups.forEach((popup) => {
    popup.addEventListener("mousedown", (evt) => {
      if (
        evt.target.classList.contains("popup_is-opened") ||
        evt.target.classList.contains("popup__close")
      ) {
        closeModal(popup);
      }
    });
});

cardForm.addEventListener('submit', handleFormSubmit);
buttonProfileAdd.addEventListener('click', openModal);
cardFormValidator.enableValidation();



//профиль
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  const newName = inputName.value;
  const newJob = inputJob.value;
  textName.textContent = newName;
  textJob.textContent = newJob;
  closeModal(editWindow);
}

profileForm.addEventListener("submit", handleProfileFormSubmit);
editBtn.addEventListener('click', editBtn);
profileFormValidator.enableValidation();

//просмотр фото
function handleImageClick(item) {
  popupImage.src = item.link;
  popupImage.alt = item.name;
  popupText.textContent = item.name;
  openModal(viewImage)
}





