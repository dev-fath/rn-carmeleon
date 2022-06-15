import React from 'react';

import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MenuScreenNavigationProp } from '../../interfaces/navigation';
import { MenuItemInterface } from '../../interfaces/menuItem';
import { useSelector } from 'react-redux';
import { carmeleonState } from '../../redux/store';

interface MenuItemPropsInterface extends MenuItemInterface {
  onPress: () => void;
}

const MenuItem = (props: MenuItemInterface) => {
  const menuNavigation: MenuScreenNavigationProp = useNavigation();
  const isAuthenticated = useSelector((state: carmeleonState) => state.isAuthenticated);

  const menuItemProps: MenuItemPropsInterface = {
    ...props,
    onPress: () => {
      console.warn(props.title);
      if (props.needAuth) {
        if (isAuthenticated) {
          menuNavigation.navigate(props.name);
          return;
        }
        if (props.setModalVisible) {
          props.setModalVisible(!props.modalVisible);
        }
        return;
      }
      menuNavigation.navigate(props.name);
    },
  };

  return <MenuItemVAComponent {...menuItemProps} />;
};

const MenuItemVAComponent = (props: MenuItemPropsInterface) => {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View style={{ width: '50%', display: 'flex', flexDirection: 'row', justifyContent: 'center', padding: 16 }}>
        <Text>{props.icon}</Text>
        <Text>{props.name}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MenuItem;
