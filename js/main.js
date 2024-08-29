import translations from "./translations.js";

const languageSelector = document.querySelector("select");
const navbar = document.querySelector(".navbar-nav");

// Function to set the language and update classes
const setLanguage = (language) => {
    // Update translations
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach((element) => {
        const translationKey = element.getAttribute("data-i18n");
        element.textContent = translations[language][translationKey];
    });

    // Update text direction
    document.dir = language === "ar" ? "rtl" : "ltr";

    // Update navbar class based on language
    if (language === "ar") {
        navbar.classList.add("mr-auto");
        navbar.classList.remove("ml-auto"); // Replace 'other-class' with the class for English
    } else if (language === "en") {
        navbar.classList.add("ml-auto"); // Replace 'other-class' with the class for English
        navbar.classList.remove("mr-auto");
    }
};

// Event listener for language selector change
languageSelector.addEventListener("change", (event) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
    localStorage.setItem("lang", selectedLanguage);
});

// Set initial language based on local storage or default to 'en'
document.addEventListener("DOMContentLoaded", () => {
    const language = localStorage.getItem("lang") || "en";
    setLanguage(language);
});
