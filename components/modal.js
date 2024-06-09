//открытие закрытие попапа
export function openModal(modal) {
    cardFormValidator.toggleSubmitButtonState(cardForm, config);
    cardFormValidator.resetValidation(cardForm, config);
    modal.classList.add("popup_is-opened");
    window.addEventListener("keydown", closeEscape);
}

export function closeModal(modal) {
    modal.classList.remove("popup_is-opened");
    window.removeEventListener("keydown", closeEscape);
}

function closeEscape(evt) {
    if (evt.code === "Escape") {
      const item = document.querySelector(".popup_is-opened");
      closeModal(item);
    }
}