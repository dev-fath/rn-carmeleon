import { Text, TouchableWithoutFeedback, View } from 'react-native';
import React from 'react';
import { MenuItemPropsInterface } from './interfaces';

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

export default MenuItemVAComponent;
