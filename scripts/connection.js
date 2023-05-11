const key = '8e418011b43380a8dae8b8ca4288a1ff';


export const movies = async (page) => {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=pt-BR&page=${page}`;
  const endpoint = await fetch(url);
  const data = endpoint.json();

  return await data;

};

export const moviesTrailers = async (id) => {

  const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}&language=pt-BR&`;
  const endpoint = await fetch(url)
    .then(response => response.json())
    .then(response => {return response})
    .catch(err => console.error(`Meu Error ${err}`));

  return await endpoint;

};
