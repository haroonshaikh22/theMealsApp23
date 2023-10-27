/* eslint-disable react/no-unstable-nested-components */
import {StyleSheet} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {CATEGORIES, MEALS} from '../data/dummy-data';
import MealsList from './mealsList/MealsList';

const MealsOverviewScreen = ({route, navigation}) => {
  const CateId = route?.params?.categoryId;

  const displayData = MEALS.filter(mealItems => {
    return mealItems?.categoryIds?.indexOf(CateId) >= 0;
  });
  console.log(displayData, 'display');

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(cate => {
      return cate?.id === CateId;
    })?.title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [CateId, navigation]);

  const pressHandler = () => {
    return navigation?.navigate('MealsDetailsScreen', {CateId});
  };

  return <MealsList items={displayData} onPress={pressHandler} />;
};

export default MealsOverviewScreen;
