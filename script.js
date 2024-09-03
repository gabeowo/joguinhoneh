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
                afirmacao: "Parabéns, você vai: ganhar 100 dolares toda vez que te baterem, porém vai ser ignorado;",
            },
            {
                texto: "Que toda a espécie humana seja extinta, menos você (e que você não possa se suicidar)",
                afirmacao: "Parabéns, você vai: extinguir toda a espécie humana, menos você; ",
            },
        ] 
    },
{
            enunciado: "No âmbito social:",
            alternativas: [
            {
                texto: "Morrer pobre, mas o mundo é muito pacifico",
                afirmacao: "Morrer pobre, mas ter uma sociedade pacifica;",
            },
            {
                texto: "Você morre, mas a população continue viva",
                afirmacao: "morrer por uma sociedade hipócrita e suicida :D;",
            },
        ]
    },
    {
        enunciado: "No âmbito ambiental:",
        alternativas: [
            {
                texto: "Todos os gatinhos amam você, mas todo dia um pombo caga na sua cabeça",
                afirmacao: "ter o amor felino, o mais importate, sendo pinico de pombo; ",
              },
            {
                texto: "Você se torna imune aos pombos, mas todos os gatos te odeiam",
                afirmacao: "ser imuni a merda de pombo, mas os felinos vão sempre te detestar; ",  },
        ]
    },
        {
        enunciado: "No âmbito ambiental:",
        alternativas: [
            {
                texto: "As cidades se tornam 100% sustentáveis, mas você sente como se estivesse respirando do lado do rio Tietê a cada hora por 20 min",
                afirmacao: "ser o salvador do mundo pela sustentabilidade mundial, mas sentindo eternamente o cheiro do tiete kk; ",
            },
            {
                texto: "Restaurar sua espécie extinta preferida, mas a sua espécie atual preferida acaba",
                afirmacao: "trazer de volta uma espécie que não coseguirá sobreviver nesse novo ambiente e desestabilizar parte da fauna :); ",
         
            },
        ]
    },
    {
        enunciado: "No âmbito tecnológico:",
        alternativas: [
            {
                texto: "Desenvolver a cura para uma doença fodida, mas você contrai dengue hemorrágica",
                afirmacao: "salvar muitas pessoas com a sua vacina, porém vai ter dengue hemorrágica; ",
            },
            {
                texto: "Você pode ter qualquer eletrônico de graça, mas você se torna fisicamente igual ao Quasimodo",
                afirmacao: "ter qualquer eletronico de graça com corpo do corcunda de Notre Dame; ",
            },
        ]
    },
        {
        enunciado: "No âmbito tecnológico:",
        alternativas: [
            {
                texto: "Você se torna imune a qualquer virose e bacterioses, mas você perde seu órgão reprodutor (perdeu o pau kk)",
                afirmacao: " e vai ser imune a mais doenças, tendo seu orgão sexual coratdo fora.",
            },
            {
                texto: "Você tem o corpo dos seus sonhos, mas só pode se comunicar por pombo correio ",
                afirmacao: " e vai ter o corpo dos seus sonhos tendo que se comunicar por pombo correio.",
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


