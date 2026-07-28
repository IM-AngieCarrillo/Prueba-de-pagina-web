//Seleccionamos los botones que necesitamos con el atributo data-language
const langButtons = document.querySelectorAll("[data-language]");
//la constante textos a cambiar cambiara los que tengan un data-section
const textsToChange = document.querySelectorAll("[data-section]");
//hacemos un for each por cada boton que listen y llame funcion
langButtons.forEach((button) => {
//confirmar que si funcione escuchando en console
	//console.log(button.dataset.language);
	fetch(`../languages/${button.dataset.language}.json`)
	.then(res=> res.json())
	//.then(data => console.log(data))
	.then(data => {
		textsToChange.forEach((el) => {
			const section = el.dataset.section;
			const value = el.dataset.value;
			el.innerHTML = data[section][value];

		})
	})
})