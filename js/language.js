import { translations } from "./translations.js";

export function initializeLanguage() {

    const languageButton = document.getElementById("language-toggle");

    let currentLanguage = localStorage.getItem("language") || "en";

    function updateButton() {

        languageButton.textContent =
            currentLanguage === "en"
                ? "🌐 ES"
                : "🌐 EN";

    }

    function getTranslation(key) {

        return key
            .split(".")
            .reduce(

                (obj, property) => obj?.[property],

                translations[currentLanguage]

            );

    }   

    function updateTexts() {

        const elements =
            document.querySelectorAll("[data-i18n]");

        elements.forEach(element => {

            const key =
                element.dataset.i18n;

            const translation =
                getTranslation(key);

            if (translation) {

                element.textContent =
                    translation;

            }

        });

    }

    document
    .querySelectorAll("[data-i18n-aria-label]")
    .forEach(element => {

        const key =
            element.dataset.i18nAriaLabel;

        element.setAttribute(

            "aria-label",

            getTranslation(key)

        );

    });

    function toggleLanguage() {

        currentLanguage =
            currentLanguage === "en"
                ? "es"
                : "en";

        localStorage.setItem(

            "language",

            currentLanguage

        );

        updateTexts();

        updateButton();

    }

    languageButton.addEventListener(

        "click",

        toggleLanguage

    );

    updateTexts();

    updateButton();

}