import { connection } from "./scripts/connection.js";
import { cardFilmes } from "./scripts/elements.js";

const container = document.querySelector(".container");

const card = document.querySelectorAll('.card-filmes');

card.forEach((el) => {
    el.addEventListener("mouse",(event) => {


    console.log(event);
    
    })

})




const filmes = await connection();


filmes.results.forEach(element => {
    const cards = cardFilmes({
        src: element.poster_path,
        data:element.release_date,
        name:element.title,
        rating: element.vote_average
    });



    container.innerHTML += cards;


});













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
