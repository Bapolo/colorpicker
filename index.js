window.addEventListener("DOMContentLoaded", () =>
{
	const painel = document.querySelector("#painel");
	const primeiraCor = document.querySelector("#primeiraCor");
	const segundaCor = document.querySelector("#segundaCor");
	const terceiraCor = document.querySelector("#terceiraCor");
	const saidaRGB = document.querySelector("#valorRGB");
	const btnCopiarRGB = document.querySelector("#copiarCodigo");

	painel.style.backgroundColor = "red";

	 primeiraCor.addEventListener("input", () =>
	 
	 	painel.style.backgroundColor = "rgb(" + `${primeiraCor.value}, ${segundaCor.value}, ${terceiraCor.value}` + ")"
	) 	

	 segundaCor.addEventListener("input", () =>
	 
	 	painel.style.backgroundColor = "rgb(" + `${primeiraCor.value}, ${segundaCor.value}, ${terceiraCor.value}` + ")"
	) 	

	 terceiraCor.addEventListener("input", () =>
	 
	 	painel.style.backgroundColor = "rgb(" + `${primeiraCor.value}, ${segundaCor.value}, ${terceiraCor.value}` + ")"
	) 	
	 
})