import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { MenuScreenNavigationProp } from '../../interfaces/navigation';
import { MenuItemInterface } from '../../interfaces/menuItem';
import { useSelector } from 'react-redux';
import { carmeleonState } from '../../redux/store';
import { MenuItemPropsInterface } from './interfaces';
import MenuItemVAComponent from './Item.view';

const Item = (props: MenuItemInterface) => {
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

export default Item;
