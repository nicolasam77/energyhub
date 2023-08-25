function randFundo() {
    var fundo = [1, 2, 3, 4, 5][Math.floor(Math.random() * 4)]; /* Número aleatório entre 1 - 5  que ira representar a imagem*/
    !localStorage.fundo ? localStorage.fundo = fundo : 0;
    return localStorage.fundo == fundo
        ?
        (localStorage.fundo = fundo + 1) /* Se o valor de `localStorage.fundo` não estiver definido (ou seja, é falso ou nulo), ele será definido com o valor gerado aleatoriamente. */
        :
        (localStorage.fundo = fundo); /* Se `localStorage.fundo` já estiver definido, ele não será alterado. */
}

var e_header = document.querySelector("header");
e_header.style.backgroundImage = "url(imagens/fundo" + randFundo() + ".jpg)";

