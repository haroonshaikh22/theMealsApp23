import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import MealsList from './mealsList/MealsList';
import {FavoritesCon} from '../store/context/favorite-context';
import {MEALS} from '../data/dummy-data';

const FavoriteScreen = () => {
  const favMealsCOntext = useContext(FavoritesCon);
  const FavMealsList = MEALS.filter(meal =>
    favMealsCOntext.ids.includes(meal.id),
  );

  console.log(FavMealsList, '=====');

  return (
    <View>
      <MealsList items={FavMealsList} onPress={() => console.log('press')} />
    </View>
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({});
