/* old code borrar despues
//Seleccionamos los botones que necesitamos con el atributo data-language
const langButtons = document.querySelectorAll("[data-language]");

//la constante textos a cambiar cambiara los que tengan un data-section

const textsToChange = document.querySelectorAll("[data-section]");
//hacemos un for each por cada boton que listen y llame funcion

langButtons.forEach((button) => {
//confirmar que si funcione escuchando en console
	fetch(`../languages/${button.dataset.language}.json`)
	.then(res=> res.json())
	.then(data => {
		textsToChange.forEach((el) => {
			const section = el.dataset.section;
			const value = el.dataset.value;
			el.innerHTML = data[section][value];

		})
	})
})*/
// Seleccionamos los botones de idioma y los elementos a traducir
const langButtons = document.querySelectorAll("[data-language]");
const textsToChange = document.querySelectorAll("[data-section]");

// Función para cambiar el idioma
const changeLanguage = async (language) => {
    try {
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