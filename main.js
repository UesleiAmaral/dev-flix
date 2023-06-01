import { elementHTML } from "./scripts/elementHTML.js";
import { buttonsPage } from "./scripts/buttons.js";
import { connection } from "./scripts/connection.js";
import { cardFilmes, trailerFilmes } from "./scripts/elements.js";

let page = 1;
const filmes = await connection(page, 'popular');

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
buttonsPage.buttonTrailer();
buttonsPage.buttonClose();



const menu = document.querySelectorAll('.search');

const now_Playing = await connection(page, 'now_playing');
const upcomingMovies = await connection(page, 'upcoming');
const topRatedMovies = await connection(page, 'top_rated');


const typeMovies = document.querySelector('.typeMovie');


menu.forEach(element => {
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



const menuHamburger = document.getElementById('checkbox-menu');

const buttonHB = document.querySelectorAll('.button-hb');
const navHamburguer = document.querySelector('.nav-bar-hamburguer');


menuHamburger.addEventListener('click', () => {
  navHamburguer.classList.toggle('display-none');
});


buttonHB.forEach((button) => {
  button.addEventListener('click', () => {
    navHamburguer.classList.toggle('display-none');

    menuHamburger.checked = false;
  });

});