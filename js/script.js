const languageButtons = document.querySelectorAll(".language-button");
const translatableElements = document.querySelectorAll("[data-es][data-en]");

function changeLanguage(language) {
    translatableElements.forEach(function (element) {
        element.textContent = element.getAttribute("data-" + language);
    });

    languageButtons.forEach(function (button) {
        const isActive = button.getAttribute("data-language") === language;

        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", isActive);
    });

    document.documentElement.lang = language;

    if (language === "es") {
        document.title = "Francisco Fernández | Desarrollador de Software";
        document.querySelector('meta[name="description"]').content =
            "Portfolio de Francisco José Fernández, desarrollador de software.";
    } else {
        document.title = "Francisco Fernández | Software Developer";
        document.querySelector('meta[name="description"]').content =
            "Portfolio of Francisco José Fernández, software developer.";
    }
}

languageButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const selectedLanguage = button.getAttribute("data-language");
        changeLanguage(selectedLanguage);
    });
});

// Idioma inicial
changeLanguage("es");
