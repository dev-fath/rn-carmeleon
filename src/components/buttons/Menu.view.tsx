import { ButtonPressInterface } from './interface';
import { Pressable, Text, View } from 'react-native';
import { ColorTheme } from '../../../assets/colorCodes';
import React from 'react';

const MenuVAComponent = (props: ButtonPressInterface) => {
  return (
    <Pressable onPress={props.onPress}>
      <View>
        <Text style={{ color: ColorTheme.white }}>메뉴버튼</Text>
      </View>
    </Pressable>
  );
};

export default MenuVAComponent;
