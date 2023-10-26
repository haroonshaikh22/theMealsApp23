import {View, Text, Button} from 'react-native';
import React from 'react';
import CategoriesScreen from './screen/CategoriesScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MealsOverviewScreen from './screen/MealsOverviewScreen';
import MealsDetailsScreen from './screen/MealsDetailsScreen';
import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import FavoriteScreen from './screen/FavoriteScreen';

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="CategoriesScreen" component={CategoriesScreen} />
      <Drawer.Screen name="FavoriteScreen" component={FavoriteScreen} />
    </Drawer.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="CategoriesScreen"
          component={MyDrawer}
          options={{header: () => false}}
        />
        <Stack.Screen
          name="MealsOverviewScreen"
          component={MealsOverviewScreen}
        />
        <Stack.Screen
          name="MealsDetailsScreen"
          component={MealsDetailsScreen}
          // options={{
          //   // headerTitle: props => <LogoTitle {...props} />,
          //   headerRight: () => (
          //     <Button
          //       onPress={() => alert('This is a button!')}
          //       title="Info"
          //       color="#fff"
          //     />
          //   ),
          // }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
