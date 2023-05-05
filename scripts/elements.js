export const cardFilmes = ({
    src: poster_path,
    name: title,
    rating: vote_average,
    data: release_date
}) => {

    const ratingString = vote_average.toString();
    const rating = ratingString.padEnd(3, `.0`);


    const filmes = `
    <div class="card-filmes">
        <div class="filmes">
            <img class="img-filmes" src="https://image.tmdb.org/t/p/original${poster_path}" alt="imagem do(a) filme ${title}">
        </div>
        <div class="description description-hidden">
            <p class="rating">${rating}</p>
            <img src="./assets/image/baixados.png" alt="estrelas">
            <p class="nome-filme">${title}</p>
            <span>${release_date}</span>

            <button class="btnSinopse">Sinopse</button>
        </div>
  </div>`;

    return filmes;

}