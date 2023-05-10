import { movies, moviesTrailers } from "./scripts/connection.js";
import { cardFilmes, trailerFilmes } from "./scripts/elements.js";

let page = 1;
let filmes = await movies(page);
let numberPage = document.querySelector('.numberPage');

const container = document.querySelector(".container");

const buttonPagePlus = document.querySelector('.pagePlus');
const buttonPageLess = document.querySelector('.pageLess');
const buttonPageFrist = document.querySelector('.pageFrist');
const buttonPageEnd = document.querySelector('.pageEnd');

console.log(filmes.results);


const divTrailer = document.createElement('div');

divTrailer.classList.add('trailer');
divTrailer.innerHTML = trailerFilmes();

const createElement = (element) => {

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

buttonPagePlus.addEventListener('click', async (e) => {

    e.preventDefault();
    page += 1;
    filmes = await connection(page);
    createElement(filmes.results);
    numberPage.innerHTML = `${page}`;

});

buttonPageLess.addEventListener('click', async (e) => {

    e.preventDefault();

    if (page <= 1) {
        return;

    };

    page -= 1;
    filmes = await connection(page);
    createElement(filmes.results);
    numberPage.innerHTML = `${page}`;

});


buttonPageFrist.addEventListener('click', async (e) => {

    e.preventDefault();
    page = 1;
    filmes = await connection(page);
    createElement(filmes.results);
    numberPage.innerHTML = `${page}`;

});

buttonPageEnd.addEventListener('click', async (e) => {

    e.preventDefault();
    page = 500;
    filmes = await connection(page);
    createElement(filmes.results);
    numberPage.innerHTML = `${page}`;

});

createElement(filmes.results);

const btnTrailer = document.querySelectorAll('.btnTrailer');


const trailer = document.querySelector('.trailer');

const btnClose = document.querySelectorAll('.btnClose');


const trailerIframe = document.querySelector('iframe');

btnTrailer.forEach((el) => {
    el.addEventListener('click', async (e) => {
        e.preventDefault();

        const id = el.parentNode.parentNode.id;

        try {
            const urlTrailer = await moviesTrailers(id);
            trailerIframe.src = `https://www.youtube.com/embed/${urlTrailer.results[0].key}`;
            trailer.classList.add('open');

        } catch (error) {
            divTrailer.innerHTML = 'Trailer não encontrado';
            trailer.classList.add('open');

            console.log(error);

        }
    });
});

btnClose.forEach((el) => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        trailerIframe.src = '';

        trailer.classList.remove('open');

    });
});