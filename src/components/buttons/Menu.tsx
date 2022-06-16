import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { DefaultScreenNavigationProp } from 'interfaces/navigation';
import { ButtonPressInterface } from './interface';
import MenuVAComponent from './Menu.view';

const Menu = () => {
  const navigation: DefaultScreenNavigationProp = useNavigation();
  const menuViewProps: ButtonPressInterface = {
    onPress: () => {
      navigation.navigate('Menu', { userId: 'user' });
    },
  };

  return <MenuVAComponent {...menuViewProps} />;
};

export default Menu;
