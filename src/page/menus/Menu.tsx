import React from 'react';

import { SafeAreaView, Text, TouchableWithoutFeedback, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MenuItem from '../../components/menu/MenuItem';

const Menu = () => {
  const menuList = [
    { icon: '아이콘', name: '결제관리' },
    { icon: '아이콘', name: '차량관리' },
    { icon: '아이콘', name: '이용내역' },
    { icon: '아이콘', name: '리뷰관리' },
    { icon: '아이콘', name: '이벤트' },
    { icon: '아이콘', name: '즐겨찾기' },
    { icon: '아이콘', name: '문의하기' },
    { icon: '아이콘', name: '공지사항' },
    { icon: '아이콘', name: '설정' },
    { icon: '아이콘', name: '큐알라' },
  ];
  const menuNavigation = useNavigation();
  return (
    <SafeAreaView>
      <View>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text>로고</Text>
          <TouchableWithoutFeedback onPress={menuNavigation.goBack}>
            <Text>X</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
      <View>
        <Text>첫 로그인 접속하시면 100 포인트를 드려요.</Text>
        <Text>회원가입/로그인하기&gt; </Text>
      </View>
      <View style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', flexDirection: 'row' }}>
        {menuList.map(menu => {
          return <MenuItem key={menu.name} {...menu} />;
        })}
      </View>
    </SafeAreaView>
  );
};

export default Menu;
