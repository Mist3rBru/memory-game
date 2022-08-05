import { Contador } from './contador.js'
import { Valida } from './valida.js'
import { Placar } from './placar.js'
import { comecaJogo } from './comecaJogo.js'

const contador = new Contador()
const valida = new Valida()
const placar = new Placar()

export { contador, placar }

$(function() {
  $('.jogadores').selectize({
    create: true,
    sortField: 'text',
    valueField: 'text'
  })

  $('.carta').click(validaJogador)
  $('select').click(validaJogador)
  $('.reset').click(validaJogador)

  $('#como-jogar').fadeIn(800)
  $('#como-jogar').click(() => $('.modal').fadeOut(800))


  $('.placar').click(placar.mostraPlacar)

  $('.login').click(() => {
    $('.carta').addClass('match')
    valida.fimJogo()
  })
})

function validaJogador() {
  const campo = $('.selectize-input')
  const jogador = $('.jogadores').val()
  if(jogador != '') {
    comecaJogo()
    preparaCarta()
  } else {
    campo.addClass('unmatch')
    setTimeout(() => {
      campo.removeClass('unmatch')
    }, 750)
  }
}

function preparaCarta() {
  let cartasSelecionadas = []
  $('.carta').click(function() {
    const carta = this
    if(!$(carta).is('.desabilitada, .match')) {
      valida.mostraCarta(carta)

      cartasSelecionadas.push(carta)
      if(cartasSelecionadas.length == 2) {
        contador.contaMovimento()
        valida.validaJogada(cartasSelecionadas)
        cartasSelecionadas = []
      }
    }
  })
}