//Pokemon object
class Pokemon {
	//Creating a blueprint for the pokemon object
	constructor(name, image, hp, atk, def, pokeType, abilities) {
		this.name = name;
		this.image = image;
		this.hp = hp;
		this.atk = atk;
		this.def = def;
		this.pokeType = pokeType;
		this.abilities = abilities;
	}
}

//Trainer object
class Trainer {
	constructor() {
		// empty array that will store my pokemon lineup (pokeTeam)
		this.pokeTeam = [];
	}
	all () {
		return this.pokeTeam;
	}
	get (name) {
		// method to retrieve each pokemon by name
		for(let i = 0; i < this.pokeTeam.length; i++) {
			let pokeName = this.pokeTeam[i].stats.name;
			if(pokeName === name) {
				return this.pokeTeam[i];
			} else {
				return "You got the wrong Pokemon, try again."
			}
		}
	}
}
//assigning my trainer name to my Trainer object
let pokeThrasher = new Trainer();
//generic function to assign pokemon data pulled from API to Trainer's PokeTeam line-up
let renderPokemon = (pokemon) => {
	$("#name").html(`POKEMON: ${pokemon.name}`);
	$(".icon-display").children('img').attr('src', pokemon.image);
	$(".hp").html(`HP: ${pokemon.hp}`);
	$(".atk").html(`ATK: ${pokemon.atk}`);
	$(".def").html(`DEF: ${pokemon.def}`);
	$(".type").html(`Type: ${pokemon.pokeType}`);
	$("#abilities").html("");
		for (i = 0; i < pokemon.abilities.length; i++) {
			if (i === pokemon.abilities.length-1) {
				$(".abilities").children('#abilities').append(`${pokemon.abilities[i]}`);
			} else {
				$(".abilities").children('#abilities').append(`${pokemon.abilities[i]}, `);
			}
		}	
};

//Pokemon ajax call, one for each pokemon
let electrode = () => {
$.ajax({
	url: "https://pokeapi.co/api/v2/pokemon/101",
	type: 'GET',
	success: function(pokeData) {
		console.log("success!");
			let name = pokeData.name;
			let image = pokeData.sprites.front_default;
			let hp = pokeData.stats[5].base_stat;
			let atk = pokeData.stats[4].base_stat;
			let def = pokeData.stats[3].base_stat;
			let pokeType = pokeData.types[0].type.name;
			let getAbilities = () => {
				let abilities = []
				for (let i = 0; i < pokeData.abilities.length; i++) {
					abilities.push(pokeData.abilities[i].ability.name);  	
				}	
				return abilities; 	
			} 		
			let abilitiesList = getAbilities();
			let pokemon = new Pokemon(name, image, hp, atk, def, pokeType, abilitiesList);	
			pokeThrasher.pokeTeam.push(pokemon);
		}
	});	
}

//Pokemon ajax call, one for each pokemon
let marowak = () => {
$.ajax({
	url: "https://pokeapi.co/api/v2/pokemon/105",
	type: 'GET',
	success: function(pokeData) {
		console.log("success!");
			let name = pokeData.name;
			let image = pokeData.sprites.front_default;
			let hp = pokeData.stats[5].base_stat;
			let atk = pokeData.stats[4].base_stat;
			let def = pokeData.stats[3].base_stat;
			let pokeType = pokeData.types[0].type.name;
			let getAbilities = () => {
				let abilities = []
				for (let i = 0; i < pokeData.abilities.length; i++) {
					abilities.push(pokeData.abilities[i].ability.name); 
				}
				return abilities; 	
			}
			let abilitiesList = getAbilities();
			let pokemon = new Pokemon(name, image, hp, atk, def, pokeType, abilitiesList);	
			pokeThrasher.pokeTeam.push(pokemon);
		}
	});	
}
//Pokemon ajax call, one for each pokemon
let crobat = () => {
$.ajax({
	url: "https://pokeapi.co/api/v2/pokemon/169",
	type: 'GET',
	success: function(pokeData) {
		console.log("success!");
			let name = pokeData.name;
			let image = pokeData.sprites.front_default;
			let hp = pokeData.stats[5].base_stat;
			let atk = pokeData.stats[4].base_stat;
			let def = pokeData.stats[3].base_stat;
			let pokeType = pokeData.types[0].type.name;
			let getAbilities = () => {
				let abilities = []
				for (let i = 0; i < pokeData.abilities.length; i++) {
					abilities.push(pokeData.abilities[i].ability.name); 
				}
				return abilities; 	
			}
			let abilitiesList = getAbilities();
			let pokemon = new Pokemon(name, image, hp, atk, def, pokeType, abilitiesList);	
			pokeThrasher.pokeTeam.push(pokemon);
		}
	});	
}
//Button functionality calling the Trainer Obj's line-up, 1 button for each pokemon
$( "#blue" ).click(function() {
	renderPokemon(pokeThrasher.pokeTeam[0]);
}); 
$( "#green" ).click(function() {
	renderPokemon(pokeThrasher.pokeTeam[1]);
});
$( "#yellow" ).click(function() {
	renderPokemon(pokeThrasher.pokeTeam[2]);
});
// calling each individual pokemon from the API (intital AJAX call)
electrode();
marowak();
crobat();