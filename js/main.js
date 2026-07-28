// Seleccionamos los botones de idioma y los elementos a traducir
const langButtons = document.querySelectorAll("[data-language]");
const textsToChange = document.querySelectorAll("[data-section]");

// Función para cambiar el idioma según el código ("es", "en", etc.)
const changeLanguage = async (language) => {
    try {
        // Usamos ruta relativa desde la raíz del proyecto
        const requestJson = await fetch(`./languages/${language}.json`);
        const data = await requestJson.json();

        textsToChange.forEach((el) => {
            const section = el.dataset.section;
            const value = el.dataset.value;
            
            // Verificamos que existan las llaves en el JSON antes de asignar
            if (data[section] && data[section][value]) {
                el.innerHTML = data[section][value];
            }
        });
    } catch (error) {
        console.error("Error al cargar el idioma:", error);
    }
};

// Le agregamos el evento 'click' a cada botón
langButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const selectedLanguage = button.dataset.language;
        changeLanguage(selectedLanguage);
    });
});