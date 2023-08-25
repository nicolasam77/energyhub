const carouselInner = document.querySelector(".carousel-inner"); /* carouselInner: É uma referência ao elemento no HTML que contém os slides (imagens) do carrossel. */
const prevButton = document.querySelector(".prev-button"); /* prevButton: É uma referência ao botão que permite retroceder para o slide anterior. */
const nextButton = document.querySelector(".next-button");/*  Avança um slide (next) */

let currentIndex = 0; /* Cria uma variavel que entende o primeiro elemento com 0 e pode ser acrescentado (next) ou retrocedido (prev) */

function prevSlide() { /* Esta função é chamada quando o botão de retroceder é clicado. */
    currentIndex = (currentIndex - 1 + carouselInner.children.length) % carouselInner.children.length; /* Ele vai para id, cuja a mesma está com nossas imagens e tem um algoritmo que retrocede caso click no botão de voltar (subtraindo). Ela também por meio do algoritmo cria um loop*/
    updateSlide();/*  atualiza o slide em questão */
}

function nextSlide() { /* Esta função é chamada quando o botão de avançar é clicado. */
    currentIndex = (currentIndex + 1) % carouselInner.children.length; /* algoritimo que avança um slide por meio da adição e atualiza a imagem */
    updateSlide();
}

function updateSlide() { /* Essa função foi criada para ajudar a mover as imagens na horizontal */
    const offset = -currentIndex * 100;
    carouselInner.style.transform = `translateX(${offset}%)`;
}


function autoSlide() { /* mesmo se não clicar em "avançar", ele está programado (função), para que a cada 3 segundos ele avence "sozinho" */
    nextSlide();/*  (avança o slide) */
    setTimeout(autoSlide, 3000); // Troca a imagem a cada 3 segundos
}

autoSlide(); // Inicializa o carrossel automático
