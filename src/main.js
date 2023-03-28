import './style.css';
import { fetchBestMoviesList } from './helpers/fetchFunctions';
import { createCustomElement, createEachMovie } from './helpers/elementFunctions';

// ==============================UPPER SCOPE DECLARATIONS==============================

const filterInput = document.querySelector('.filter-input');
const filterBtn = document.querySelector('.filter-button');
const moviesList = await fetchBestMoviesList();

// ==============================FUNCTIONS==============================
const createAllMovies = () => {
  moviesList.forEach((movie) => createEachMovie(movie));
};

const filterMovies = () => {
  const allMoviesContainer = document.querySelector('.movies-list');
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
