"use strict";

const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");

// Listen for escape and check if hidden class not applied
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
    } 
})

// Add event listener to all buttons
document.querySelectorAll(".show-modal").forEach((btn) => {
    btn.addEventListener("click", showModal)
});

// Add event listener to close button
document.querySelector(".close-modal").addEventListener("click", closeModal);

// Add event listener to overlay button
overlay.addEventListener("click", closeModal);

// Auxillary functions
function showModal() {
    overlay.classList.remove("hidden");
    modal.classList.remove("hidden");
}

function closeModal() {
    overlay.classList.add("hidden");
    modal.classList.add("hidden");
}