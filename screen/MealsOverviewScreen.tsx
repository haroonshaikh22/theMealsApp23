/* eslint-disable react/no-unstable-nested-components */
import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useLayoutEffect} from 'react';
import {CATEGORIES, MEALS} from '../data/dummy-data';
import Meals from '../components/Meals';

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

  const RenderMealsItem = (itemData: any) => {
    const item = itemData?.item;

    const itemsProps = {
      id: item?.id,
      title: item?.title,
      imageUrl: item?.imageUrl,
      affordability: item?.affordability,
      complexity: item?.complexity,
      duration: item?.duration,
      onPress: pressHandler,
    };
    return <Meals {...itemsProps} />;
  };

  return (
    <View>
      <FlatList
        data={displayData}
        renderItem={RenderMealsItem}
        keyExtractor={item => {
          item.id;
        }}
      />
      {/* {displayData.map(data => {
        return (
          <View>
            <Text>{data?.title}</Text>
          </View>
        );
        console.log(data, 'lll');
      })} */}
      <Text>jj</Text>
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({});
