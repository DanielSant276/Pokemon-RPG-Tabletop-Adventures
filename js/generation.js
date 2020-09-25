var sex;

function sexoFunc () {
	var random = Math.round(Math.random() + 1);
	
	if (random == 1) {
		sex = "macho";
		return "Macho";
	}
	else {
		sex = "femea";
		return "Fêmea";
	}
}

function natureFunc () {
	var random = Math.round((Math.random() * 34 ));
	if (sex == "macho") {
		var natureArray = ["Ousado +Saúde -Ataque", "Dócil +Saúde -Defesa", "Orgulhoso +Saúde -Ataque Especial", "Excêntrico +Saúde -Defesa Especial", "Preguiçoso +Saúde -Velocidade", "Desesperado +Ataque -Ataque", "Solitário +Ataque -Defesa", "Firme +Ataque -Ataque Especial", "Travesso +Ataque -Defesa Especial", "Bravo +Ataque -Velocidade", "Rígido +Defesa -Ataque", "Arrojado +Defesa -Defesa", "Endiabrado +Defesa -Ataque Especial", "Negligente +Defesa -Defesa Especial", "Relaxado +Defesa -Velocidade", "Tímido +Ataque Especial -Ataque", "Modesto +Ataque Especial -Defesa", "Amável +Ataque Especial -Ataque Especial", "Imprudente +Ataque Especial -Defesa Especial", "Quieto +Ataque Especial -Velocidade", "Enjoado +Defesa Especial -Ataque", "Calmo +Defesa Especial -Defesa", "Gentil +Defesa Especial -Ataque Especial", "Meticuloso +Defesa Especial -Defesa Especial", "Atrevido +Defesa Especial -Velocidade", "Sério +Velocidade -Ataque", "Medroso +Velocidade -Defesa", "Apressado +Velocidade -Ataque Especial", "Alegre +Velocidade -Defesa Especial", "Ingênuo +Velocidade -Velocidade", "Comedido Nenhum Nenhum", "Chato Nenhum Nenhum", "Paciente Nenhum Nenhum", "Sensato Nenhum Nenhum", "Estóico Nenhum Nenhum"];
	}
	else {
		var natureArray = ["Ousada +Saúde -Ataque", "Dócil +Saúde -Defesa", "Orgulhosa +Saúde -Ataque Especial", "Excêntrica +Saúde -Defesa Especial", "Preguiçosa +Saúde -Velocidade", "Desesperada +Ataque -Ataque", "Solitária +Ataque -Defesa", "Firme +Ataque -Ataque Especial", "Travessa +Ataque -Defesa Especial", "Brava +Ataque -Velocidade", "Rígida +Defesa -Ataque", "Arrojada +Defesa -Defesa", "Endiabrada +Defesa -Ataque Especial", "Negligente +Defesa -Defesa Especial", "Relaxada +Defesa -Velocidade", "Tímida +Ataque Especial -Ataque", "Modesta +Ataque Especial -Defesa", "Amável +Ataque Especial -Ataque Especial", "Imprudente +Ataque Especial -Defesa Especial", "Quieta +Ataque Especial -Velocidade", "Enjoada +Defesa Especial -Ataque", "Calma +Defesa Especial -Defesa", "Gentil +Defesa Especial -Ataque Especial", "Meticulosa +Defesa Especial -Defesa Especial", "Atrevida +Defesa Especial -Velocidade", "Séria +Velocidade -Ataque", "Medrosa +Velocidade -Defesa", "Apressada +Velocidade -Ataque Especial", "Alegre +Velocidade -Defesa Especial", "Ingênua +Velocidade -Velocidade", "Comedida Nenhum Nenhum", "Chata Nenhum Nenhum", "Paciente Nenhum Nenhum", "Sensata Nenhum Nenhum", "Estóica Nenhum Nenhum"];
	}
	return natureArray[random];
}

function shinyFunc () {
	var random = Math.round((Math.random() * 999 ) + 1);
	console.log(random);
	if (random == 1000 ) {
		return "Sim";
	}
	else {
		return "Não";
	}
}


var resetButton = document.querySelector ("#button-reset");
resetButton.addEventListener ("click", function() {
	sexo.textContent = sexoFunc ();
	nature.textContent = natureFunc ();
	shiny.textContent = shinyFunc ();
});

var sexo = document.querySelector (".sexo");
var nature = document.querySelector (".nature");
var shiny = document.querySelector (".shiny");


sexo.textContent = sexoFunc ();
nature.textContent = natureFunc ();
shiny.textContent = shinyFunc ();