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
import React, {useLayoutEffect} from 'react';
import {CATEGORIES, MEALS} from '../data/dummy-data';

const MealsDetailsScreen = ({route, navigation}) => {
  const mealId = route?.params?.mealId;

  const SelectMeals = MEALS.find(meal => meal?.id === mealId);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => alert('This is a button!')}
          title="Update count"
        />
      ),
    });
  }, [navigation]);

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
        console.log(data, 'lll');

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
