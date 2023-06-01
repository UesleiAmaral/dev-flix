const key = '8e418011b43380a8dae8b8ca4288a1ff';
const baseURL = `https://api.themoviedb.org/3/movie/`;

export const connection = async (page, category) => {

  const url = `${baseURL}${category}?api_key=${key}&language=pt-BR&page=${page}`;

  const endpoint = fetch(url)
  .then(response => response.json())
  .then(response => {return response})
  .catch(err => console.error(err));

  return await endpoint;

};

export const moviesTrailers = async (id) => {

  const url = `${baseURL}${id}/videos?api_key=${key}&language=pt-BR&`;
  const endpoint = await fetch(url)
    .then(response => response.json())
    .then(response => {return response})
    .catch(err => console.error(`Meu Error ${err}`));

  return await endpoint;

};
