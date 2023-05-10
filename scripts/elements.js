export const cardFilmes = ({
    src: poster_path,
    name: title,
    rating: vote_average,
    data: release_date,
    description: overview,
    id: id
}) => {

    const urlTrailer = ''

    const ratingString = vote_average.toString();
    const rating = ratingString.padEnd(3, `.0`);

    const filmes = `
    <div class="card-filmes" id="${id}">
        <div class="filmes">
            <img class="img-filmes" src="https://image.tmdb.org/t/p/original${poster_path}" alt="imagem do(a) filme ${title}">
        </div>
        <div class="description ">
            <p class="rating">${rating}</p>
            <img src="./assets/image/baixados.png" alt="estrelas">
            <span>${release_date}</span>
            <p class="nome-filme">${title}</p>

            <p class="overview">${overview}</p>

            <button class="btnTrailer">Trailer</button>
        </div>
    </div>

`;

    return filmes;

};

export const trailerFilmes = () => {
    let title = 'Trailer';
    let id = 'trailer';

    return `
    <iframe></iframe>
    <button class="btnClose">X</button>
`;
    
};
