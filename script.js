// Mobile navigation
const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});

// Close mobile menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
    });
});


// Simple contact-form behaviour
//
// GitHub Pages cannot process PHP/server-side forms.
// This demo simply shows a message.
// For a real contact form, connect this to something like
// Formspree, Netlify Forms, FormSubmit, or your own API.

const form = document.querySelector("#contact-form");
const message = document.querySelector("#form-message");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    message.textContent =
        "Bedankt! Het formulier is ingevuld. Voeg een formulierdienst toe om het bericht daadwerkelijk te versturen.";

    form.reset();
});