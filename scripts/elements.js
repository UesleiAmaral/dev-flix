export const cardFilmes = ({
    src: poster_path,
    name: title,
    rating: vote_average,
    data: release_date,
    description: overview
}) => {

    const ratingString = vote_average.toString();
    const rating = ratingString.padEnd(3, `.0`);

    // overview = 'Testando!';

    const filmes = `
    <div class="card-filmes">
        <div class="filmes">
            <img class="img-filmes" src="https://image.tmdb.org/t/p/original${poster_path}" alt="imagem do(a) filme ${title}">
        </div>
        <div class="description ">
            <p class="rating">${rating}</p>
            <img src="./assets/image/baixados.png" alt="estrelas">
            <span>${release_date}</span>
            <p class="nome-filme">${title}</p>

            <p class="overview">${overview}</p>

            <button class="btnSinopse">Sinopse</button>
        </div>
  </div>`;

    return filmes;

}