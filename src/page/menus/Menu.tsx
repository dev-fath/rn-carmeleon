import React from 'react';

import { Pressable, SafeAreaView, Text, TouchableWithoutFeedback, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ColorTheme } from '../../../assets/colorCodes';
import MenuList from '../../components/menu/MenuList';
import { DefaultScreenNavigationProp, MenuScreenNavigationProp } from '../../interfaces/navigation';
import { useSelector } from 'react-redux';
import { carmeleonState } from '../../redux/store';
import LogoutButton from '../../components/login/LogoutButton';

const Menu = () => {
  const menuNavigation: MenuScreenNavigationProp = useNavigation();
  const mainNavigation: DefaultScreenNavigationProp = useNavigation();
  const isAuthenticated = useSelector((state: carmeleonState) => state.isAuthenticated);

  return (
    <>
      <SafeAreaView style={{ backgroundColor: ColorTheme.Main }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginLeft: 24,
            marginRight: 24,
          }}
        >
          <Text style={{ color: ColorTheme.white }}>로고</Text>
          <TouchableWithoutFeedback onPress={menuNavigation.goBack}>
            <Text style={{ color: ColorTheme.white }}>X</Text>
          </TouchableWithoutFeedback>
        </View>
        <View style={{ margin: 24 }}>
          {isAuthenticated ? (
            <View>
              <Text>프로필</Text>
              <LogoutButton />
            </View>
          ) : (
            <>
              <Text style={{ color: ColorTheme.white }}>첫 로그인 접속하시면 100 포인트를 드려요.</Text>
              <Pressable
                onPress={() => {
                  mainNavigation.navigate('Login');
                }}
              >
                <Text style={{ color: ColorTheme.white }}>회원가입/로그인하기&gt; </Text>
              </Pressable>
            </>
          )}
        </View>
      </SafeAreaView>
      <MenuList />
    </>
  );
};

export default Menu;
