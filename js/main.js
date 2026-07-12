import { loadComponents } from "./loader.js";
import { initializeMenu } from "./menu.js";
import { initializeTheme } from "./theme.js";
import { initializeLanguage } from "./language.js";
import { initializeProjects } from "./projects.js";

document.addEventListener("DOMContentLoaded", async () => {

    await loadComponents();

    initializeTheme();

    initializeLanguage();

    initializeProjects();

    initializeMenu();

});