import React from 'react';

import PaymentMethods from '../page/menus/PaymentMethods';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Menu from '../page/menus/Menu';

const MenuStackNavigator = () => {
  const MenuStack = createNativeStackNavigator();

  return (
    <MenuStack.Navigator initialRouteName={'Home'} screenOptions={{ headerShown: false }}>
      <MenuStack.Screen name="Home" component={Menu} />
      <MenuStack.Screen name="Payment" component={PaymentMethods} />
      <MenuStack.Screen name="Car" component={PaymentMethods} />
      <MenuStack.Screen name="History" component={PaymentMethods} />
      <MenuStack.Screen name="Reviews" component={PaymentMethods} />
      <MenuStack.Screen name="Event" component={PaymentMethods} />
      <MenuStack.Screen name="Favorites" component={PaymentMethods} />
      <MenuStack.Screen name="Questions" component={PaymentMethods} />
      <MenuStack.Screen name="Notice" component={PaymentMethods} />
      <MenuStack.Screen name="Settings" component={PaymentMethods} />
      <MenuStack.Screen name="Qrla" component={PaymentMethods} />
    </MenuStack.Navigator>
  );
};

export default MenuStackNavigator;
