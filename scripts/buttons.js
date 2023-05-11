import { movies, moviesTrailers } from "./connection.js";
import { createElement } from "../main.js";
import { trailerFilmes } from "./elements.js";

import { elementHTML } from "./elementHtML.js";

let page = 1;


const divTrailer = document.createElement('div');

divTrailer.classList.add('trailer');
divTrailer.innerHTML = trailerFilmes();


export const buttonsPage = {
  filmes: await movies(page),

  buttonPlus() {
    elementHTML.buttonPagePlus.addEventListener('click', async (e) => {

      if (page == 500) {
        return;
      }

      e.preventDefault();
      page += 1;
      this.filmes = await movies(page);
      createElement(this.filmes.results);
      elementHTML.numberPage.innerHTML = `${page}`;

    });
  },

  buttonLess() {
    elementHTML.buttonPageLess.addEventListener('click', async (e) => {

      e.preventDefault();

      if (page <= 1) {
        return;

      };

      page -= 1;
      this.filmes = await movies(page);
      createElement(this.filmes.results);
      elementHTML.numberPage.innerHTML = `${page}`;

    });

  },

  buttonFrist() {

    elementHTML.buttonPageFrist.addEventListener('click', async (e) => {

      e.preventDefault();
      page = 1;
      this.filmes = await movies(page);
      createElement(this.filmes.results);
      elementHTML.numberPage.innerHTML = `${page}`;

    });

  },

  buttonEnd() {
    elementHTML.buttonPageEnd.addEventListener('click', async (e) => {

      e.preventDefault();
      page = 500;
      this.filmes = await movies(page);
      createElement(this.filmes.results);
      elementHTML.numberPage.innerHTML = `${page}`;

    })

  },

  buttonTrailer() {
    const btnTrailer = document.querySelectorAll('.btnTrailer');
    const trailer = document.querySelector('.trailer');
    const trailerIframe = document.querySelector('iframe');


    btnTrailer.forEach((btn) => {
      const h2 = document.querySelector('.notTrailer');

      btn.addEventListener('click', async (e) => {
        e.preventDefault();

        const id = btn.parentNode.parentNode.id;
        const urlTrailer = await moviesTrailers(id);

        try {
          trailerIframe.src = `https://www.youtube.com/embed/${urlTrailer.results[0].key}`;
          trailer.classList.add('open');

        } catch (error) {
          trailer.classList.add('open');
          console.log(error);

          h2.innerHTML = 'Trailer nao encontrado!';

          return;

        };
      });
    });

  },

  buttonClose() {
    const trailer = document.querySelector('.trailer');
    const trailerIframe = document.querySelector('iframe');

    const close = document.querySelectorAll('.btnClose');

    close.forEach((el) => {

      el.addEventListener('click', (e) => {
        e.preventDefault();
        trailerIframe.src = '';
        // h2.classList.add('notTrailerDisplayNone');

        trailer.classList.remove('open');

      });
    });

  },

};



