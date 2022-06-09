import React from 'react';

import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MenuScreenNavigationProp } from '../../interfaces/navigation';
import { MenuItemInterface } from '../../interfaces/menuItem';
import { useSelector } from 'react-redux';
import { carmeleonState } from '../../redux/store';

const MenuItem = ({ icon, name, title, needAuth, modalVisible = false, setModalVisible }: MenuItemInterface) => {
  const menuNavigation: MenuScreenNavigationProp = useNavigation();
  const isAuthenticated = useSelector((state: carmeleonState) => state.isAuthenticated);

  function navigateOnPress() {
    console.warn(title);
    if (needAuth) {
      if (isAuthenticated) {
        menuNavigation.navigate(name);
        return;
      }
      if (setModalVisible) {
        setModalVisible(!modalVisible);
      }
      return;
    }
    menuNavigation.navigate(name);
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigateOnPress();
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
