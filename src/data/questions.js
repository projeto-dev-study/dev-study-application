const questions = [
    // Nível 0 (Unidade I)
    [
        {
            question: "Qual é a linguagem de programação mais utilizada para desenvolvimento web?",
            options: ["HTML", "Python", "JavaScript", "CSS"],
            answer: "JavaScript",
            explanation: "JavaScript é a linguagem padrão para interatividade em navegadores."
        },
        {
            question: "O que significa HTML?",
            options: ["HyperText Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Transfer Markup Language"],
            answer: "HyperText Markup Language",
            explanation: "HTML é a linguagem de marcação para estruturar conteúdo web."
        },
        {
            question: "Qual elemento HTML usamos para colocar uma imagem?",
            options: ["<img>", "<image>", "<pic>", "<src>"],
            answer: "<img>",
            explanation: "A tag <img> é usada para incorporar imagens em documentos HTML."
        }
    ],
    
    // Nível 1 (Unidade II)
    [
        {
            question: "Qual tag HTML é usada para criar um parágrafo?",
            options: ["<p>", "<par>", "<paragraph>", "<pg>"],
            answer: "<p>",
            explanation: "A tag <p> define um parágrafo em HTML."
        },
        {
            question: "O que é necessário para criar um link em HTML?",
            options: ["<a>", "<link>", "<href>", "<url>"],
            answer: "<a>",
            explanation: "A tag <a> cria hyperlinks com o atributo href."
        },
        {
            question: "Qual atributo HTML define o destino de um link?",
            options: ["src", "href", "link", "dest"],
            answer: "href",
            explanation: "O atributo href especifica a URL do link."
        }
    ],

    // Nível 2 (Unidade III)
    [
        {
            question: "Qual propriedade CSS é usada para alterar a cor do texto?",
            options: ["text-color", "color", "font-color", "background-color"],
            answer: "color",
            explanation: "A propriedade 'color' define a cor do texto."
        },
        {
            question: "Como definimos o tamanho da fonte no CSS?",
            options: ["font-style", "text-size", "font-size", "text-style"],
            answer: "font-size",
            explanation: "'font-size' controla o tamanho do texto."
        },
        {
            question: "Qual propriedade CSS altera o fundo de um elemento?",
            options: ["background-color", "color", "background-style", "font-background"],
            answer: "background-color",
            explanation: "'background-color' define a cor de fundo."
        }
    ],

    // Nível 3 (Unidade IV)
    [
        {
            question: "O que o comando 'git init' faz?",
            options: ["Inicializa um novo repositório Git", "Envia arquivos para o repositório", "Baixa um repositório existente", "Exclui um repositório"],
            answer: "Inicializa um novo repositório Git",
            explanation: "'git init' cria um novo repositório Git local."
        },
        {
            question: "Qual comando Git é usado para enviar mudanças para o repositório remoto?",
            options: ["git push", "git commit", "git pull", "git clone"],
            answer: "git push",
            explanation: "'git push' envia commits para um repositório remoto."
        },
        {
            question: "Para baixar um repositório remoto usamos:",
            options: ["git pull", "git push", "git clone", "git fetch"],
            answer: "git clone",
            explanation: "'git clone' copia um repositório existente."
        }
    ],

    // Nível 4 (Unidade V)
    [
        {
            question: "O que significa a sigla CSS?",
            options: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
            answer: "Cascading Style Sheets",
            explanation: "CSS significa Folhas de Estilo em Cascata."
        },
        {
            question: "No CSS, qual valor usamos para deixar um elemento invisível mas ainda ocupando espaço?",
            options: ["hidden", "display: none", "visibility: hidden", "opacity: 0"],
            answer: "visibility: hidden",
            explanation: "'visibility: hidden' oculta o elemento mantendo seu espaço."
        },
        {
            question: "Qual propriedade usamos para mudar o espaçamento interno de um elemento?",
            options: ["margin", "padding", "spacing", "border"],
            answer: "padding",
            explanation: "'padding' controla o espaço entre o conteúdo e sua borda."
        }
    ]
];

export default questions;