export class Contador {
  contaMovimento() {
    const contador = $('.movimentos')
    const movimento = parseInt(contador.text()) + 1
    contador.text(movimento)
  }

  iniciaCronometro() {
    const contadorMilisegundos = $('.milisegundos')
    const contadorSegundos = $('.segundos')
    const contadorMinutos = $('.minutos')
    const mesa = $('.mesa')

    mesa.one('click', function() {
      setInterval(() => {
        let ms = parseInt(contadorMilisegundos.text())
        ms++
        if(ms < 10) {
          ms = '0' + ms
        } else if(ms == 100) {
          ms = '00'
        }
        contadorMilisegundos.text(ms)
      }, 10);

      setInterval(() => {
        let s = parseInt(contadorSegundos.text())
        s++
        if(s < 10) {
          s = '0' + s
        } else if(s == 60) {
          s = '00'

          let m = parseInt(contadorMinutos.text())
          m++
          if(m < 10) { m = '0' + m }
          contadorMinutos.text(m)
        }
        contadorSegundos.text(s)
      }, 1000);
    })
  }

  paraCronometro() {
    for(let i = 0; i < 100; i++){
      clearInterval(i)
    }
  }
}