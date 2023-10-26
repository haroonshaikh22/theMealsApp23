/* eslint-disable react/no-unstable-nested-components */
import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CATEGORIES} from '../data/dummy-data';
import CategoriesGridTile from '../components/CategoriesGridTile';

const CategoriesScreen = (props: any) => {
  const RenderItems = (itemdatas: any) => {
    console.log(itemdatas?.item?.id, 'lllll');

    const pressHandler = () => {
      props?.navigation.navigate('MealsOverviewScreen', {
        categoryId: itemdatas?.item?.id,
      });
    };
    return (
      <CategoriesGridTile
        title={itemdatas?.item?.title}
        color={itemdatas?.item?.color}
        onPress={pressHandler}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={item => {
        item.id;
      }}
      renderItem={RenderItems}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({});
