import React from 'react';

import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { DefaultScreenNavigationProp } from 'interfaces/navigation';

const MenuButton = () => {
  const navigation: DefaultScreenNavigationProp = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Menu', { userId: 'user' });
      }}
    >
      <View>
        <Text>메뉴버튼</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MenuButton;
