/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useLayoutEffect} from 'react';
import {CATEGORIES, MEALS} from '../data/dummy-data';
import {FavoritesCon} from '../store/context/favorite-context';
import FavIcon from 'react-native-vector-icons/Ionicons';

const MealsDetailsScreen = ({route, navigation}) => {
  const mealId = route?.params?.mealId;

  const favMealsContext = useContext(FavoritesCon);
  const isFavoriteMeals = favMealsContext.ids.includes(mealId);

  console.log(mealId, isFavoriteMeals, 'id');

  const SelectMeals = MEALS.find(meal => meal?.id === mealId);

  const ChangeFavHandler = () => {
    console.log('chan press', isFavoriteMeals);
    if (isFavoriteMeals) {
      console.log('1');

      favMealsContext.removeFavorite(mealId);
    } else {
      console.log('2');

      favMealsContext.addFavorite(mealId);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <FavIcon name="star" size={26} onPress={ChangeFavHandler} />
      ),
    });
  }, [navigation, ChangeFavHandler]);

  return (
    <ScrollView
      style={{}}
      contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}>
      <Image
        source={{uri: SelectMeals?.imageUrl}}
        style={{width: '90%', height: '50%', marginTop: '10%'}}
      />
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          justifyContent: 'space-between',
          width: '40%',
          marginTop: '5%',
        }}>
        <Text>{SelectMeals?.duration}m</Text>
        <Text>{SelectMeals?.complexity}</Text>
        <Text>{SelectMeals?.affordability}</Text>
      </View>
      <Text>ingredients</Text>
      {SelectMeals?.ingredients?.map(data => {
        return (
          <View
            style={{
              alignItems: 'flex-start',
              width: '80%',
              marginTop: '3%',
            }}>
            <Text>{data}</Text>
          </View>
        );
      })}
      <Text>Steps</Text>
      {SelectMeals?.steps.map(data => {
        return (
          <View
            style={{
              alignItems: 'flex-start',
              width: '80%',
              marginTop: '3%',
            }}>
            <Text>{data}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default MealsDetailsScreen;

const styles = StyleSheet.create({});
