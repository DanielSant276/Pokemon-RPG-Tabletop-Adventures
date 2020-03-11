function sexoFunc () {
	var random = Math.round(Math.random() + 1);
	
	if (random == 1) {
		return "Macho";
	}
	else {
		return "Fêmea";
	}
}

function natureFunc () {
	var random = Math.round((Math.random() * 34 ) + 1);

	if (random == 1) {
		return "Ousada +Saúde -Ataque";
	}
	else if (random == 2) {
		return "Dócil +Saúde -Defesa";
	}
	else if (random == 3) {
		return "Orgulhosa +Saúde -Ataque Especial";
	}
	else if (random == 4) {
		return "Execentrica +Saúde -Defesa Especial";
	}
	else if (random == 5) {
		return "Preguiçosa +Saúde -Velocidade";
	}
	else if (random == 6) {
		return "Desesperada +Ataque -Ataque";
	}
	else if (random == 7) {
		return "Solitária +Ataque -Defesa";
	}
	else if (random == 8) {
		return "Firme +Ataque -Ataque Especial";
	}
	else if (random == 9) {
		return "Travessa +Ataque -Defesa Especial";
	}
	else if (random == 10) {
		return "Brava +Ataque -Velocidade";
	}
	else if (random == 11) {
		return "Rígida +Defesa -Ataque";
	}
	else if (random == 12) {
		return "Arrojada +Defesa -Defesa";
	}
	else if (random == 13) {
		return "Endiabrada +Defesa -Ataque Especial";
	}
	else if (random == 14) {
		return "Negligente +Defesa -Defesa Especial";
	}
	else if (random == 15) {
		return "Relaxada +Defesa -Velocidade";
	}
	else if (random == 16) {
		return "Timida +Ataque Especial -Ataque";
	}
	else if (random == 17) {
		return "Modesta +Ataque Especial -Defesa";
	}
	else if (random == 18) {
		return "Amável +Ataque Especial -Ataque Especial";
	}
	else if (random == 19) {
		return "Imprudente +Ataque Especial -Defesa Especial";
	}
	else if (random == 20) {
		return "Quieta +Ataque Especial -Velocidade";
	}
	else if (random == 21) {
		return "Enjoada +Defesa Especial -Ataque";
	}
	else if (random == 22) {
		return "Calma +Defesa Especial -Defesa";
	}
	else if (random == 23) {
		return "Gentil +Defesa Especial -Ataque Especial";
	}
	else if (random == 24) {
		return "Meticulosa +Defesa Especial -Defesa Especial";
	}
	else if (random == 25) {
		return "Atrevida +Defesa Especial -Velocidade";
	}
	else if (random == 26) {
		return "Séria +Velocidade -Ataque";
	}
	else if (random == 27) {
		return "Medrosa +Velocidade -Defesa";
	}
	else if (random == 28) {
		return "Apressada +Velocidade -Ataque Especial";
	}
	else if (random == 29) {
		return "Alegre +Velocidade -Defesa Especial";
	}
	else if (random == 30) {
		return "Ingênua +Velocidade -Velocidade";
	}
	else if (random == 31){
		return "Comedida Nenhum Nenhum";
	}
	else if (random == 32){
		return "Chata Nenhum Nenhum";
	}
	else if (random == 33){
		return "Paciente Nenhum Nenhum";
	}
	else if (random == 34){
		return "Sensata Nenhum Nenhum";
	}
	else if (random == 35){
		return "Estoica Nenhum Nenhum";
	}	
}

function shinyFunc () {
	var random = Math.round((Math.random() * 999 ) + 1);
	if (random == 1000 ) {
		return "Sim";
	}
	else {
		return "Não";
	}
}

var sexo = document.querySelector (".sexo");
var nature = document.querySelector (".nature");
var shiny = document.querySelector (".shiny");

sexo.textContent = sexoFunc ();
nature.textContent = natureFunc ();
shiny.textContent = shinyFunc ();