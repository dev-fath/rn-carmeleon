import React from 'react';

import PaymentMethods from '../page/menus/PaymentMethods';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Menu from '../page/menus/Menu';

const MenuStackNavigator = () => {
  const MenuStack = createNativeStackNavigator();

  return (
    <MenuStack.Navigator initialRouteName={'Home'} screenOptions={{ headerShown: false }}>
      <MenuStack.Screen name="Home" component={Menu} />
      <MenuStack.Screen name="결제관리" component={PaymentMethods} />
    </MenuStack.Navigator>
  );
};

export default MenuStackNavigator;
