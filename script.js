const caixaPrincipal=document.queryselector(".caixa-principal");
const caixaPerguntas=document.queryselector('.caixa-perguntas");
const caixaAlternativas=document.querysector(".caixa-alternativas");
const caixaResultado=document.queryselector(".caixa-resultado");
const textoResultado=document.queryselector(".texto-resultado");

const perguntas=[
  {
    enunciado:"voce prefere inverno ou verão?",
   alternativas:[
     {
     texto: "inverno?",
     afirmação:"afirmação",
     },
     {
       "verão?",
       afirmação:"afirmação",
     }
      ]
  }
   {
    enunciado:"voce prefere praia ou piscina?",
    alternativas:[
     texto: "praia?",
      "piscina?",
      ]
  }
     {
    enunciado:"voce prefere cachorro ou gato?",
    alternativas:[
     texto: "cachorro",
      "gato",
      ]
  }                                        
 {
    enunciado:"voce prefere sorvete ou açai?",
    alternativas:[
     texto: "sorvete",
      "açai",
      ]
  }
 {
    enunciado:"voce prefere lasanha ou pizza?",
    alternativas:[
    texto:  "lasanha",
      "pizza",
      ]
  }
];

let atual=0;
let perguntasAtual;

fuction mostraPergunta(){
 perguntaAtual=perguntas[atual];
 caixaPerguntas.textContent=perguntaAtual.enunciado;
  mostraAlternativas();
} 

function mostraAlternativas(){
  for(const alternativa of perguntaAtual.alternativas){
  const botaoAlternativas = document.createElement("button")
  botaoAlternativas.textContent=alternativa;
  caixaAlternativas.appendChild(botaoAlternativas);
  }
}

mostraPergunta();


