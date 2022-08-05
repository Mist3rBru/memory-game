export class Placar{
  mostraPlacar(){
    $('#placar').slideToggle() 
  }

  inserePlacar(){
    const corpoPlacar = $('#placar').find('tbody')
    const usuario = $('.jogadores').val()
    const dificuldade = $('.dificuldade').val()
    const movimentos = $('.movimentos').text()
    const tempo = this.tempoFinal()
    const pontuacao = this.somaPontos(movimentos)
    const linha = this.novaLinha(usuario,dificuldade, movimentos, tempo, pontuacao)

    corpoPlacar.append(linha)
    this.sortPlacar()
    this.limitaPlacar()
    $('#placar').slideDown(300)
    this.scrollPlacar()
  }

  tempoFinal(){
    let milisegundos = parseInt($('.milisegundos').text())
    let segundos = parseInt($('.segundos').text())
    let minutos = parseInt($('.minutos').text())

    if(milisegundos<10){milisegundos = '0'+milisegundos}
    if(segundos<10){segundos = '0'+segundos}
    if(minutos<10){minutos = '0'+minutos}
    const tempoFinal = minutos+':'+segundos+':'+milisegundos
    return tempoFinal
  }

  somaPontos(movs){
    const milisegundos = parseInt($('.milisegundos').text())/5
    const segundos = parseInt($('.segundos').text())
    const minutos = parseInt($('.minutos').text()) * 60
    const tempo = minutos + segundos + milisegundos
    const movimentos = parseInt(movs)
    const cartas = $('.carta').length
    
    let pontuacaoFinal = Math.floor((cartas * 100) - (movimentos * tempo))
    if(pontuacaoFinal < 0){pontuacaoFinal = 0}
    return pontuacaoFinal
  }

  novaLinha(usuario,dificuldade, movimentos, tempo, pontuacao){
    const linha = $('<tr>')
    const colunaPosicao = $('<td>').text('1').addClass('posicao')
    const colunaUsuario = $('<td>').text(usuario)
    const colunaDificuldade = $('<td>').text(dificuldade)
    const colunaMovimentos = $('<td>').text(movimentos)
    const colunaTempo = $('<td>').text(tempo)
    const colunaPontuacao = $('<td>').text(pontuacao).addClass('pontuacao')

    linha.append(colunaPosicao)
    linha.append(colunaUsuario)
    linha.append(colunaDificuldade)
    linha.append(colunaMovimentos)
    linha.append(colunaTempo)
    linha.append(colunaPontuacao)

    return linha
  }
  
  sortPlacar(){
    const linhas = $('tbody tr')
    let sort = true
    while(sort){
      sort = false
      for(let i = 0; i < linhas.length; i++){
        const linhaCima = linhas[i]
        const pontuacaoLinhaCima = parseInt($(linhaCima).find('.pontuacao').text())
        const linhaBaixo = linhas[i+1]
        const pontuacaoLinhaBaixo = parseInt($(linhaBaixo).find('.pontuacao').text())

        if(pontuacaoLinhaCima < pontuacaoLinhaBaixo){
          const conteudoLinhaCima = linhaCima.innerHTML
          const conteudoLinhaBaixo = linhaBaixo.innerHTML
          $(linhaCima).html(conteudoLinhaBaixo)
          $(linhaBaixo).html(conteudoLinhaCima)
          sort = true
        }
      }
    }
    for(let i = 0; i < linhas.length; i++){
      $(linhas[i]).find('.posicao').text(i+1)
    }
  }

  limitaPlacar(){
    const linhas = $('tbody tr')
    if(linhas.length > 10){
      $(linhas[10]).remove()
    }
  }

  scrollPlacar(){
    const posicaoPlacar = $('#placar').offset().top
    setTimeout(()=>{
      window.scroll({
        top: posicaoPlacar,
        behavior: 'smooth'
      })
    },500)
  }
}