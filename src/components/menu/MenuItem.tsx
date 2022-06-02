import React from 'react';

import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MenuScreenNavigationProp } from '../../interfaces/navigation';
import { MenuItemInterface } from '../../interfaces/menuItem';

const MenuItem = ({ icon, name, title, needAuth, modalVisible = false, setModalVisible }: MenuItemInterface) => {
  const menuNavigation: MenuScreenNavigationProp = useNavigation();

  function navigateOnPress() {
    if (needAuth) {
      //TODO : 로그인 여부 불러오기
      const isAuth = false;
      if (isAuth) {
        menuNavigation.navigate(name);
      } else {
        if (setModalVisible) {
          setModalVisible(!modalVisible);
        }
      }
      return;
    }
    menuNavigation.navigate(name);
    console.warn(title);
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
