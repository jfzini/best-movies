/**
 * Função responsável por criar e retornar qualquer elemento.
 * @param {string} element - Nome do elemento a ser criado.
 * @param {string} className - Classe do elemento.
 * @param {string} innerText - Texto do elemento.
 * @param {string} src - Src do elemento.
 * @returns {Element} Elemento criado.
 */
export const createCustomElement = (element, className, innerText = '', src = null) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  e.src = src;
  return e;
};

export const createEachMovie = ({ title, image, id, rank, imDbRating }) => {
  const allMoviesContainer = document.querySelector('.movies-list');
  const singleContainer = createCustomElement('div', 'movie-container');

  //CRIA O POSTER DOS FILMES
  const movieImg = createCustomElement('img', 'movie-img', null, image);
  const linkToIMDB = document.createElement('a');
  linkToIMDB.href = `https://www.imdb.com/title/${id}`;
  linkToIMDB.target = '_blank';
  linkToIMDB.append(movieImg);
  singleContainer.appendChild(linkToIMDB);

  //CRIA O TÍTULO DOS FILMES
  const movieTitle = createCustomElement('span', 'movie-title');
  movieTitle.innerHTML = `<a href="https://www.imdb.com/title/${id}" target="_blank">${title}</a>`;
  singleContainer.appendChild(movieTitle);

  //CRIA AVALIAÇÃO IMDB
  const rating = createCustomElement('div', 'rating-container');
  rating.innerHTML = `<img src="https://i.ibb.co/QNLt5n7/star.png" class="star-img"> ${imDbRating}`;
  singleContainer.appendChild(rating);

  allMoviesContainer.appendChild(singleContainer);
};
