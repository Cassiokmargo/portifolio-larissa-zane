document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const modalDescription = document.getElementById("modalDescription");
    const fecharBtn = document.querySelector(".close");

    // Imagens das duas categorias
    const projectImages = document.querySelectorAll(".projetos__img");
    const publicationImages = document.querySelectorAll(".publications__img");

    // Função para abrir o modal e aplicar estilos dinâmicos
    function openModal(imageSrc, descriptionHTML = "", category = "projects") {
        modal.style.display = "block";
        modalImg.src = imageSrc;

        // Define a descrição com suporte a HTML
        modalDescription.innerHTML = descriptionHTML || ""; // Exibe a descrição ou deixa vazio

        // Remove estilos antigos e aplica o estilo correspondente
        modal.classList.remove("modal-publications", "modal-projects");
        if (category === "publications") {
            modal.classList.add("modal-publications");
        } else {
            modal.classList.add("modal-projects");
        }
    }

    // Configura os cliques nas imagens de PROJECTS
    projectImages.forEach(image => {
        image.addEventListener("click", function () {
            openModal(image.src, "", "projects");
        });
    });

    // Configura os cliques nas imagens de PUBLICATIONS
    publicationImages.forEach(image => {
        image.addEventListener("click", function () {
            const descriptionHTML = image.getAttribute("data-description") || image.alt;
            openModal(image.src, descriptionHTML, "publications");
        });
    });

    // Fecha o modal quando o usuário clicar no "x"
    fecharBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Fecha o modal quando o usuário clicar fora da imagem
    window.addEventListener("click", function (evento) {
        if (evento.target === modal) {
            modal.style.display = "none";
        }
    });
});
