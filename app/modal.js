document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const modalDescription = document.getElementById("modalDescription");
    const fecharBtn = document.querySelector(".close");
    

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
    document.addEventListener("click", function (event) {
        const target = event.target;
    
        if (target.classList.contains("projetos__img")) {
            console.log("Imagem de projetos foi clicada:", target.src);
            openModal(target.src, "", "projects");
        }
    
        if (target.classList.contains("publications__img")) {
            console.log("Imagem de publicação foi clicada:", target.src);
            const descriptionHTML = target.getAttribute("data-description") || target.alt;
            openModal(target.src, descriptionHTML, "publications");
        }
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
