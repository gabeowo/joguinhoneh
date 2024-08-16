const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: "No âmbito social, você prefere:",
        alternativas: [
            {
                texto: "Ganhar 100 dólares toda vez que te baterem, mas ninguém nem liga para você  ou morrer pobre, mas o mundo é muito pacifico",
                afirmação: "afirmação",
            },
            {
                texto: "Que toda a espécie humana seja extinta, menos você (e que você não possa se suicidar) ou que você morra, mas a população continue viva",
                afirmação: "afirmação",
            },
        ]
    },
    {
        enunciado: "No âmbito ambiental, você prefere:",
        alternativas: [
            {
                texto: "Restaurar sua espécie extinta preferida, mas a sua espécie atual preferida acaba ou as cidades se tornam 100% sustentáveis, mas você sente como se estivesse respirando do lado do rio Tietê a cada hora por 20 min",
                afirmação: "afirmação",
            },
            {
                texto: "Todos os gatinhos amam você, mas todo dia um pombo caga na sua cabeça ou você se torna imune aos pombos, mas todos os gatos te odeiam",
                afirmação: "afirmação",
            },
        ]
    },
    {
        enunciado: "No âmbito tecnológico, você prefere:",
        alternativas: [
            {
                texto: "Desenvolver a cura para uma doença fodida, mas você contrai dengue hemorrágica ou Você se torna imune a qualquer virose e bacterioses, mas você perde seu órgão reprodutor (perdeu o pau kk)",
                afirmação: "afirmação",
            },
            {
                texto: "Você pode ter qualquer eletrônico de graça, mas você se torna fisicamente igual ao Quasimodo ou Você tem o corpo dos seus sonhos, mas só pode se comunicar por pombo correio ",
                afirmação: "afirmação",
            },
        ]
    },
]
let atual = 0;
let perguntaAtual;


function mostraPergunta (){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado; 
}

mostraPergunta();