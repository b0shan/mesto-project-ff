import '../src/pages/index.css';
import { initialCards } from './scripts/cards.js'
import { places } from './components/card.js'
import { createCard,
  likeCard,
  deleteCard,
} from './components/card.js'
import { openModal, closeModal} from './components/modal.js'
import { FormValidator } from './components/valid.js'



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

//просмотр фото
function handleImageClick(item) {
  popupImage.src = item.link;
  popupImage.alt = item.name;
  popupText.textContent = item.name;
  openModal(viewImage)
}

//Валидация
FormValidator({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',//
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}); 