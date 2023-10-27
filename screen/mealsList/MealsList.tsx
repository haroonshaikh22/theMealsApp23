import {FlatList, Text, View} from 'react-native';
import Meals from './Meals';

function MealsList({items, onPress}) {
  const RenderMealsItem = (itemData: any) => {
    const item = itemData?.item;

    const itemsProps = {
      id: item?.id,
      title: item?.title,
      imageUrl: item?.imageUrl,
      affordability: item?.affordability,
      complexity: item?.complexity,
      duration: item?.duration,
      onPress: onPress,
    };
    return <Meals {...itemsProps} />;
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={items}
        renderItem={RenderMealsItem}
        keyExtractor={item => {
          item.id;
        }}
      />
    </View>
  );
}

export default MealsList;
