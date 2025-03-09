let projects = [];
const endpointDaAPI = "/backend/project.json";

getBuscarProjectsDaAPI();

async function getBuscarProjectsDaAPI() {
    try {
        const res = await fetch(endpointDaAPI);
        if (!res.ok) {
            throw new Error(`Erro na requisição: ${res.status}`);
        }

        const data = await res.json();
        //console.log("Dados recebidos da API:", data); // Verificar estrutura dos dados

        // Acessando corretamente as imagens dentro de container_projetos
        if (!data || !data.container_projetos || !data.container_projetos.imagens) {
            throw new Error("O formato do JSON não contém 'container_projetos.imagens'.");
        }

        projects = data.container_projetos.imagens;

        const isPtbr = window.location.pathname.includes("index_pt_br.html");

        const titulo = isPtbr ? data.container_projetos.titulo_pt : data.container_projetos.titulo_en;

        exibirProjectsNatela(projects, titulo);
    } catch (error) {
        console.error("Erro ao buscar projetos: ", error);
    }
}

function exibirProjectsNatela(listaDeProjects, titulo) {
    const elementoParaInserirProjetos = document.querySelector(".secao__projetos");

    // if (!listaDeProjects || listaDeProjects.length === 0) {
    //     console.warn("Nenhum projeto para exibir.");
    //     elementoParaInserirProjetos.innerHTML = "<p>Nenhum projeto encontrado.</p>";
    //     return;
    // }

    let criarContainerProjetos = `
        <div class="container__projetos">
            <h2 class="titulo__projetos">${titulo}</h2>
            <div class="container__img">
    `;
    

    listaDeProjects.forEach((project) => {
        criarContainerProjetos += `
            <img class="projetos__img" src="${project.src}" alt="${project.alt}">
        `;
    });

    criarContainerProjetos += `</div></div>`; 

    // Inserir no DOM
    elementoParaInserirProjetos.innerHTML = criarContainerProjetos;
}
