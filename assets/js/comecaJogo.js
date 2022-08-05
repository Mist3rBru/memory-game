import { contador } from './main.js'
export function comecaJogo() {
  resetaContadores()
  contador.iniciaCronometro()

  let baralho = criaBaralho()
  baralho = embaralha(baralho)
  limpa(baralho)
  distribui(baralho)
}

function criaBaralho() {
  const baralho = []
  const tipo = selecionaTipo()
  const dificuldade = selecionaDificuldade()
  const nCartas = dificuldade * 2
  let contador = -1
  for(let i = 0; i < nCartas; i++) {
    contador++
    if(contador == dificuldade) { contador = 0 }
    let carta = $('<div>').addClass('carta').attr('data-carta', contador).html(tipo[contador].imagem)
    baralho.push(carta)
  }
  return baralho
}

function selecionaTipo() {
  let tipo = $('.tipo').val()
  switch(tipo) {
    // Português
    case 'Slimes':
      tipo = Slimes
      break
    case 'Dinos':
      tipo = Dinos
      break
    case 'Números':
      tipo = Numeros
      break
    case 'Teste':
      tipo = Teste
      break
      // Inglês
    case 'Slime':
      tipo = Slimes
      break
    case 'Dino':
      tipo = Dinos
      break
    case 'Number':
      tipo = Numeros
      break
    case 'Test':
      tipo = Test
      break
  }
  return tipo
}

function selecionaDificuldade() {
  let dificuldade = $('.dificuldade').val()
  switch(dificuldade) {
    // Português
    case 'Fácil':
      dificuldade = 3
      break
    case 'Normal':
      dificuldade = 4
      break
    case 'Díficil':
      dificuldade = 5
      break
      // Inglês
    case 'Easy':
      dificuldade = 3
      break
    case 'Hard':
      dificuldade = 5
      break
  }
  return dificuldade
}

function embaralha(cartas) {
  let currentIndex = cartas.length
  let temporaryValue, randomIndex;

  while(currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = cartas[currentIndex];
    cartas[currentIndex] = cartas[randomIndex];
    cartas[randomIndex] = temporaryValue;
  }

  return cartas;
}

function limpa(cartas) {
  for(let i = 0; i < cartas.length; i++) {
    $(cartas[i]).removeClass('mostra desabilitada match unmatch')
  }
}

function distribui(cartas) {
  const mesa = $('.mesa')
  mesa.html('')
  for(let i = 0; i < cartas.length; i++) {
    mesa.append(cartas[i])
  }
}

function resetaContadores() {
  contador.paraCronometro()
  $('.minutos').text('00')
  $('.segundos').text('00')
  $('.milisegundos').text('00')
  $('.movimentos').text('0')
}


const Slimes = [{
    nome: "happy",
    imagem: "<img src='./assets/img/slime/happy.jpg' class='conteudo'>"
  },
  {
    nome: "sad",
    imagem: "<img src='./assets/img/slime/sad.jpg' class='conteudo'>"
  },
  {
    nome: "angry",
    imagem: "<img src='./assets/img/slime/angry.jpg' class='conteudo'>"
  },
  {
    nome: "surprised",
    imagem: "<img src='./assets/img/slime/surprised.jpg' class='conteudo'>"
  },
  {
    nome: "scared",
    imagem: "<img src='./assets/img/slime/scared.jpg' class='conteudo'>"
  }
]

const Numeros = [{
    nome: "01",
    imagem: "<img src='./assets/img/numeros/01.jpg' class='conteudo'>"
  },
  {
    nome: "02",
    imagem: "<img src='./assets/img/numeros/02.jpg' class='conteudo'>"
  },
  {
    nome: "03",
    imagem: "<img src='./assets/img/numeros/03.jpg' class='conteudo'>"
  },
  {
    nome: "04",
    imagem: "<img src='./assets/img/numeros/04.jpg' class='conteudo'>"
  },
  {
    nome: "05",
    imagem: "<img src='./assets/img/numeros/05.jpg' class='conteudo'>"
  }
]

const Dinos = [{
    nome: "01.the-little-star-and-the-dino",
    imagem: "<img src='./assets/img/dinos/01.the-little-star-and-the-dino.jpg' class='conteudo'>"
  },
  {
    nome: "02.the-dino-in-the-little-lake",
    imagem: "<img src='./assets/img/dinos/02.the-dino-in-the-little-lake.jpg' class='conteudo'>"
  },
  {
    nome: "03.the-flying-dino",
    imagem: "<img src='./assets/img/dinos/03.the-flying-dino.jpg' class='conteudo'>"
  },
  {
    nome: "04.the-dino-and-the-moon",
    imagem: "<img src='./assets/img/dinos/04.the-dino-and-the-moon.jpg' class='conteudo'>"
  },
  {
    nome: "05.the-dino-and-the-flower",
    imagem: "<img src='./assets/img/dinos/05.the-dino-and-the-flower.jpg' class='conteudo'>"
  }
]
const Teste = [{
    imagem: "<div class='conteudo'>Teste 01</div>"
  },
  {
    imagem: "<div class='conteudo'>Teste 02</div>"
  },
  {
    imagem: "<div class='conteudo'>Teste 03</div>"
  },
  {
    imagem: "<div class='conteudo'>Teste 04</div>"
  },
  {
    imagem: "<div class='conteudo'>Teste 05</div>"
  }
]
const Test = [{
    imagem: "<div class='conteudo'>Test 01</div>"
  },
  {
    imagem: "<div class='conteudo'>Test 02</div>"
  },
  {
    imagem: "<div class='conteudo'>Test 03</div>"
  },
  {
    imagem: "<div class='conteudo'>Test 04</div>"
  },
  {
    imagem: "<div class='conteudo'>Test 05</div>"
  }
]