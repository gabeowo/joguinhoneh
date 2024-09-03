const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: "No âmbito social:",
        alternativas: [
            {
                texto: "Ganhar 100 dólares toda vez que te baterem, mas ninguém nem liga para você",
                afirmacao: "Parabéns trouxam, você vai ser ignorado pela eternidade",
            },
            {
                texto: "Que toda a espécie humana seja extinta, menos você (e que você não possa se suicidar)",
                afirmacao: "Uepa! Oh, que lobo solitario vc é kk. Parabens ai, matou a humanidade atoa",
            },
        ] 
    },
{
            enunciado: "No âmbito social:",
            alternativas: [
            {
                texto: "Morrer pobre, mas o mundo é muito pacifico",
                afirmacao: "O homem é bom e a sociedade o corrompe, não é mexmo? Parabéns, vai morrer pobre, mas a sociedade vai ser pacifica pelo menos, né?",
            },
            {
                texto: "Você morre, mas a população continue viva",
                afirmacao: "Parabéns, você se sacrificou por uma sociedade hipócrita e suicida :D",
            },
        ]
    },
    {
        enunciado: "No âmbito ambiental:",
        alternativas: [
            {
                texto: "Todos os gatinhos amam você, mas todo dia um pombo caga na sua cabeça",
                afirmacao: "Parabéns, o amor felino é mais importate para você que sua higiene e orgulho. Respect ;) ",
              },
            {
                texto: "Você se torna imune aos pombos, mas todos os gatos te odeiam",
                afirmacao: "Parabéns, você não é um banheiro particular para os pombos, mas os felinos vão sempre te detestar. Eu choraria ok?",  },
        ]
    },
        {
        enunciado: "No âmbito ambiental:",
        alternativas: [
            {
                texto: "As cidades se tornam 100% sustentáveis, mas você sente como se estivesse respirando do lado do rio Tietê a cada hora por 20 min",
                afirmacao: "Parabéns, o mundo pode ter uma salvação por sua causa, mas você vai ser um sofredor eterno. Boa sorte kk",
            },
            {
                texto: "Restaurar sua espécie extinta preferida, mas a sua espécie atual preferida acaba",
                afirmacao: "Parabens, vc trouxe de volta uma espécie que não coseguirá sobreviver nesse novo ambiente e desestabilizou parte da fauna :)",
         
            },
        ]
    },
    {
        enunciado: "No âmbito tecnológico:",
        alternativas: [
            {
                texto: "Desenvolver a cura para uma doença fodida, mas você contrai dengue hemorrágica",
                afirmacao: "Parabéns, você salvou muitas pessoas, mas se fudeu kk. Sinto muito ai",
            },
            {
                texto: "Você pode ter qualquer eletrônico de graça, mas você se torna fisicamente igual ao Quasimodo",
                afirmacao: "Paranbéns por ser um nerd tecnologico com corpo do corcunda de Notre Dame",
            },
        ]
    },
        {
        enunciado: "No âmbito tecnológico:",
        alternativas: [
            {
                texto: "Você se torna imune a qualquer virose e bacterioses, mas você perde seu órgão reprodutor (perdeu o pau kk)",
                afirmacao: "Parabéns, não fica mais doente com tanta facilidade, mas é castrado",
            },
            {
                texto: "Você tem o corpo dos seus sonhos, mas só pode se comunicar por pombo correio ",
                afirmacao: "Olha só, voltamos ao séc XVI por um corpo bonito :)",
            },
        ]
    },
]
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta (){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent ="";
    mostraAlternativa();
}

function mostraAlternativa (){
    for (const pergunta of perguntaAtual.alternativas) {
       const botaoAlternativa = document.createElement('button');
       botaoAlternativa.textContent = pergunta.texto;
       botaoAlternativa.addEventListener("click", ()=> respotaSelecionada(pergunta));
       caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respotaSelecionada(pergunta){
    const afirmacao = pergunta.afirmacao;
    historiaFinal += afirmacao + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em resumo, você escolheu "
    caixaResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();


