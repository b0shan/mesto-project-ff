// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
export const places = document.querySelector('.places__list');

// @todo: Функция создания карточки
export function createCard(name, link, likeCard, deleteCard, handleImageClick) {
    const card = cardTemplate.querySelector('.card').cloneNode(true);
    const deleteButton = card.querySelector('.card__delete-button');
    const image = card.querySelector('.card__image');
    image.src = link;
    card.querySelector('.card__title').textContent = name;
    image.setAttribute('alt', `Пейзаж ${name}`);
    card.querySelector(".card__like-button").addEventListener("click", likeCard);
    deleteButton.addEventListener('click', deleteCard);
    image.addEventListener("click", () => handleImageClick({ name, link }));
    return card;
}

// Функция лайка карточки
export function likeCard(evt) {
    evt.target.classList.toggle("card__like-button_is-active");
}

// @todo: Функция удаления карточки
export function deleteCard(event) {
    const deleteItem = event.target.closest('.card');
    deleteItem.remove();
}