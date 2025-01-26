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
        
        // Travando a navegação dentro do modal quando ele estiver aberto
        // Adiciona classe para desabilitar scroll com modal aberto
        document.body.classList.add("modal-open");
    }

    // Remover class modal-open do body quando fechar modal
    function closeModal() {
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
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

    


    // Fechar o modal quando o usuário clicar no "x"
    fecharBtn.addEventListener("click", function () {
        closeModal();
        
    });

    // Fechar modal quando aperta tecla Esc
    document.addEventListener("keydown", (evento) =>{
        if (evento.key === "Escape") {
            closeModal();
            
        }
    })

    // Fechar o modal quando o usuário clicar fora da imagem
    window.addEventListener("click", function (evento) {
        if (evento.target === modal) {
            closeModal();
            
        }
    });
});
