(()=>{"use strict";var e=document.querySelector("#card-template").content,t=document.querySelector(".places__list");function o(e){e.target.classList.toggle("card__like-button_is-active")}function n(e){e.target.closest(".card").remove()}function r(e){e.classList.add("popup_is-opened"),window.addEventListener("keydown",i)}function c(e){e.classList.remove("popup_is-opened"),window.removeEventListener("keydown",i)}function i(e){"Escape"===e.code&&c(document.querySelector(".popup_is-opened"))}var p=document.querySelector(".popup_type_image"),u=p.querySelector(".popup__image"),a=p.querySelector(".popup__caption"),l=document.querySelector(".profile__edit-button"),d=document.querySelector(".popup_type_edit"),s=document.querySelector(".profile__add-button"),f=document.querySelector(".popup_type_new-card"),_=document.querySelector(".popup__form"),m=_.querySelector(".popup__input_type_name"),w=_.querySelector(".popup__input_type_description"),x=document.querySelector(".profile__title"),y=document.querySelector(".profile__description"),q=document.querySelector(".popup_type_new-card .popup__form"),b=q.querySelector(".popup__input_type_card-name"),h=q.querySelector(".popup__input_type_url"),v=document.querySelectorAll(".popup");function M(r){var c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"prepend",i=function(t,o,n,r,c){var i=e.querySelector(".card").cloneNode(!0),p=i.querySelector(".card__delete-button"),u=i.querySelector(".card__image");return u.src=o,i.querySelector(".card__title").textContent=t,u.setAttribute("alt","Пейзаж ".concat(t)),i.querySelector(".card__like-button").addEventListener("click",n),p.addEventListener("click",r),u.addEventListener("click",(function(){return c({name:t,link:o})})),i}(r.name,r.link,o,n,S);t[c](i)}function S(e){u.src=e.link,u.alt=e.name,a.textContent=e.name,r(p)}[{name:"Хибины",link:"https://images.unsplash.com/photo-1694975785664-052748f87fc3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8JUQxJTg1JUQwJUI4JUQwJUIxJUQwJUI4JUQwJUJEJUQxJThCfGVufDB8fDB8fHww"},{name:"Красноярский край",link:"https://images.unsplash.com/photo-1597125760773-b0166e249ea7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fHJ1c3NpYXxlbnwwfHwwfHx8MA%3D%3D"},{name:"Владивосток",link:"https://images.unsplash.com/photo-1563941433-b6a094653ed2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fHJ1c3NpYXxlbnwwfHwwfHx8MA%3D%3D"},{name:"Камчатка",link:"https://images.unsplash.com/photo-1557094005-176cbfe3554d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHJ1c3NpYXxlbnwwfHwwfHx8MA%3D%3D"},{name:"Мурманская область",link:"https://images.unsplash.com/photo-1633974893032-aea04d1d17cd?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fE11cm1hbnNrfGVufDB8fDB8fHww"},{name:"Байкал",link:"https://images.unsplash.com/photo-1584891686381-c099f8cbd70c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHJ1c3NpYXxlbnwwfHwwfHx8MA%3D%3D"}].forEach((function(e){M(e,"append")})),l.addEventListener("click",(function(){m.value=x.textContent,w.value=y.textContent,r(d)})),s.addEventListener("click",(function(){r(f)})),q.addEventListener("submit",(function(e){e.preventDefault(),M({name:b.value,link:h.value}),q.reset(),c(f)})),v.forEach((function(e){e.addEventListener("mousedown",(function(t){(t.target.classList.contains("popup_is-opened")||t.target.classList.contains("popup__close"))&&c(e)}))})),_.addEventListener("submit",(function(e){e.preventDefault();var t=m.value,o=w.value;x.textContent=t,y.textContent=o,c(d)}))})();
//# sourceMappingURL=main.js.map