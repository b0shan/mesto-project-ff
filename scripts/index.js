
// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
const places = document.querySelector('.places__list');

// @todo: Функция создания карточки
function createCard(name, link, deleteCard) {
    const card = cardTemplate.querySelector('.card').cloneNode(true);
    card.querySelector('.card__image').src = link;
    card.querySelector('.card__title').textContent = name;
    const deleteButton = card.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', deleteCard);
    return card;
}

// @todo: Функция удаления карточки
function deleteCard(event) {
    const deleteItem = event.target.closest('.card');
    deleteItem.remove();
}

// @todo: Вывести карточки на страницу
initialCards.forEach((item) => {
    const card = createCard(item.name, item.link, deleteCard);
    places.append(card);
});

    
