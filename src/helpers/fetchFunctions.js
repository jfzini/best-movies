export const fetchBestMoviesList = async () => {
  const response = await fetch('https://raw.githubusercontent.com/lukadev08/lukadev08.github.io/main/apidata/imdbtop250moviesdata.json');
  const moviesList = await response.json();
  return moviesList.items;
};
