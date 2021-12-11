export const updateFavouritesFromLS = (goods) => {
  const rawFavorites = localStorage.getItem('favourites');
  const favorites = rawFavorites !== null ? JSON.parse(rawFavorites) : [];

  if (goods.length > 0) {
    goods.forEach(e => {
      if (favorites.includes(e.id)) {
        e.isFav = true;
        return;
      }
      e.isFav = false;
    })
  }

  return goods;
}

export const saveFavouritesToLS = (goods) => {
  const newFavourites = goods.filter(e => e.isFav);
  localStorage.setItem('favourites', JSON.stringify(newFavourites.map(e => e.id)))
  return newFavourites;
}