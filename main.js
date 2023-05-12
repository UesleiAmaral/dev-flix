import { elementHTML } from "./scripts/elementHtML.js";
import { buttonsPage } from "./scripts/buttons.js";
import { movies, nowPlaying, topRated, upcoming } from "./scripts/connection.js";
import { cardFilmes, trailerFilmes } from "./scripts/elements.js";

let page = 1;
const filmes = await movies(page);

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

// createElement(filmes.results);



const menu = document.querySelectorAll('.search');
const now_Playing = await nowPlaying();
const upcomingMovies = await upcoming();
const topRatedMovies = await topRated();

const typeMovies = document.querySelector('.typeMovie');


menu.forEach(element => {
    console.log(element);

    element.addEventListener('click', (e) => {
        e.preventDefault();

        if (element.textContent == "Filmes Populares") {
            typeMovies.textContent = "Filmes Populares";
            createElement(filmes.results);
            buttonsPage.buttonTrailer();
            buttonsPage.buttonClose();




        }
        else if (element.textContent == "Em Cartaz") {
            typeMovies.textContent = "Em Cartaz";
            createElement(now_Playing.results);

            buttonsPage.buttonTrailer();
            buttonsPage.buttonClose();



            console.log('Aqui');

        }
        else if (element.textContent == "Estreiam Em Breve") {
            typeMovies.textContent = "Estreiam Em Breve";
            createElement(upcomingMovies.results);

            buttonsPage.buttonTrailer();
            buttonsPage.buttonClose();



        }

        else if (element.textContent == "Mais Avaliados") {
            typeMovies.textContent = "Mais Avaliados";
            createElement(topRatedMovies.results);

            buttonsPage.buttonTrailer();
            buttonsPage.buttonClose();


        }
    });

});


// console.log(await topRated());

createElement(filmes.results);


elementHTML.buttonPagePlus.addEventListener('click', (e) => {
    e.preventDefault();
    buttonsPage.buttonPlus();

});

elementHTML.buttonPageLess.addEventListener('click', (e) => {
    e.preventDefault();
    buttonsPage.buttonLess();


});

elementHTML.buttonPageFrist.addEventListener('click', (e) => {
    e.preventDefault();
    buttonsPage.buttonFrist();

});

elementHTML.buttonPageEnd.addEventListener('click', (e) => {
    e.preventDefault();
    buttonsPage.buttonEnd();

});



