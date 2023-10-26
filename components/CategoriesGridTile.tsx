/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const CategoriesGridView = ({title, color, onPress}) => {
  return (
    <View
      style={{
        width: '40%',
        margin: '5%',
        height: 180,
        elevation: 4,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#654444',
        borderRadius: 10,
        overflow: 'hidden',
      }}>
      <TouchableOpacity
        onPress={onPress}
        style={{
          flex: 1,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: color,
        }}>
        <Text style={{fontSize: 16}}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CategoriesGridView;

const styles = StyleSheet.create({});
