function toggleReadMore() { /* Esaa função vai servir para exibir e ocultar o conteúdo */
    const hiddenContent = document.querySelector('.hidden-content'); /* Ocultar o conteúdo */
    const readMoreButton = document.querySelector('.read-more-button'); /* Mostrar o conteúdo */

    if (hiddenContent.style.display === 'none') { /* "None = conteúdo está oculto" */
        hiddenContent.style.display = 'block'; /* 'block= mostrar conteúdo */
        readMoreButton.textContent = 'Mostrar Menos';/*  "Muda o texto do botão para mostrar menos" */
    } else { /* Se não for none, a função muda o estilo de exibição de `hiddenContent` para `'none'`, ocultando-o. */
        hiddenContent.style.display = 'none';
        readMoreButton.textContent = 'Ler Mais'; /* Altera o botão para "Ler mais" */
    }
}
