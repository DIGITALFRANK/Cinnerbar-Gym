
class MawuPokemon {
    constructor(api_url) {
        let self = this;
        $.ajax({
            type: 'get',
            url: api_url,
            success: (data) => {
                console.log('fresh new Pokemon!')
                self.xyzAllDataResults = data;

                let $pokemonName = $(`<h1 class="pokemonName">${data.name}</h1>`);
                let $pokemonImage = $(`<div class="frame frame-primary mask mask-primary"><img src=${data.sprites.back_default}></div>`);
                    let $frontImg = $(`<div class="frame frame-primary mask mask-primary"><img src=${data.sprites.front_default}></div>`);
                    let $backImg = $(`<div class="frame frame-primary mask mask-primary"><img src=${data.sprites.back_default}></div>`);
                let $hp = $(`<h2 class="hp">HP: ${data.stats[5].base_stat}</h2>`);
                let $attack = $(`<div class="attack">attack: ${data.stats[4].base_stat}</div>`);
                let $defense = $(`<p class="defense">defense: ${data.stats[3].base_stat}</p>`);
                let $abilities = $("<p class='abilities'></br></br>abilities:</br></br></p>");
                let $abilitiesArr = [];
                data.abilities.forEach((element) => {
                    $abilitiesArr.push($(`<a class="ability" href="${element.ability.url}">${element.ability.name}</a>`));
                    // $abilitiesArr.push($(`<a class="ability" href="${element.ability.url}">${element.ability.name}</a></br></br></br>`));
                });
                $abilities.append($abilitiesArr);

                // let $listItem = $(`<li class="btn-floating $pokemonName">${$pokemonImage}${$pokemonName}<div class="infoBox">${$hp}${$attack}${$defense}${$abilities}</div></li>`)

                // $('#mawuAkuma').append($listItem);

                self.name = data.name;
                self.imgSrc = data.sprites.front_default;
                self.hp = data.stats[5].base_stat;
                self.attack = data.stats[4].base_stat;
                self.defense = data.stats[3].base_stat;
                self.abilitiesList = [];
                data.abilities.forEach((element) => {
                    self.abilitiesList.push(element.ability.name);
                });

                mawuAkumaPokedex[data.name] = self;
                let $listItem = $(`<li class="${$pokemonName}">${self.name}<div class="pokemonImg"><img src="${self.imgSrc}"></div></li>`)
                $('#francisPokedex').append($listItem);
            },
            error: (err) => {
                console.log(err)
            }
        });
        console.log(self);
    }
}

class ThrasherPokemon {
    constructor(api_url) {
        let self = this;
        $.ajax({
            type: 'get',
            url: api_url,
            success: (data) => {
                console.log('fresh new Pokemon!')
                self.xyzAllDataResults = data;

                let $pokemonName = $(`<p class="pokemonName">${data.name}</p>`);
                let $pokemonImage = $(`<div class="frame frame-primary mask mask-primary"><img src=${data.sprites.back_default}></div>`);
                    let $frontImg = $(`<div class="frame frame-primary mask mask-primary"><img src=${data.sprites.front_default}></div>`);
                    let $backImg = $(`<div class="frame frame-primary mask mask-primary"><img src=${data.sprites.back_default}></div>`);
                let $hp = $(`<h2 class="hp">HP: ${data.stats[5].base_stat}</h2>`);
                let $attack = $(`<div class="attack">attack: ${data.stats[4].base_stat}</div>`);
                let $defense = $(`<p class="defense">defense: ${data.stats[3].base_stat}</p>`);
                let $abilities = $("<p class='abilities'></br></br>abilities:</br></br></p>");
                let $abilitiesArr = [];
                data.abilities.forEach((element) => {
                    $abilitiesArr.push($(`<a class="ability" href="${element.ability.url}">${element.ability.name}</a>`));
                    // $abilitiesArr.push($(`<a class="ability" href="${element.ability.url}">${element.ability.name}</a></br></br></br>`));
                });
                $abilities.append($abilitiesArr);


                // let $listItem = $(`<li class="btn-floating $pokemonName">${$pokemonImage}${$pokemonName}</li>`)

                // let infoBox = $(`<div class="infoBox">${$hp}${$attack}${$defense}${$abilities}</div>`)

                // $('.pokemonInfo').append($pokemonName, $hp, $attack, $defense, $abilities);

                self.name = data.name;
                self.imgSrc = data.sprites.front_default;
                self.hp = data.stats[5].base_stat;
                self.attack = data.stats[4].base_stat;
                self.defense = data.stats[3].base_stat;
                self.abilitiesList = [];
                data.abilities.forEach((element) => {
                    self.abilitiesList.push(element.ability.name);
                });

                pokeThrasherPokedex[data.name] = self;
                let $listItem = $(`<li class="${$pokemonName}"><div class="pokemonImg"><img src="${self.imgSrc}"></div>${self.name}</li>`)
                $('#ianPokedex').append($listItem);
            },
            error: (err) => {
                console.log(err)
            }
        });
        console.log(self);
    }
}



const mawuAkumaPokedex = {
    all: (PokemonNumber1, PokemonNumber2, PokemonNumber3) => {
        // array of all 3 pokemon objects
        let pokemonArr = [];
        pokemonArr.push(new MawuPokemon(`https://pokeapi.co/api/v2/pokemon/${PokemonNumber1}/`));
        pokemonArr.push(new MawuPokemon(`https://pokeapi.co/api/v2/pokemon/${PokemonNumber2}/`));
        pokemonArr.push(new MawuPokemon(`https://pokeapi.co/api/v2/pokemon/${PokemonNumber3}/`));

        return pokemonArr
    }
}

const pokeThrasherPokedex = {
    all: (PokemonNumber1, PokemonNumber2, PokemonNumber3) => {
        // array of all 3 pokemon objects
        let pokemonArr = [];
        pokemonArr.push(new ThrasherPokemon(`https://pokeapi.co/api/v2/pokemon/${PokemonNumber1}/`));
        pokemonArr.push(new ThrasherPokemon(`https://pokeapi.co/api/v2/pokemon/${PokemonNumber2}/`));
        pokemonArr.push(new ThrasherPokemon(`https://pokeapi.co/api/v2/pokemon/${PokemonNumber3}/`));

        return pokemonArr
    }
}


// create a function that gets Pokemon info from the trainer object, then dynamically creates 2  wrapper divs
/////// 1 wrapper div with a <ul> of pokemon image + name (x3) 
/////// 1 wrapper div with a <ul> of pokemon info (x3), <li> class set to ${pokemon.name} 
/////////////////////// OR THIS FUNCTION CAN DO ALL OF THIS INDIVIDUALLY FOR EACH POKEMON WITH .then or .done AFTER EACH API CALL IN THE all() method
/////////////////////// TEST THIS THEORY WITH get() method FOR INDIVIDUAL POKEMON

// Pokemon info <ul><li> can be set to position absolute, opacity 0, and then animated to opacity 1 on pokemon hover 

////// is it gonna be pokemon? pokemon name (pikachu)? or an index to access the newly created pokemon?

// function domDisplay (trainer, pokemon) {   // trainer.pikachu.name, trainer.pikachu.imgSrc, ... 
//     let $pokemonName = $(`<h1 class="pokemonName ${trainer.pokemon.name}">${trainer.pokemon.name}</h1>`);
//     let $pokemonImage = $(`<div class="image ${trainer.pokemon.name}Img"><img src=${trainer.pokemon.imgSrc}></div>`);
//     let $hp = $(`<h2 class="hp ${trainer.pokemon.name}HP">HP: ${trainer.pokemon.stats[5].base_stat}</h2>`);
//     let $attack = $(`<div class="attack ${trainer.pokemon.name}Attack">attack: ${trainer.pokemon.stats[4].base_stat}</div>`);
//     let $defense = $(`<p class="defense ${trainer.pokemon.name}Defense">defense: ${trainer.pokemon.stats[3].base_stat}</p>`);
//     let $abilities = $(`<p class='abilities ${trainer.pokemon.name}Abilities'></br></br>abilities:</br></br></p>`);
//     let $abilitiesArr = [];
//     trainer.pokemon.abilities.forEach((element) => {
//         $abilitiesArr.push($(`<a class="ability ${trainer.pokemon.name}abilities" href="${element.ability.url}">${element.ability.name}</a>`));
//         // $abilitiesArr.push($(`<a class="ability" href="${element.ability.url}">${element.ability.name}</a></br></br></br>`));
//     });
//     $abilities.append($abilitiesArr);
//     return 

// ////// create element <ul> and append <li> here??????

//     // $('.pokemonImg').append($pokemonImage);
//     // $('.pokemonInfo').append($pokemonName, $hp, $attack, $defense, $abilities);
// }



$(document).ready(() => {
    $('.fixed-action-btn').floatingActionButton();
    mawuAkumaPokedex.all(25, 79, 55);
    pokeThrasherPokedex.all(101, 169, 105);

    $(".left-button").mouseover(() => {
        $('#ianPokedex').toggleClass('ianReveal');
    });

    $(".left-button").mouseout(() => {
        $('#ianPokedex').toggleClass('ianReveal');
    });



    $(".right-button").mouseover(() => {
        $('#francisPokedex').toggleClass('francisReveal');
    });    

    $(".right-button").mouseout(() => {
        $('#francisPokedex').toggleClass('francisReveal');
    });



    // $(".left-button").mouseout(() => {
    //     $('#ianPokedex').addClass('ianHide');
    // });

    // $(".right-button").mouseout(() => {
    //     $('#francisPokedex').addClass('francisHide');
    // });
})