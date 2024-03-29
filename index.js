window.addEventListener("DOMContentLoaded", () =>
{
	const painel = document.querySelector("#painel");
	const primeiraCor = document.querySelector("#primeiraCor");
	const segundaCor = document.querySelector("#segundaCor");
	const terceiraCor = document.querySelector("#terceiraCor");
	const saidaRGB = document.querySelector("#valorRGB");
	const btnCopiarRGB = document.querySelector("#copiarCodigo");
	const emojiSorriso = document.querySelector("footer i"); 
	const paragrafo = document.querySelector("#paragrafo");
	
	

	
	saidaRGB.innerHTML = "rgb(" + `${primeiraCor.value}, ${segundaCor.value}, ${terceiraCor.value}` + ")"

	 primeiraCor.addEventListener("input", () => 
	 	{
	 
		 	painel.style.backgroundColor = "rgb(" + `${primeiraCor.value}, ${segundaCor.value}, ${terceiraCor.value}` + ")"
		 	saidaRGB.innerHTML = painel.style.backgroundColor
		 	emojiSorriso.style.color = painel.style.backgroundColor
	 	}

	) 	

	 segundaCor.addEventListener("input", () =>
	 
	 	{
	 
		 	painel.style.backgroundColor = "rgb(" + `${primeiraCor.value}, ${segundaCor.value}, ${terceiraCor.value}` + ")"
		 	saidaRGB.innerHTML = painel.style.backgroundColor
		 	emojiSorriso.style.color = painel.style.backgroundColor
	 	}
	) 	

	 terceiraCor.addEventListener("input", () =>
	 
	 	{
	 
		 	painel.style.backgroundColor = "rgb(" + `${primeiraCor.value}, ${segundaCor.value}, ${terceiraCor.value}` + ")"
		 	saidaRGB.innerHTML = painel.style.backgroundColor
		 	emojiSorriso.style.color = painel.style.backgroundColor
	 	}
	) 	


	 btnCopiarRGB.addEventListener("click", () =>
	 	 {
	 	 	const valorRGB = "rgb(" + `${primeiraCor.value}, ${segundaCor.value}, ${terceiraCor.value}` + ")"

	 	 	//O código a seguir foi criado pelo chatGPT

	 	 	// Cria um elemento de texto temporário
			const elementoTemporario = document.createElement("textarea");

			// Define o valor do elemento de texto para o valor desejado
			elementoTemporario.value = valorRGB;

			// Adiciona o elemento temporário ao corpo do documento
			document.body.appendChild(elementoTemporario);

			// Seleciona o texto dentro do elemento de texto
			elementoTemporario.select();

			// Tenta copiar o texto para a área de transferência
			document.execCommand("copy");

			// Remove o elemento temporário do corpo do documento
			document.body.removeChild(elementoTemporario);

			// Exibe uma mensagem ou executa outra lógica após a cópia (opcional)
			console.log("Valor copiado para a área de transferência: ", valorRGB);
			mostrarNotificacaoNaTela();
			
			

	 	 })

	 function mostrarNotificacaoNaTela()
	 {
	 
	 	setTimeout(() =>
	 	{
	 		paragrafo.style.opacity = "1";
	 	}, 5)
	 
	 	setTimeout(() => {
      		paragrafo.style.opacity = "0";
    	}, 2000);
	 	
	 }
	 
})