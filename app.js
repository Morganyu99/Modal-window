"use strict";

//Selectors

const showModal = document.querySelectorAll(".show-modal");
const closeModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");

//Close Modal Function
const closeModalFunc = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

//Open Modal Function

const openModalFunc = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// Add Event listener on show-modal buttons

for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener("click", openModalFunc);
}

// Add class hidden when pressed closed-modal

closeModal.addEventListener("click", closeModalFunc);

//Add class hidden when pressed outside the box

overlay.addEventListener("click", closeModalFunc);

//Add class hidden when Esc button is pressed

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModalFunc();
  }
});
