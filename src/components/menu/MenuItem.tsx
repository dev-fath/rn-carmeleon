import React from 'react';

import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MenuScreenNavigationProp } from '../../interfaces/navigation';
import { MenuItemInterface } from '../../interfaces/menuItem';

const MenuItem = ({ icon, name, title }: MenuItemInterface) => {
  const menuNavigation: MenuScreenNavigationProp = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        menuNavigation.navigate(name);
        console.warn(title);
      }}
    >
      <View style={{ width: '50%', display: 'flex', flexDirection: 'row', justifyContent: 'center', padding: 16 }}>
        <Text>{icon}</Text>
        <Text>{name}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MenuItem;
