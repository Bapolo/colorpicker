window.addEventListener("DOMContentLoaded", () =>
{
	const painel = document.querySelector("#painel");
	const primeiraCor = document.querySelector("#primeiraCor");
	const segundaCor = document.querySelector("#segundaCor");
	const terceiraCor = document.querySelector("#terceiraCor");
	const saidaRGB = document.querySelector("#valorRGB");
	const btnCopiarRGB = document.querySelector("#copiarCodigo");
	const emojiSorriso = document.querySelector("footer i"); 
	
	

	
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
	 	const paragrafo = document.createElement("p");

	 	setTimeout(() => {
	 		paragrafo.innerHTML = "<i class='fa-solid fa-check'></i> RGB copiado!";
		 	paragrafo.style.color = "white";
		 	paragrafo.style.fontSize = "1.2rem";
		 	paragrafo.style.padding = "20px";
		 	paragrafo.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
		 	paragrafo.style.borderRadius = "10px";
		 	paragrafo.style.position = "absolute";
		 	paragrafo.style.top = "20%";
		 	paragrafo.style.transition = "all 0.2s ease";
		 	document.querySelector("#container").appendChild(paragrafo) 
	 	}, 5)
	 
	 	setTimeout(() => {
      		document.querySelector("#container").removeChild(paragrafo);
    	}, 2000);
	 	
	 }
	 
})