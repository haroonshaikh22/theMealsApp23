import {createContext, useState} from 'react';

export const FavoritesCon = createContext({
  ids: [],
  addFavorite: id => {},
  removeFavorite: id => {},
});

function FavoriteContextProvider({children}) {
  const [favoriteIds, setFavoriteIds] = useState([]);
  console.log(favoriteIds, 'ids----');

  function addFavorite(id) {
    console.log('tre');

    setFavoriteIds(prev => [...prev, id]);
  }

  function removeFavorite(id) {
    console.log(';;kkfa');

    setFavoriteIds(prev => prev.filter(mealId => mealId !== id));
  }

  const value = {
    ids: favoriteIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };
  return (
    <FavoritesCon.Provider value={value}>{children}</FavoritesCon.Provider>
  );
}

export default FavoriteContextProvider;
