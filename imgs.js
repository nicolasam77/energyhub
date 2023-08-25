 document.addEventListener("DOMContentLoaded", function() { /*  Isso assegura que o código seja executado apenas quando a página HTML foi completamente carregada. */

 	const imageContainers = document.querySelectorAll(".image-container1, .image-container2, .image-container3, .image-container4, .image-container5"); /* Lista dos elementos */
 	const modal = document.querySelector(".modal1"); /* Referente ao modal de imagens */
 	const modalContent = document.querySelector(".modal-content1"); /* É uma referência ao elemento dentro do modal que conterá a imagem ampliada */
 	const closeBtn = document.querySelector(".close-button1"); /* Referência  ao botão que fecha o modal */

 	imageContainers.forEach(container => { /*  Quando um contêiner de imagem é clicado, o modal é exibido */
 		container.addEventListener("click", function() {
 			modal.style.display = "flex"; /* Visualizar = flex */
 			modalContent.src = container.querySelector("img").src;
 		});
 	});

 	closeBtn.addEventListener("click", function() { /* QUANDO O BOTÃO DE FECHAMENTO É CLICADO, O MODAL É FECHADO */
 		modal.style.display = "none"; /* Fecha = none */
 	});

 	window.addEventListener("click", function(event) { /* Ao clicar na tela, o modal é fechado */
 		if (event.target === modal) {
 			modal.style.display = "none";
 		}
 	});
 }); 
