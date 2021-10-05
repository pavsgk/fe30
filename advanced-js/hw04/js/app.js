import cache from './cache.js';

document.body.onclick = cache.getStats.bind(cache);

const generateLiList = (arr, targetObj) => arr.map(e => 
  targetObj[e] ? `<li>${e}: ${targetObj[e]}</li>` : '').join('');

class CharCard {
  constructor(url, target = document.body) {
    this.target = target;
    this.url = url;
    this.charData = null;

    this.card = document.createElement('div');
    this.card.className = 'char-card';

    this.getCharData();
  }

  async getCharData() {
    const cached = cache[this.url];
    if (cached) {
      this.charData = cached;
    } else {
      this.charData = await fetch(this.url)
        .then(resp => resp.json())
        .catch(err => console.log(err));
      cache[this.url] = this.charData;
    }

    this.render();
  }

  render(target = this.target) {
    const {card, charData} = this;

    if (charData === null) {
      this.getCharData();
      return this.card;
    }

    card.innerHTML = `
    <h3>${charData.name}</h3>
    <ul>${generateLiList(['gender', 'birthYear', 'eyeColor', 'hairColor', 'height', 'mass'], charData)}</ul>
    `
    target.append(this.card);
    return this.card;
  }
}

class MovieCard {
  constructor(url, target = document.body) {
    this.target = target;
    this.url = url;
    this.chars = [];
    this.movieData = null;

    this.cardElm = document.createElement('div');
    this.cardElm.className = 'movie-card';
    this.charsElm = document.createElement('div');
    this.charsElm.className = 'movie-card__cast';

    this.getMovieData();
  }

  async getMovieData() {
    const cached = cache[this.url];
    if (cached) {
      this.movieData = cached;
    } else {
      this.movieData = await fetch(this.url)
        .then(resp => resp.json())
        .catch(err => console.log(err));
        cache[this.url] = this.movieData;
    }
    this.fillChars();
    this.render();
  }

  fillChars() {
    this.chars = this.movieData.characters.map(e =>
      new CharCard(e, this.charsElm))
  }

  render(target = this.target) {
    const {movieData, cardElm, charsElm} = this;
    // cardElm.innerHTML = 
    this.cardElm.append(this.charsElm);
    target.append(cardElm);
  }
}

class MoviesList {
  constructor(url, parentSelector = 'body') {
    this.url = url;
    this.parent = document.querySelector(parentSelector);
    this.container = document.createElement('div');
    this.container.className = 'movies';
    this.loadScreen = document.createElement('div');
    this.movies = [];
    this.render();
    this.reqest();
  }
  render() {
    this.loadScreen.innerHTML = 'LOADING...';
    this.container.append(this.loadScreen);
    this.parent.append(this.container)
  }
  async reqest() {
    const response = await fetch(this.url)
      .then(response => response.json())
      .catch(err => console.log(err));
    this.movies = response.map(({
        episodeId,
        name,
        openingCrawl,
        characters: charUrls
      }) =>
      new MovieCard(episodeId, name, openingCrawl, charUrls));
    this.refresh();
  }
}

const movie1 = new MovieCard('https://ajax.test-danit.com/api/swapi/films/1');
  // refresh() {
  //   this.container.innerHTML = this.films.map(({episodeId, name, openingCrawl}) =>
  //   `<div>
  //     #${episodeId}
  //     <h3>${name}</h3>
  //     <p>${openingCrawl}</p>.
  //   </div>`
  //   ).join('');
  // }


// const filmsAll = new FilmsList('https://ajax.test-danit.com/api/swapi/films')