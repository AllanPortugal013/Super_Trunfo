var cartaAllan= {
	nome:"Flygon",
  foto: "https://assets.pokemon.com/assets/cms2-pt-br/img/cards/web/SWSH3/SWSH3_PT-BR_91.png",
	atributos:{
		ataque:150,
		defesa:66,
		ataque_especial: 130
	}
}

var cartaMatheus = {
	nome:"Lucario",
  foto: "https://http2.mlstatic.com/D_NQ_NP_661855-MLB40545585063_012020-O.jpg",
	atributos:{
		ataque:120,
		defesa:75,
		ataque_especial:120
	}
}

var cartaEvandro = {
	nome:"Greninja",
  foto:"Greninja",
  foto:"https://www.pokemon.com/static-assets/content-assets/cms2-pt-br/img/cards/web/SWSH8/SWSH8_PT-BR_73.png",
	atributos:{
		ataque:130,
		defesa:88,
		ataque_especial: 120
	}
}

var cartaAnderson = {
  nome: "Rayquaza",
  foto: "https://http2.mlstatic.com/D_NQ_NP_673266-MLB29888286747_042019-O.webp",
  	atributos:{
		ataque:180,
		defesa:88,
		ataque_especial: 118
	}
}

var cartaSaymon = {
  nome: "Umbreon",
  foto: "https://i.pinimg.com/originals/01/0f/db/010fdb5e7112fcad8f8c517a2209f347.jpg",
  atributos:{
		ataque:100,
		defesa:90,
		ataque_especial: 110
	}
}

var cartaMaquina
var cartaJogador
var cartas = [cartaAllan, cartaMatheus, cartaEvandro, cartaAnderson, cartaSaymon]

function sortearCarta(){
	var numeroCartaMaquina = parseInt(Math.random() * 5)
	cartaMaquina = cartas [numeroCartaMaquina]
	
	var numeroCartaJogador = parseInt(Math.random() * 5)
	while (numeroCartaJogador == numeroCartaMaquina){
		numeroCartaJogador = parseInt(Math.random() * 5)
	}
	cartaJogador = cartas[numeroCartaJogador]
	console.log(cartaJogador)
	
	document.getElementById('btnSortear').disabled = true
	document.getElementById('btnJogar').disabled = false
  exibirOpcoes()
}

function exibirOpcoes() {
	var opcoes = document.getElementById('opcoes')
	var opcoesTexto = ""
	for (var atributo in cartaJogador.atributos){
		opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo
	}
  opcoesTexto += '<p>Sua cara é: </p>' + '<br>'
  opcoesTexto += "<div class= 'lista'>" + "<img src=" + cartaJogador.foto + " heigth= '182' width= '320'></p><span class= 'titulos'>" + cartaJogador.nome + "</span></div>" 
  
  opcoesTexto += '<p>Carta do rival </p>' + '<br>'
   opcoesTexto += "<div class= 'lista'>" + "<img src=" + cartaMaquina.foto + " heigth= '182' width= '320'></p><span class= 'titulos'>" + cartaMaquina.nome + "</span></div>" 
	opcoes.innerHTML = opcoesTexto
}

function obtemAtributoSelecionado() {
	var radioAtributo = document.getElementsByName('atributo')
	for (var i = 0; i < radioAtributo.length; i++){
		if (radioAtributo[i].checked) {
			return radioAtributo[i].value
		}
	}
}

function jogar() {
	var atributoSelecionado = obtemAtributoSelecionado()
	
	if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
		alert('Parabéns você venceu!')
	} else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
		alert('Infelizmente você foi derrotado!')
	} else {
		alert('Houve um empate!')
	}
	console.log(cartaMaquina)
}
