import cache from './cache.js';
import {q, generateLiList, fetchWithCache} from './utils.js';
import taskman from './taskman.js';
cache.initLocal();

const container = q('.container');

const getFilms = async (url, targetElm) => {
  const response = await fetch(url).then(res => res.json());
  response.forEach(e => showFilm(e, targetElm));
}

const showFilm = async ({episodeId, name, openingCrawl, characters}, targetElm) => {
  const filmCard = document.createElement('div');
  filmCard.className = 'film-card';
  filmCard.innerHTML = `
    <h2>Episode #${episodeId}: ${name}</h2>
    <p>${openingCrawl}</p>
    <h3>CAST:</h3>`;
  targetElm.append(filmCard);

  const chars = await Promise.allSettled(characters.map(url => {
    taskman.newTask();
    return fetchWithCache(url);   
  })).then(arr => arr.map(({value, status}) => status === 'fulfilled' ? value : '').filter(value => !!value));

  const charsContainer = document.createElement('div');
  charsContainer.className = 'film-card__cast';
  filmCard.append(charsContainer);

  chars.forEach(char => charsContainer.insertAdjacentHTML('beforeend', `
    <div class="char-card">
      <h4>${char.name}</h4>
      <ul>${generateLiList(['gender', 'birthYear', 'eyeColor', 'hairColor', 'height', 'mass'], char)}</ul>
    </div>`));
}

getFilms('https://ajax.test-danit.com/api/swapi/films', container);