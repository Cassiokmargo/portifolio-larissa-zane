# 🎨 Portfólio Larissa Zanetti

Portfólio pessoal da Larissa Zanetti Alves, ilustradora e designer digital do Espírito Santo, Brasil. O site apresenta seus projetos de ilustração digital, publicações e informações de contato.

## 📋 Sobre o Projeto

Este é um portfólio responsivo desenvolvido em HTML, CSS e JavaScript vanilla, com suporte a múltiplos idiomas (Português e Inglês). O site apresenta o trabalho da Larissa como ilustradora digital, com foco em fantasia, animações japonesas e videogames.

## ✨ Funcionalidades

- **Design Responsivo**: Adaptável a diferentes tamanhos de tela
- **Múltiplos Idiomas**: Suporte completo para Português e Inglês
- **Galeria de Projetos**: Exibição dinâmica de projetos de ilustração
- **Seção de Publicações**: Apresentação de trabalhos publicados com modais informativos
- **Navegação Suave**: Menu de navegação com scroll suave
- **Modais Interativos**: Visualização ampliada de imagens com descrições detalhadas
- **Carregamento Dinâmico**: Conteúdo carregado via JSON para fácil manutenção

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Estilização moderna com flexbox e grid
- **JavaScript (ES6+)**: Funcionalidades interativas e carregamento dinâmico
- **JSON**: Armazenamento de dados de projetos e publicações
- **SVG**: Logos e ícones vetoriais

## 📁 Estrutura do Projeto

```
Larissa Zanetti/
├── app/                          # Scripts JavaScript
│   ├── metodoExibirProjects.js   # Carregamento de projetos
│   ├── metodoExibirPublications.js # Carregamento de publicações
│   ├── modal.js                  # Funcionalidade de modais
│   └── translations.js           # Sistema de traduções
├── assets/                       # Recursos estáticos
│   ├── font/                     # Fontes personalizadas
│   ├── img/                      # Imagens dos projetos
│   │   ├── projects/            # Imagens dos projetos
│   │   └── publications/        # Imagens das publicações
│   └── *.svg                    # Logos e ícones
├── backend/                      # Dados JSON
│   ├── project.json             # Dados dos projetos
│   └── publication.json         # Dados das publicações
├── styles/                       # Arquivos CSS
│   ├── footer.css               # Estilos do rodapé
│   ├── header.css               # Estilos do cabeçalho
│   ├── modal.css                # Estilos dos modais
│   ├── projects.css             # Estilos dos projetos
│   ├── publications.css         # Estilos das publicações
│   └── sobre.css                # Estilos da seção sobre
├── index.html                   # Versão em inglês
├── index_pt_br.html            # Versão em português
├── styles.css                   # CSS principal
└── reset.css                    # Reset CSS
```

## 🚀 Como Executar

1. **Clone o repositório**:

   ```bash
   git clone [URL_DO_REPOSITORIO]
   cd Larissa-Zanetti
   ```

2. **Abra o projeto**:

   - Abra o arquivo `index.html` em seu navegador para a versão em inglês
   - Abra o arquivo `index_pt_br.html` para a versão em português

3. **Servidor Local (Opcional)**:
   Para evitar problemas de CORS com o carregamento dos arquivos JSON, recomenda-se usar um servidor local:

   ```bash
   # Usando Python
   python -m http.server 8000

   # Usando Node.js (com http-server)
   npx http-server

   # Usando PHP
   php -S localhost:8000
   ```

## 📝 Personalização

### Adicionando Novos Projetos

1. Adicione a imagem do projeto na pasta `assets/img/projects/`
2. Edite o arquivo `backend/project.json`:
   ```json
   {
     "classe": "projetos__img",
     "src": "assets/img/projects/nome-do-projeto.svg",
     "alt": "descrição da imagem"
   }
   ```

### Adicionando Novas Publicações

1. Adicione a imagem da publicação na pasta `assets/img/publications/`
2. Edite o arquivo `backend/publication.json`:
   ```json
   {
     "imagem": "assets/img/publications/nome-da-publicacao.svg",
     "alt": "descrição da imagem",
     "descricao_en": "Descrição em inglês",
     "descricao_pt": "Descrição em português",
     "categoria": "publications",
     "datamodal": "modal-X"
   }
   ```

## 🎯 Seções do Site

### Sobre (About)

- Apresentação pessoal da Larissa
- Formação acadêmica em Design pela UFES
- Foco em ilustração digital e game design
- Links para LinkedIn e Behance

### Projetos (Projects)

- Galeria de projetos de ilustração
- Carregamento dinâmico via JSON
- Imagens responsivas

### Publicações (Publications)

- Trabalhos publicados
- Modais com descrições detalhadas
- Suporte a múltiplos idiomas

### Contato (Contact)

- Informações de contato
- Disponibilidade para freelancer
- Links para redes profissionais

## 🔧 Funcionalidades Técnicas

### Sistema de Idiomas

- Troca automática entre português e inglês
- Conteúdo dinâmico baseado no idioma selecionado
- URLs específicas para cada idioma

### Carregamento Dinâmico

- Projetos e publicações carregados via fetch API
- Estrutura modular para fácil manutenção
- Tratamento de erros robusto

### Modais Interativos

- Visualização ampliada de imagens
- Descrições detalhadas em múltiplos idiomas
- Fechamento por clique ou tecla ESC

## 📱 Responsividade

O site é totalmente responsivo e funciona bem em:

- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🌐 Compatibilidade

- Chrome (recomendado)
- Firefox
- Safari
- Edge
- Navegadores móveis

## 📞 Contato

**Larissa Zanetti Alves**

- Email: lazanettialves@gmail.com
- LinkedIn: [Larissa Zanetti Alves](https://www.linkedin.com/in/larissa-zanetti-alves-a81b63287/)
- Behance: [larissazanetti](https://www.behance.net/larissazanetti)

## 📄 Licença

Este projeto é de uso pessoal e não possui licença específica. Para uso comercial ou modificações, entre em contato com a autora.

---

**Desenvolvido com ❤️ para mostrar o talento e criatividade da Larissa Zanetti**
