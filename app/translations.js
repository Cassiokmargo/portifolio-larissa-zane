// let translations = [];

// const endpointTranslationAPI = "/backend/translations.json"

// getBuscarTranslationAPI();

// async function getBuscarTranslationAPI() {
//     try {
//         const res = await fetch(endpointTranslationAPI);
//         if (!res.ok) {
//             throw new (`Erro na requisição: ${res.status}`);
//         }

//         const data = await res.json();
//         console.log("Dados recebidos da API:" ,data);

//         if(!data || !data.en || !data.ptBr) {
//             throw new Error("O formato do JSON não contém as traduções 'en e ptBr'.");
//         }

//         if (data == en) {
//              translations = data.en.menu, data.en.about, data.en.projects, data.en.publications, data.en.footer;
//          }
        
//         if (data == ptBr) {
//             translations = data.ptBr.menu, data.ptBr.about, data.ptBr.projects, data.ptBr.publications, data.ptBr.footer;
//         }        

//     } catch (error) {
//         console.error("Erro ao buscar trandução: ", error);
//     }
    
// }


// function translationSite(portugues) {
//     const elementoParaTraduzir = document.querySelector(".container_body");

//     let criarSiteTraduzido = `
//         <header>
//         <h2 class="card__nome">Larissa Zanetti</h2>
//         <div class="card__menu_link">       
//             <a id="en-lang" class="card__nome_link" href="index.html">En</a>
//             <a id="pt-br-lang" class="card__nome_link" href="index_pt_br.html">Pt-Br</a>
//         </div> 
//         <section class="cabecalho">            
//             <div class="container__menu">                
//                 <img class="logo__imagem" src="assets/lirou elho header.svg" alt="logo da marca">
//                 <ul class="menu__bar">
//                     <li class="item__menu"><a id="menu-about" class="opcoes__link" href="#about">${portugues.sobre}</a></li>
//                     <li class="item__menu"><a id="menu-projects" class="opcoes__link" href="#projects">${portugues.projetos}</a></li>
//                     <li class="item__menu"><a id="menu-contact" class="opcoes__link" href="#contact">${portugues.contato}</a></li>
//                 </ul>
//             </div>
//         </section>     
//     </header>
//     <section class="secao__sobre" id="about">        
//         <h2 id="about-titulo" class="titulo__sobre">${portugues.titulo}</h2>
//         <p id="about-texto1" class="texto__sobre">${portugues.texto1}</p>    
//         <p id="about-texto2" class="texto__sobre">${portugues.texto2}</p>
//         <p id="about-subtexto" class="texto__sobre subtexto">${portugues.subtexto} 
//             <a class="texto__sobre ancora" href="https://www.linkedin.com/in/larissa-zanetti-alves-a81b63287/">Linkedin</a> 
//             ${portugues.subtexto2} <a class="texto__sobre ancora" href="https://www.behance.net/larissazanetti">Behance</a> 
//         </p>
//     </section>
//     <!-- Seção Projects -->
//     <section class="secao__projetos" id="projects">
//         <div class="container__projetos">
//             <h2 id="titulo-projects" class="titulo__projetos">${portugues.titulo}</h2>                
//         </div> 
//     </section>

//     <!-- Seção Publications -->
//     <section class="secao__publications" id="publications">
//         <!--<div class="container__publications">
//             <h2 id="titulo-publications" class="titulo__projetos">${portugues.titulo}</h2>
//             <div class="container__img">
//                 <img class="projetos__img publications__img" 
//                     src="assets/img/publications/Ilustras matemática.svg" 
//                     alt="image do projeto Ilustras"
//                     data-description=${portugues.desc1}
//                     data-modal="modal-1>
                
//                 <img class="projetos__img publications__img"
//                     src="assets/img/publications/Jataí.svg"
//                     alt="image do projeto Jataí"
//                     data-description=${portugues.desc2}
//                     data-modal="modal-2">                
                
//                 <img class="projetos__img publications__img" 
//                     src="assets/img/publications/Acessibilidade.svg" 
//                     alt="image do projeto Acessibilidade"
//                     data-description=${portugues.desc3}
//                     data-modal="modal-3">                
//             </div>
//         </div> -->
//     </section>
//     <!-- Modal para exibir imagem maior -->
//     <div id="imageModal" class="modal">
//         <div class="modal-content">
//             <span class="close" aria-label="Botão fechar">&times;</span>
//             <img id="modalImage" class="modal-img" src="" alt="Imagem ampliada">
//             <div id="modalDescription" class="modal-description"></div>
//         </div>
//     </div>    
    
//     <footer class="rodape" id="contact">
//         <div class="contato-bg">
//             <h2 id="contato-rodape" class="titulo__rodape">${portugues.contato}</h2>        
//             <p id="subtitulo-rodape" class="titulo__rodape subtitulo">${portugues.subtitulo}</p>
//             <p id="question-rodape" class="texto__rodape subtitulo2">${portugues.questao}</p>
//         </div>
//         <p class="texto__rodape__final">Email adress: lazanettialves@gmail.com</p>
//         <a class="texto__rodape__final ancora" href="https://www.linkedin.com/in/larissa-zanetti-alves-a81b63287/">Linkedin</a>
//         <a class="texto__rodape__final ancora" href="https://www.behance.net/larissazanetti">Behance</a>                
//         <div class="container__img">
//             <img class="logo__imagem__rodape" src="./assets/lirou elho full footer.svg" alt="img da logo do rodape">
//         </div>
//     </footer>
    
//     `;    
// }
// document.getElementById("pt-br-lang").addEventListener("click", () => {
//     translationSite()
// });

// elementoParaTraduzir.innerHTML = criarSiteTraduzido;




// // document.getElementById("en-lang").addEventListener("click", () => {
// //     translationSite()
// // });

