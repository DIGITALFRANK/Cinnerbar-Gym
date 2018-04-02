
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

                // $('.pokemonImg').append($pokemonImage);
                // $('.pokemonInfo').append($pokemonName, $hp, $attack, $defense, $abilities);

                self.name = data.name;
                self.hp = data.stats[5].base_stat;
                self.attack = data.stats[4].base_stat;
                self.defense = data.stats[3].base_stat;
                self.abilitiesList = [];
                data.abilities.forEach((element) => {
                    self.abilitiesList.push(element.ability.name);
                });

                mawuAkumaPokedex[data.name] = self;
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

                // $('.pokemonImg').append($pokemonImage);
                // $('.pokemonInfo').append($pokemonName, $hp, $attack, $defense, $abilities);

                self.name = data.name;
                self.hp = data.stats[5].base_stat;
                self.attack = data.stats[4].base_stat;
                self.defense = data.stats[3].base_stat;
                self.abilitiesList = [];
                data.abilities.forEach((element) => {
                    self.abilitiesList.push(element.ability.name);
                });

                pokeThrasherPokedex[data.name] = self;
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
        pokemonArr.push(new Pokemon(`https://pokeapi.co/api/v2/pokemon/${PokemonNumber1}/`));
        pokemonArr.push(new Pokemon(`https://pokeapi.co/api/v2/pokemon/${PokemonNumber2}/`));
        pokemonArr.push(new Pokemon(`https://pokeapi.co/api/v2/pokemon/${PokemonNumber3}/`));

        return pokemonArr
    }
}

const pokeThrasherPokedex = {
    all: (PokemonNumber1, PokemonNumber2, PokemonNumber3) => {
        // array of all 3 pokemon objects
        let pokemonArr = [];
        pokemonArr.push(new Pokemon(`https://pokeapi.co/api/v2/pokemon/${PokemonNumber1}/`));
        pokemonArr.push(new Pokemon(`https://pokeapi.co/api/v2/pokemon/${PokemonNumber2}/`));
        pokemonArr.push(new Pokemon(`https://pokeapi.co/api/v2/pokemon/${PokemonNumber3}/`));

        return pokemonArr
    }
}



$(document).ready(() => {
    mawuAkumaPokedex.all(25, 79, 55);
    pokeThrasherPokedex.all(25, 79, 55);

    $(".mawuPokedex").hover(() => {
        $('.pokemonListItem').append($pokemonImage, $pokemonName);
        $('.pokemonListItemInfo').append($hp, $attack, $defense, $abilities); 
    });

    $(".trasherPokedex").hover(() => {
        $('.pokemonListItem').append($pokemonImage, $pokemonName);
        $('.pokemonListItemInfo').append($hp, $attack, $defense, $abilities);
    });
})