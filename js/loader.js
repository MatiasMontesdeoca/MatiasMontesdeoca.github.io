/**
 * Loads an HTML component into an element.
 * @param {string} id - Container ID.
 * @param {string} file - Component file path.
 */
async function loadComponent(id, file) {

    try {

        const response = await fetch(file);

        if (!response.ok) {

            throw new Error(`Could not load ${file}`);

        }

        const html = await response.text();

        document.getElementById(id).innerHTML = html;

    } catch (error) {

        console.error(error);

    }

}

/**
 * Loads all HTML components.
 */
export async function loadComponents() {

    const components = [

        "header",
        "hero",
        "about",
        "skills",
        "projects",
        "education",
        "certifications",
        "contact",
        "footer"

    ];

    for (const component of components) {

        await loadComponent(

            component,

            `components/${component}.html`

        );

    }

}