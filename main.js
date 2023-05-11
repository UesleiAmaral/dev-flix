import { movies, moviesTrailers } from "./scripts/connection.js";
import { cardFilmes, trailerFilmes } from "./scripts/elements.js";
import { buttonsPage } from "./scripts/buttons.js";
import { elementHTML } from "./scripts/elementHtML.js";

let page = 1;
let filmes = await movies(page);

const container = document.querySelector(".container");
const divTrailer = document.createElement('div');

divTrailer.classList.add('trailer');
divTrailer.innerHTML = trailerFilmes();

export const createElement = (element) => {

    container.innerHTML = '';

    element.forEach(element => {
        const cards = cardFilmes({
            src: element.poster_path,
            data: element.release_date,
            name: element.title,
            rating: element.vote_average,
            description: element.overview,
            id: element.id
        });
        container.innerHTML += cards;

    });

    container.appendChild(divTrailer);

    return element;

};

createElement(filmes.results);
buttonsPage.buttonPlus();
buttonsPage.buttonLess();
buttonsPage.buttonFrist();
buttonsPage.buttonEnd();

buttonsPage.buttonTrailer();
buttonsPage.buttonClose();