
export const connection = async () => {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=8e418011b43380a8dae8b8ca4288a1ff&language=en-US&page=1`;
  const endpoint = await fetch(url);
  const data = endpoint.json();
  
  return await data;
  
};

// const key = 'k_iykyg8yn';
// export const connection = async () => {
//   const url = `https://pokeapi.co/api/v2/pokemon/${1010}`;
//   const endpoint = await fetch(url);
//   const data = endpoint.json();

//   return await data;

// };
