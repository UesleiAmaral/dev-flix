import { connection } from "./scripts/connection.js";
import { cardFilmes } from "./scripts/elements.js";

let page = 1;
let filmes = await connection(page);
let numberPage = document.querySelector('.numberPage');

const container = document.querySelector(".container");

const buttonPagePlus = document.querySelector('.pagePlus');
const buttonPageLess = document.querySelector('.pageLess');
const buttonPageFrist = document.querySelector('.pageFrist');
const buttonPageEnd = document.querySelector('.pageEnd');


const createElement = (element) => {

    container.innerHTML = '';

    element.forEach(element => {
        const cards = cardFilmes({
            src: element.poster_path,
            data: element.release_date,
            name: element.title,
            rating: element.vote_average,
            description: element.overview
        });
        container.innerHTML += cards;

    });

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












// const filmes = document.querySelector('.filmes');
// filmes.innerHTML = `<img class="img-filmes"
// src="https://image.tmdb.org/t/p/original/ngl2FKBlU4fhbdsrtdom9LVLBXw.jpg" alt="">`


// image.items.forEach(element => {

//     console.log(element.image);

//     const elementImage = document.createElement('img');
//     elementImage.classList.add('img-filmes');

//     elementImage.src = element.image;

//     filmes.innerHTML = elementImage;
// });
