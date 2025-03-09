let publications = [];
const endpointPubAPI = "/backend/publication.json";

getBuscarPublicationsDaAPI();

async function getBuscarPublicationsDaAPI() {
    try {
        const res = await fetch(endpointPubAPI);

        if(!res.ok){
            throw new Error (`Erro na requisição : ${res.status}`);
        }
        
        const data = await res.json();
        // console.log("Dados recebidos da API:", data);

        if (!data || !data.container_publications || !data.container_publications.imagens){
            throw new Error ("O formato do JSON não contém 'container__publications.imagens'.")
        }

        publications = data.container_publications.imagens;

        const isPtbr = window.location.pathname.includes("index_pt_br.html");

        const titulo = isPtbr ? data.container_publications.titulo_pt : data.container_publications.titulo_en;

        exibirPublicationsNaTela(publications, titulo);
        
    } catch (error) {
        console.error("Erro ao buscar projetos: ", error);
    }
    
}

function exibirPublicationsNaTela (listaDePublications, titulo) {
    const elementoParaInserirPublications = document.getElementById("publications");

    // if (!listaDePublications || listaDePublications.length === 0) {
    //     console.warn("Nenhum projeto para exibir.");
    //     elementoParaInserirPublications.innerHTML = "<p>Nenhuma publicação encontrado.</p>";
    // }

    let criarContainerPublications = `
        <div class="container__publications">
            <h2 class="titulo__projetos">${titulo}</h2>
            <div class="container__img">
    `;

    // let tituloPtbr = `
    //     <div class="container__publications">
    //         <h2 class="titulo__projetos">PUBLICAÇÕES</h2>
    //         <div class="container__img">
    // `;

    // if( 'index_pt-br.html' == true )
    // criarContainerPublications = tituloPtbr;

    listaDePublications.forEach((publication) => {
        const isPtbr = window.location.pathname.includes("index_pt_br.html");

        const descricao = isPtbr ? publication.descricao_pt : publication.descricao_en;

        criarContainerPublications += `
            <img class="projetos__img publications__img" 
                    src="${publication.imagem}" 
                    alt="${publication.alt}"
                    data-description="${descricao}"
                     data-modal="${publication.datamodal}">
        `;
    });

    criarContainerPublications += `</div></div>`;

    elementoParaInserirPublications.innerHTML = criarContainerPublications;
}