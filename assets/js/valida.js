import { contador,placar } from "./main.js"
export class Valida{

	mostraCarta(carta){
			$(carta).addClass('mostra desabilitada')
	}

	escondeCarta(cartas){
		$(cartas).removeClass('mostra desabilitada')
	}

	validaJogada(cartas){
		if(
			$(cartas[0]).attr('data-carta')
			==
			$(cartas[1]).attr('data-carta')
		){
			this.match(cartas)
		} else {
			this.unmatch(cartas)
		}
		this.escondeCarta(cartas)
	}

	match(cartas){
		$(cartas).addClass('match')
		this.fimJogo()
	}

	unmatch(cartas){
		$(cartas).addClass('unmatch')
		setTimeout(function(){
			$(cartas).removeClass('unmatch')
		},1250)
	}

	fimJogo(){
		const cartas = $('.carta')
		const matchs = $('.match')
		if(cartas.length == matchs.length){
			contador.paraCronometro()
			placar.inserePlacar()
		}
	}
}