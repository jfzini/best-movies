import './style.css';
import { fetchBestMoviesList } from './helpers/fetchFunctions';
import { createCustomElement, createEachMovie } from './helpers/elementFunctions';

// ==============================UPPER SCOPE DECLARATIONS==============================

const filterInput = document.querySelector('.filter-input');
const filterBtn = document.querySelector('.filter-button');
const allMoviesContainer = document.querySelector('.movies-list');


// ==============================FUNCTIONS==============================
const createAllMovies = async () => {
  const loadingImg = document.createElement('img');
  loadingImg.src = 'https://static.thenounproject.com/png/3095076-200.png';
  loadingImg.className = 'loading-img';
  const loadingPrgph = document.createElement('p');
  loadingPrgph.innerHTML = 'carregando...';
  const genericDiv = document.createElement('div');
  genericDiv.appendChild(loadingImg);
  genericDiv.appendChild(loadingPrgph);

  try {
    allMoviesContainer.appendChild(genericDiv);
    const moviesList = await fetchBestMoviesList();
    moviesList.forEach((movie) => createEachMovie(movie));
    loadingPrgph.className = 'hidden';
    loadingImg.className = 'hidden';
  } catch (error) {
    loadingPrgph.innerHTML = 'Algum erro ocorreu, recarregue a página e tente novamente';
    loadingImg.className = 'hidden';
  }

};

const filterMovies = async () => {
  const moviesList = await fetchBestMoviesList();
  const filterValue = document.querySelector('.filter-input').value;
  console.log(Number(filterValue));
  if (filterValue > 2023) {
    allMoviesContainer.innerHTML = 'Insira uma data válida. Por exemplo: 1980';
    return;
  }
  allMoviesContainer.innerHTML = '';
  const filteredMovies = moviesList.filter(({ year }) => Number(year) >= filterValue);
  filteredMovies.forEach((movie) => createEachMovie(movie));
};

// ==============================EVENT LISTENERS==============================
filterBtn.addEventListener('click', filterMovies);
filterInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    filterMovies();
  }
});

// ==============================ONLOAD CALLS==============================
window.onload = () => {
  createAllMovies();
};
