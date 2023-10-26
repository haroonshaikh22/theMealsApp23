import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Meals = ({
  id,
  title,
  imageUrl,
  duration,
  affordability,
  complexity,
  onPress,
}) => {
  const navigation = useNavigation();

  const SelectHandler = () => {
    console.log('kkkk');

    navigation.navigate('MealsDetailsScreen', {mealId: id});
  };
  return (
    <TouchableOpacity
      onPress={SelectHandler}
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        overflow: 'hidden',
        width: '80%',
        alignSelf: 'center',
        marginTop: '10%',
        borderRightColor: 'white',
        elevation: 2,
        shadowColor: 'black',
        // shadowRadius: 8,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
      }}>
      <Image
        source={{uri: imageUrl}}
        style={{
          backgroundColor: 'red',
          width: '100%',
          height: 200,
        }}
      />
      <Text>{title}</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text>{duration}m</Text>
        <Text>{complexity.toUpperCase()}</Text>
        <Text>{affordability.toUpperCase()}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Meals;

const styles = StyleSheet.create({});
